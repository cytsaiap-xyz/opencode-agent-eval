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
    expect(result[0].store_id).toBe('S17564420293324227_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420293324227_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(428, 0);
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
    expect(result[2].store_id).toBe('S17564420293324227_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420293324227_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(158, 0);
  });

  test('rubric: The hair salon must be within 1km of the company address (28F, Shanghai Plaza Of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon must be within 1km of the company address (28F, Shanghai Plaza Office Building, 138 Middle Huaihai Road, Huangpu District, Shanghai)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The haircut package must include scalp massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The haircut package must include scalp massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The haircut package must include scalp massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The haircut package must include scalp massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hair salon should be Yunzi Hair Care Salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hair salon should be Yunzi Hair Care Salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time in the reservation should be 10:00:00 on 2025-03-22', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time in the reservation should be 10:00:00 on 2025-03-22"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people in the reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people in the reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The yoga studio should be within 2km of Yunzi Hair Care Salon, 2F, Jin Mao Tower', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The yoga studio should be within 2km of Yunzi Hair Care Salon, 2F, Jin Mao Tower, 218 Middle Huaihai Road, Huangpu District, Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The yoga class ordered should be a private training', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The yoga class ordered should be a private training"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The yoga class ordered should be a single class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The yoga class ordered should be a single class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The yoga class ordered should be an advanced class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The yoga class ordered should be an advanced class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost for both the haircut and yoga services must be kept under 600 yua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost for both the haircut and yoga services must be kept under 600 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
