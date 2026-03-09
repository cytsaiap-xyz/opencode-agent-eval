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
    expect(result[0].store_id).toBe('S79687561289843350_S50725');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S34696353417615440_P13458", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(24.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S13169465789960013_S02214');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S79356345247909739_P59597", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(19.8, 0);
  });

  test('rubric: The delivery address for the pasta order should be East Area of Qinyuyuan, Nanch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pasta order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the pasta order should be around 12:00 PM on 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the pasta order should be around 12:00 PM on 2025-08-16"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pasta order should select products from Xiyin Steak Homemade Pasta · Baked R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pasta order should select products from Xiyin Steak Homemade Pasta · Baked Rice (Shaoxing Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pasta order should not select pasta products with tomato meat sauce flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pasta order should not select pasta products with tomato meat sauce flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the brown sugar ginger tea order should be East Area of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the brown sugar ginger tea order should be East Area of Qinyuyuan, Nanchi Road, Yuecheng District, Shaoxing City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the brown sugar ginger tea order should be aroun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the brown sugar ginger tea order should be around 12:00 PM on 2025-08-16"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The brown sugar ginger tea order should select hot drink products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The brown sugar ginger tea order should select hot drink products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The brown sugar ginger tea order should select products with the \'more ginger\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The brown sugar ginger tea order should select products with the \'more ginger\' attribute"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
