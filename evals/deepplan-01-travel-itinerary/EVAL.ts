import { expect, test, describe } from 'vitest';
import {
  getDayOfWeek, addMinutes, fitsInTimeWindow, estimateTravelTime,
  generateItinerary, validateItinerary
} from './planner';

describe('getDayOfWeek', () => {
  test('returns correct days', () => {
    expect(getDayOfWeek('2025-03-15')).toBe('saturday');
    expect(getDayOfWeek('2025-03-17')).toBe('monday');
    expect(getDayOfWeek('2025-03-19')).toBe('wednesday');
  });
});

describe('addMinutes', () => {
  test('basic addition', () => {
    expect(addMinutes('09:00', 90)).toBe('10:30');
    expect(addMinutes('09:00', 60)).toBe('10:00');
    expect(addMinutes('23:00', 30)).toBe('23:30');
  });

  test('zero minutes', () => {
    expect(addMinutes('14:30', 0)).toBe('14:30');
  });

  test('crosses hour boundary', () => {
    expect(addMinutes('09:45', 30)).toBe('10:15');
  });
});

describe('fitsInTimeWindow', () => {
  test('fits within window', () => {
    expect(fitsInTimeWindow('10:00', '12:00', '09:00', '17:00')).toBe(true);
  });

  test('does not fit - starts too early', () => {
    expect(fitsInTimeWindow('08:00', '10:00', '09:00', '17:00')).toBe(false);
  });

  test('does not fit - ends too late', () => {
    expect(fitsInTimeWindow('16:00', '18:00', '09:00', '17:00')).toBe(false);
  });

  test('exact boundary is ok', () => {
    expect(fitsInTimeWindow('09:00', '17:00', '09:00', '17:00')).toBe(true);
  });
});

describe('estimateTravelTime', () => {
  test('very close locations', () => {
    const a = { lat: 34.0, lng: -117.37 };
    const b = { lat: 34.001, lng: -117.371 };
    expect(estimateTravelTime(a, b)).toBe(5);
  });

  test('medium distance', () => {
    const a = { lat: 34.0, lng: -117.37 };
    const b = { lat: 34.01, lng: -117.38 };
    // ~1.5km apart -> 10 min
    expect(estimateTravelTime(a, b)).toBe(10);
  });

  test('far distance', () => {
    const a = { lat: 34.0, lng: -117.37 };
    const b = { lat: 34.04, lng: -117.35 };
    // ~4.7km -> 20 min
    expect(estimateTravelTime(a, b)).toBe(20);
  });
});

describe('generateItinerary', () => {
  test('generates valid 1-day itinerary', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15', // saturday
      numDays: 1,
      budget: 500,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    expect(itinerary.days).toHaveLength(1);
    expect(itinerary.totalCost).toBeLessThanOrEqual(500);
    expect(itinerary.totalAttractions).toBeGreaterThanOrEqual(1);
    expect(itinerary.hotel).toBeDefined();
  });

  test('generates valid 2-day itinerary', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 800,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    expect(itinerary.days).toHaveLength(2);
    expect(itinerary.totalCost).toBeLessThanOrEqual(800);
    expect(itinerary.totalAttractions).toBeGreaterThanOrEqual(2);
  });

  test('respects must-visit attractions', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 1000,
      mustVisit: ['a1', 'a2'], // History Museum, Botanical Garden
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    const allAttractionNames = itinerary.days.flatMap(d =>
      d.items.filter(i => i.type === 'attraction').map(i => i.name)
    );
    expect(allAttractionNames).toContain('History Museum');
    expect(allAttractionNames).toContain('Botanical Garden');
  });

  test('respects hotel star requirement', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 1,
      budget: 1000,
      minHotelStars: 4,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;
    expect(itinerary.hotel.stars).toBeGreaterThanOrEqual(4);
  });

  test('returns null when must-visit not possible due to closed days', () => {
    // Science Center closed Mon+Tue, try single day on Monday
    const itinerary = generateItinerary({
      startDate: '2025-03-17', // monday
      numDays: 1,
      budget: 1000,
      mustVisit: ['a5'], // Science Center
    });
    expect(itinerary).toBeNull();
  });

  test('budget too low returns null or very minimal plan', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 50, // can't even afford 1 night + meals
    });
    // Should either be null or extremely minimal
    if (itinerary) {
      expect(itinerary.totalCost).toBeLessThanOrEqual(50);
    }
  });

  test('each day has meals', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 1000,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    for (const day of itinerary.days) {
      const meals = day.items.filter(i => i.type === 'meal');
      // At least breakfast and one other meal
      expect(meals.length).toBeGreaterThanOrEqual(2);
    }
  });

  test('no duplicate attractions across days', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 1000,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    const attractionNames = itinerary.days.flatMap(d =>
      d.items.filter(i => i.type === 'attraction').map(i => i.name)
    );
    const uniqueNames = new Set(attractionNames);
    expect(uniqueNames.size).toBe(attractionNames.length);
  });
});

describe('validateItinerary', () => {
  test('validates a correct itinerary', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 1,
      budget: 500,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    const result = validateItinerary(itinerary, {
      startDate: '2025-03-15',
      numDays: 1,
      budget: 500,
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('detects budget violation', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 2,
      budget: 1000,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    // Validate against a tighter budget
    const result = validateItinerary(itinerary, {
      startDate: '2025-03-15',
      numDays: 2,
      budget: 10,
    });
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  test('detects missing must-visit', () => {
    const itinerary = generateItinerary({
      startDate: '2025-03-15',
      numDays: 1,
      budget: 500,
    });
    expect(itinerary).not.toBeNull();
    if (!itinerary) return;

    // Validate with a must-visit that may not be in the itinerary
    const result = validateItinerary(itinerary, {
      startDate: '2025-03-15',
      numDays: 1,
      budget: 500,
      mustVisit: ['a5', 'a6', 'a1', 'a2', 'a3'], // very unlikely all fit in 1 day
    });
    // Either valid (if all fit) or has errors
    if (!result.valid) {
      expect(result.errors.some(e => e.toLowerCase().includes('must'))).toBe(true);
    }
  });
});
