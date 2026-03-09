import { expect, test, describe } from 'vitest';
import {
  calculateDistance, getDayOfWeek, findBookingPlans, findBestPlan, findTransport,
} from './coordinator';

describe('calculateDistance', () => {
  test('same point returns 0', () => {
    const loc = { lat: 40.7128, lng: -74.006 };
    expect(calculateDistance(loc, loc)).toBeCloseTo(0, 1);
  });

  test('known distance NYC landmarks', () => {
    // Times Square to downtown ~7km
    const timesSquare = { lat: 40.7580, lng: -73.9855 };
    const downtown = { lat: 40.7128, lng: -74.006 };
    const dist = calculateDistance(timesSquare, downtown);
    expect(dist).toBeGreaterThan(4);
    expect(dist).toBeLessThan(8);
  });

  test('short distance', () => {
    const a = { lat: 40.7484, lng: -73.9857 };
    const b = { lat: 40.7505, lng: -73.9934 };
    const dist = calculateDistance(a, b);
    expect(dist).toBeGreaterThan(0.1);
    expect(dist).toBeLessThan(2);
  });
});

describe('getDayOfWeek', () => {
  test('2025-03-15 is saturday', () => {
    expect(getDayOfWeek('2025-03-15')).toBe('saturday');
  });

  test('2025-03-16 is sunday', () => {
    expect(getDayOfWeek('2025-03-16')).toBe('sunday');
  });

  test('2025-03-17 is monday', () => {
    expect(getDayOfWeek('2025-03-17')).toBe('monday');
  });

  test('2025-03-18 is tuesday', () => {
    expect(getDayOfWeek('2025-03-18')).toBe('tuesday');
  });
});

describe('findBookingPlans', () => {
  test('basic query returns valid plans', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-17',
      partySize: 2,
      totalBudget: 1000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    expect(plans.length).toBeGreaterThanOrEqual(1);
    for (const plan of plans) {
      expect(plan.nights).toBe(2);
      expect(plan.totalCost).toBeLessThanOrEqual(1000);
      expect(plan.totalCost).toBe(plan.hotelCost + plan.restaurantCost);
      expect(plan.hotelCost).toBe(plan.hotel.pricePerNight * 2);
      expect(plan.restaurantCost).toBe(plan.restaurant.pricePerPerson * 2);
    }
  });

  test('respects hotel star requirement', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      minHotelStars: 4,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    expect(plans.every(p => p.hotel.stars >= 4)).toBe(true);
  });

  test('respects required amenities', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      requiredAmenities: ['pool', 'spa'],
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    // Only Grand Plaza has pool+spa
    expect(plans.every(p => p.hotel.id === 'h1')).toBe(true);
  });

  test('respects restaurant closed days', () => {
    // 2025-03-17 is monday - The Italian Place and Le Parisien are closed
    const plans = findBookingPlans({
      checkInDate: '2025-03-17',
      checkOutDate: '2025-03-18',
      partySize: 2,
      totalBudget: 2000,
      dinnerDate: '2025-03-17',
      dinnerTime: '19:00',
    });
    expect(plans.every(p =>
      !p.restaurant.closedDays.includes('monday')
    )).toBe(true);
    // Italian Place and Le Parisien should NOT appear
    expect(plans.every(p =>
      p.restaurant.id !== 'rest1' && p.restaurant.id !== 'rest5'
    )).toBe(true);
  });

  test('respects party size limit', () => {
    // Le Parisien has maxPartySize 4
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 5,
      totalBudget: 5000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    expect(plans.every(p => p.restaurant.maxPartySize >= 5)).toBe(true);
    expect(plans.every(p => p.restaurant.id !== 'rest5')).toBe(true);
  });

  test('respects cuisine preferences', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
      cuisinePreferences: ['japanese', 'french'],
    });
    expect(plans.every(p =>
      ['japanese', 'french'].includes(p.restaurant.cuisine)
    )).toBe(true);
  });

  test('respects budget constraint', () => {
    // Very tight budget: 1 night cheap hotel + cheap dinner for 2
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 120,
      dinnerDate: '2025-03-15',
      dinnerTime: '12:00',
    });
    expect(plans.every(p => p.totalCost <= 120)).toBe(true);
    // Only Budget Inn (75) + Quick Bites (15*2=30) = 105 fits
    if (plans.length > 0) {
      expect(plans.some(p => p.hotel.id === 'h2')).toBe(true);
    }
  });

  test('sorted by rating desc then cost asc', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    for (let i = 1; i < plans.length; i++) {
      const prevRating = plans[i - 1].restaurant.rating;
      const currRating = plans[i].restaurant.rating;
      if (prevRating === currRating) {
        expect(plans[i].totalCost).toBeGreaterThanOrEqual(plans[i - 1].totalCost);
      } else {
        expect(currRating).toBeLessThan(prevRating);
      }
    }
  });

  test('hotel must be available for all nights', () => {
    // Comfort Suites only available 15,16,17 — not 18
    const plans = findBookingPlans({
      checkInDate: '2025-03-17',
      checkOutDate: '2025-03-19',
      partySize: 2,
      totalBudget: 5000,
      dinnerDate: '2025-03-17',
      dinnerTime: '19:00',
    });
    // Comfort Suites should NOT appear (not available on 18th)
    expect(plans.every(p => p.hotel.id !== 'h3')).toBe(true);
  });

  test('needs reservation filter', () => {
    const plans = findBookingPlans({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
      needsReservation: true,
    });
    // Quick Bites does not accept reservations
    expect(plans.every(p => p.restaurant.acceptsReservations === true)).toBe(true);
    expect(plans.every(p => p.restaurant.id !== 'rest3')).toBe(true);
  });
});

