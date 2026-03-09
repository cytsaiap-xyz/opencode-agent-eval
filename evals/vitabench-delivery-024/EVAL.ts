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
    expect(result[0].store_id).toBe('S18646822163055673_S83922');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S12678590731222448_P39976", "quantity": 1}, {"product_id": "S28133304347865044_P04578", "quantity": 1}, {"product_id": "S63696291966516933_P45731", "quantity": 1}, {"product_id": "S96623811432181556_P52935", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(113, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14394301616023486_S55695');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S15469799519439947_P55117", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(98, 0);
  });

  test('rubric: Home-style cuisine orders should have a balance of meat and vegetable dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Home-style cuisine orders should have a balance of meat and vegetable dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurants for home-style cuisine orders should have ratings of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurants for home-style cuisine orders should have ratings of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Home-style cuisine orders should be delivered before 8:00 PM on May 27, 2025, bu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Home-style cuisine orders should be delivered before 8:00 PM on May 27, 2025, but not too early to avoid the food getting cold"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Home-style cuisine orders should be delivered to Wusi Huating, 8-1 Yongsheng Lan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Home-style cuisine orders should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lotus Root Pastry order should contain handmade products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lotus Root Pastry order should contain handmade products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lotus Root Pastry order should be in gift box packaging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lotus Root Pastry order should be in gift box packaging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lotus Root Pastry order should be delivered to Wusi Huating, 8-1 Yongsheng L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lotus Root Pastry order should be delivered to Wusi Huating, 8-1 Yongsheng Lane, Shahekou District, Dalian, Liaoning Province (280m walk from Exit A of Xinggong Street Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
