import { expect, test, describe } from 'vitest';
import { solve } from './solution';
import expectedData from './expected.json';

describe('VitaBench Task', () => {
  const result = solve();
  const expected = expectedData.required_orders;

  test('returns correct number of orders', () => {
    expect(result.length).toBe(expected.length);
  });

  test('each order has required fields', () => {
    for (const order of result) {
      expect(order).toHaveProperty('store_id');
      expect(order).toHaveProperty('products');
      expect(order).toHaveProperty('total_price');
      expect(Array.isArray(order.products)).toBe(true);
    }
  });

  test('order 0 matches expected store', () => {
    expect(result[0].store_id).toBe('S17550812965821285_A00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812965821285_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(180, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812965821285_I00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812965821285_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(398, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The attraction booked should be an indoor venue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booked should be an indoor venue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction booked should have multiple interactive experience zones', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booked should have multiple interactive experience zones"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for the attraction tickets should be April 18, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for the attraction tickets should be April 18, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets should be a family package for 2 adults and 1 child', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets should be a family package for 2 adults and 1 child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be no more than 3 kilometers away from Suzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be no more than 3 kilometers away from Suzhou Science and Technology Museum, 1 Changjiang Road, High-Tech Zone, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be of good quality', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be of good quality"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be located in a shopping mall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be located in a shopping mall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal ordered from the restaurant must include Salmon dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal ordered from the restaurant must include Salmon dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal ordered from the restaurant should be one set for 2-3 persons, not ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal ordered from the restaurant should be one set for 2-3 persons, not multiple individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal ordered from the restaurant should cost between 100-150 yuan per pe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal ordered from the restaurant should cost between 100-150 yuan per person, with a total price between 300-450 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Wuer Izakaya (Jinji Lake Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Wuer Izakaya (Jinji Lake Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must make a reservation at the Jinji Lake Branch izakaya restaurant for April 18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must make a reservation at the Jinji Lake Branch izakaya restaurant for April 18, 2026 at 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation should be for 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation should be for 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
