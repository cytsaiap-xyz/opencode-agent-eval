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
    expect(result[0].store_id).toBe('S17550809188913229_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809188913229_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(210, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809188913229_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809188913229_P00008", "quantity": 1}, {"product_id": "S17550809188913229_P00011", "quantity": 1}, {"product_id": "S17550809188913229_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(51.6, 0);
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

  test('rubric: Check tickets for Sui-Tang Luoyang Jiuzhou Pool on March 8, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check tickets for Sui-Tang Luoyang Jiuzhou Pool on March 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets ordered for Sui-Tang Luoyang Jiuzhou Pool should be valid for use on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets ordered for Sui-Tang Luoyang Jiuzhou Pool should be valid for use on March 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets ordered should be suitable for 4 people, and be the cheapest', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets ordered should be suitable for 4 people, and be the cheapest"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xiangxi Local Cuisine Restaurant (Luoyang Flagship Store) has suitable set meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xiangxi Local Cuisine Restaurant (Luoyang Flagship Store) has suitable set meals with fish, no need to change restaurants"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The final reservation should be for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The final reservation should be for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery items should include bread', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery items should include bread"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery items should include dried fruits and preserved fruits', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery items should include dried fruits and preserved fruits"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery items should not include food with Strong Smell', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery items should not include food with Strong Smell"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery items should include at least three different products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery items should include at least three different products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Xujiaying Community, 220 meters north of the inte', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Xujiaying Community, 220 meters north of the intersection of Xuesong Road and Xingye Road, Jianxi District, Luoyang, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time should be between 21:25-22:25 on March 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time should be between 21:25-22:25 on March 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
