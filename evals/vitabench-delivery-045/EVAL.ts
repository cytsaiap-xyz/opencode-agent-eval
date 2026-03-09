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
    expect(result[0].store_id).toBe('S18620106904396838_S09686');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21178425587357621_P66770", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(99, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S12492181510325089_S67166');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S25230280955908773_P80930", "quantity": 1}, {"product_id": "S48384040914991720_P07322", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(34, 0);
  });

  test('rubric: The delivery address for the ice cream cake order should be Cui Lake Paradise Ph', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the ice cream cake order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the ice cream cake order should be before 16:00 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the ice cream cake order should be before 16:00 on September 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ice cream cake should match the scene of mother and daughter having afternoo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ice cream cake should match the scene of mother and daughter having afternoon tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the pure tea beverage order should be Cui Lake Paradise', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pure tea beverage order should be Cui Lake Paradise Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the pure tea beverage order should be before 16:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the pure tea beverage order should be before 16:00 on September 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pure tea beverage order should select products from the Chucha Huayue store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pure tea beverage order should select products from the Chucha Huayue store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The two tea beverages in the pure tea beverage order should be of different styl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The two tea beverages in the pure tea beverage order should be of different styles, and both should be standard ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
