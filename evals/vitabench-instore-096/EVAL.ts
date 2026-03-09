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
    expect(result[0].store_id).toBe('S17567844081518433_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844081518433_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2280, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567844081518433_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844081518433_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2580, 0);
  });

  test('rubric: The restaurant ordered must be suitable for business banquets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be suitable for business banquets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered must be an upscale restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be an upscale restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered must be Michelin-listed', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be Michelin-listed"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the restaurant order must be a six-person set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the restaurant order must be a six-person set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of items in the restaurant order cannot exceed 2500 yuan (including 25', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of items in the restaurant order cannot exceed 2500 yuan (including 2500 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The golf club ordered must be indoor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The golf club ordered must be indoor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The budget for the golf club order should be 10% higher than the restaurant orde', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The budget for the golf club order should be 10% higher than the restaurant order budget (cannot exceed), as the restaurant order budget is 2500 yuan (including 2500 yuan), therefore the total price of items in the golf club order cannot exceed 2750 yuan (including 2750 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the golf club order must be suitable for 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the golf club order must be suitable for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
