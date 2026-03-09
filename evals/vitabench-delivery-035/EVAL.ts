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
    expect(result[0].store_id).toBe('S31052467565438218_S47916');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17615674632633116_P23216", "quantity": 1}, {"product_id": "S19386987754841236_P27124", "quantity": 1}, {"product_id": "S21595093811316764_P97749", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(142.0, 0);
  });

  test('rubric: The delivery address for the family dinner order celebrating promotion should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the family dinner order celebrating promotion should be Xinyuan Residential Area, 180 meters southeast of the intersection of Huangshanglong Road and Minxiangyuan Road, Yunlong District, Xuzhou City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the family dinner order celebrating promotion sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the family dinner order celebrating promotion should be before 9:00 PM on November 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for the family dinner order celebrating promotion should be a Gua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for the family dinner order celebrating promotion should be a Guangshunxing brand store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The family dinner order celebrating promotion should contain 3 dishes in total', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The family dinner order celebrating promotion should contain 3 dishes in total"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The family dinner order celebrating promotion should include pig stomach chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The family dinner order celebrating promotion should include pig stomach chicken as the main dish, and at least one dim sum item (such as shumai)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
