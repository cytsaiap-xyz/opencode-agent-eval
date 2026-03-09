import { expect, test, describe } from 'vitest';
import { getAllRestaurants, filterRestaurants, findBestAvailable, findMealPairs } from './filter';

describe('getAllRestaurants', () => {
  test('returns all 15 restaurants', () => {
    const all = getAllRestaurants();
    expect(all).toHaveLength(15);
    expect(all[0]).toHaveProperty('id');
    expect(all[0]).toHaveProperty('name');
    expect(all[0]).toHaveProperty('cuisine');
  });
});

describe('filterRestaurants', () => {
  test('filter by cuisine', () => {
    const result = filterRestaurants({ cuisines: ['chinese'] });
    expect(result).toHaveLength(2);
    expect(result.every(r => r.cuisine === 'chinese')).toBe(true);
  });

  test('filter by minimum rating', () => {
    const result = filterRestaurants({ minRating: 4.5 });
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.every(r => r.rating >= 4.5)).toBe(true);
    // Should be sorted by rating desc
    for (let i = 1; i < result.length; i++) {
      expect(result[i].rating).toBeLessThanOrEqual(result[i - 1].rating);
    }
  });

  test('filter by dietary options (must support ALL)', () => {
    const result = filterRestaurants({ requiredDietaryOptions: ['vegetarian', 'vegan'] });
    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result.every(r =>
      r.dietary_options.includes('vegetarian') && r.dietary_options.includes('vegan')
    )).toBe(true);
  });

  test('filter by max price per person', () => {
    const result = filterRestaurants({ maxPricePerPerson: 15 });
    expect(result.every(r => r.avg_price_per_person <= 15)).toBe(true);
    expect(result.length).toBeGreaterThanOrEqual(4);
  });

  test('filter by dine-in requirement', () => {
    const result = filterRestaurants({ requireDineIn: true });
    expect(result.every(r => r.has_dine_in === true)).toBe(true);
    // r003 (Sushi Express) and r009 (Pizza Planet) have no dine-in
    expect(result.find(r => r.id === 'r003')).toBeUndefined();
    expect(result.find(r => r.id === 'r009')).toBeUndefined();
  });

  test('filter by open time', () => {
    const result = filterRestaurants({ openAt: '08:30' });
    // Only Green Garden opens at 08:00 and Burger Palace at 09:00
    // At 08:30, only Green Garden is open
    expect(result.some(r => r.id === 'r004')).toBe(true);
    expect(result.every(r => r.business_hours.open <= '08:30')).toBe(true);
  });

  test('filter by open on day', () => {
    const result = filterRestaurants({ openOnDay: 'monday' });
    // Golden Dragon, Seoul Kitchen, Le Petit Bistro, Ocean Blue closed on monday
    expect(result.every(r => !r.closed_days.includes('monday'))).toBe(true);
  });

  test('exclude cuisines', () => {
    const result = filterRestaurants({ excludeCuisines: ['american', 'italian'] });
    expect(result.every(r => r.cuisine !== 'american' && r.cuisine !== 'italian')).toBe(true);
  });

  test('combined multi-constraint filter', () => {
    // Vegetarian, within 3km, under $20/person, open on wednesday
    const result = filterRestaurants({
      requiredDietaryOptions: ['vegetarian'],
      maxDistance: 3,
      maxPricePerPerson: 20,
      openOnDay: 'wednesday'
    });
    expect(result.every(r =>
      r.dietary_options.includes('vegetarian') &&
      r.distance_km <= 3 &&
      r.avg_price_per_person <= 20 &&
      !r.closed_days.includes('wednesday')
    )).toBe(true);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });

  test('no criteria returns all sorted by rating', () => {
    const result = filterRestaurants({});
    expect(result).toHaveLength(15);
    expect(result[0].rating).toBe(4.9); // Le Petit Bistro
  });

  test('distance tiebreaker for same rating', () => {
    // r001 (Golden Dragon) and r013 (Mediterranean Delight) both have 4.5 rating
    const result = filterRestaurants({ minRating: 4.5 });
    const idx1 = result.findIndex(r => r.id === 'r001');
    const idx13 = result.findIndex(r => r.id === 'r013');
    // Golden Dragon (1.2km) should come before Mediterranean Delight (2.5km)
    if (idx1 !== -1 && idx13 !== -1) {
      expect(idx1).toBeLessThan(idx13);
    }
  });
});

describe('findBestAvailable', () => {
  test('finds restaurants open at lunch on thursday', () => {
    const result = findBestAvailable('12:30', 'thursday', 30);
    expect(result.length).toBeGreaterThanOrEqual(5);
    expect(result.every(r => r.avg_price_per_person <= 30)).toBe(true);
    // All should be open at 12:30 and not closed on thursday
    expect(result.every(r => !r.closed_days.includes('thursday'))).toBe(true);
  });

  test('respects maxDeliveryMinutes', () => {
    const result = findBestAvailable('12:00', 'friday', 50, 30);
    expect(result.every(r => r.delivery_time_minutes <= 30)).toBe(true);
  });

  test('limits to topN', () => {
    const result = findBestAvailable('12:00', 'friday', 100, undefined, 3);
    expect(result).toHaveLength(3);
  });

  test('sorted by rating desc', () => {
    const result = findBestAvailable('12:00', 'friday', 100);
    for (let i = 1; i < result.length; i++) {
      expect(result[i].rating).toBeLessThanOrEqual(result[i - 1].rating);
    }
  });
});

describe('findMealPairs', () => {
  test('finds valid meal pairs on friday', () => {
    const pairs = findMealPairs('friday', '12:00', '19:00', 60);
    expect(pairs.length).toBeGreaterThanOrEqual(1);
    for (const [lunch, dinner] of pairs) {
      // Different cuisines
      expect(lunch.cuisine).not.toBe(dinner.cuisine);
      // Both open on friday
      expect(lunch.closed_days.includes('friday')).toBe(false);
      expect(dinner.closed_days.includes('friday')).toBe(false);
      // Within budget
      expect(lunch.avg_price_per_person + dinner.avg_price_per_person).toBeLessThanOrEqual(60);
    }
  });

  test('pairs sorted by combined rating desc', () => {
    const pairs = findMealPairs('friday', '12:00', '19:00', 100);
    for (let i = 1; i < pairs.length; i++) {
      const prevRating = pairs[i - 1][0].rating + pairs[i - 1][1].rating;
      const currRating = pairs[i][0].rating + pairs[i][1].rating;
      expect(currRating).toBeLessThanOrEqual(prevRating);
    }
  });

  test('tight budget limits results', () => {
    const pairs = findMealPairs('friday', '12:00', '19:00', 25);
    // Very tight budget - only cheap restaurants
    for (const [lunch, dinner] of pairs) {
      expect(lunch.avg_price_per_person + dinner.avg_price_per_person).toBeLessThanOrEqual(25);
    }
  });

  test('lunch and dinner restaurants must be open at correct times', () => {
    const pairs = findMealPairs('thursday', '12:00', '20:00', 100);
    for (const [lunch, dinner] of pairs) {
      expect(lunch.business_hours.open <= '12:00').toBe(true);
      expect(lunch.business_hours.close > '12:00').toBe(true);
      expect(dinner.business_hours.open <= '20:00').toBe(true);
      expect(dinner.business_hours.close > '20:00').toBe(true);
    }
  });
});