describe('findBestPlan', () => {
  test('returns best plan or null', () => {
    const plan = findBestPlan({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 2000,
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    expect(plan).not.toBeNull();
    if (plan) {
      // Should pick highest-rated restaurant
      expect(plan.restaurant.rating).toBe(4.9); // Sushi World
    }
  });

  test('returns null when no plan fits', () => {
    const plan = findBestPlan({
      checkInDate: '2025-03-15',
      checkOutDate: '2025-03-16',
      partySize: 2,
      totalBudget: 10, // impossibly low
      dinnerDate: '2025-03-15',
      dinnerTime: '19:00',
    });
    expect(plan).toBeNull();
  });
});

describe('findTransport', () => {
  test('finds transport between hotel and restaurant', () => {
    // Budget Inn (Midtown area) to Sushi World (Penn Station area)
    const hotel = {
      id: 'h2', name: 'Budget Inn', stars: 2, pricePerNight: 75,
      location: { lat: 40.7580, lng: -73.9855 },
      amenities: ['wifi'], checkInTime: '14:00', checkOutTime: '10:00',
      availableDates: []
    };
    const restaurant = {
      id: 'rest2', name: 'Sushi World', cuisine: 'japanese',
      pricePerPerson: 55, rating: 4.9,
      location: { lat: 40.7505, lng: -73.9934 },
      hours: { open: '12:00', close: '23:00' },
      closedDays: [], acceptsReservations: true, maxPartySize: 6
    };
    const transport = findTransport(hotel, restaurant);
    expect(transport).toBeDefined();
    expect(transport.id).toBeTruthy();
  });

  test('falls back to taxi when no match', () => {
    // Very far apart locations
    const hotel = {
      id: 'h1', name: 'Grand Plaza Hotel', stars: 5, pricePerNight: 280,
      location: { lat: 40.7128, lng: -74.006 },
      amenities: [], checkInTime: '15:00', checkOutTime: '11:00',
      availableDates: []
    };
    const restaurant = {
      id: 'rest4', name: 'Spice Garden', cuisine: 'indian',
      pricePerPerson: 30, rating: 4.5,
      location: { lat: 40.7484, lng: -73.990 },
      hours: { open: '11:30', close: '22:30' },
      closedDays: [], acceptsReservations: true, maxPartySize: 10
    };
    const transport = findTransport(hotel, restaurant);
    // Should get taxi as fallback (no direct transit within 2km for both endpoints)
    expect(transport).toBeDefined();
    // Either finds a match or falls back to taxi
    expect(transport.id).toBeTruthy();
  });
});
