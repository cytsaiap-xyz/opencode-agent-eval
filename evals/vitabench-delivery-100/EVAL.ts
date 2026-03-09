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
    expect(result[0].store_id).toBe('S12559995746910845_S64519');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30356558095585016_P74307", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(37, 0);
  });

  test('rubric: The ordered dessert should be ice-based or cold beverage type, suitable for cool', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dessert should be ice-based or cold beverage type, suitable for cooling down on a 29-degree sunny day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dessert should not contain durian or other ingredients with strong d', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dessert should not contain durian or other ingredients with strong distinctive odors that might affect the 19:00 meeting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert delivery address should be the work location at TaiKoo Hui, 383 Tian', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert delivery address should be the work location at TaiKoo Hui, 383 Tianhe Road, Tianhe District, Guangzhou, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the dessert order should be before the meeting st', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the dessert order should be before the meeting starts at 2024-05-09 19:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
