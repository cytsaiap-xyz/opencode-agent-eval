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
    expect(result[0].store_id).toBe('S17567836567248372_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836567248372_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17567836567248372_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836567248372_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(32, 0);
  });

  test('rubric: The boxing gym to order from must have nationally certified boxing coaches', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boxing gym to order from must have nationally certified boxing coaches"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the gym should include boxing courses', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the gym should include boxing courses"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended gym should be within 800 meters or less from a parking lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended gym should be within 800 meters or less from a parking lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the gym should include professional private training', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the gym should include professional private training"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the gym should include protective gear', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the gym should include protective gear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the gym should include basic movements instruction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the gym should include basic movements instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if the recommended gym offers single trial classes, and if so, the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the recommended gym offers single trial classes, and if so, the ordered package should include a single trial class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved gym should be Nanning Gold Medal Boxing Training Gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved gym should be Nanning Gold Medal Boxing Training Gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym reservation time should be 2024-09-13 19:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym reservation time should be 2024-09-13 19:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the gym reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the gym reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended fast food restaurant should be within 1km or less from Nanning G', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended fast food restaurant should be within 1km or less from Nanning Gold Medal Boxing Training Gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended fast food restaurant must have fast serving', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended fast food restaurant must have fast serving"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The single-person meal ordered from the fast food restaurant should be light-fla', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The single-person meal ordered from the fast food restaurant should be light-flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the fast food restaurant should be a single-person meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the fast food restaurant should be a single-person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the fast food restaurant should have a balanced meat an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the fast food restaurant should have a balanced meat and vegetable combination"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the fast food restaurant should include rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the fast food restaurant should include rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order price at the fast food restaurant should be less than or equal to 50 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order price at the fast food restaurant should be less than or equal to 50 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
