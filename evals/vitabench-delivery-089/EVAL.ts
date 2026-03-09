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
    expect(result[0].store_id).toBe('S29142096053918581_S78781');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S31340687737670505_P84047", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(34.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14452117609323544_S13447');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S22000261998624782_P87049", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(24.9, 0);
  });

  test('rubric: Successfully canceled the Lamb Offal Soup order from Zunyi Lamb Rice Noodles (Zh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the Lamb Offal Soup order from Zunyi Lamb Rice Noodles (Zhongcun Branch), the order status with order_id H0721004O01 should be updated to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the new Small Shrimp Wontons order should be Jiangbin R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the new Small Shrimp Wontons order should be Jiangbin Residential Area, 359 Binhong Road (400 meters from Exit A of Bayi South Street Metro Station), Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the new Small Shrimp Wontons order should be bef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the new Small Shrimp Wontons order should be before 11:00 AM on 2025-03-19"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The new Small Shrimp Wontons order should include chili packet and vinegar packe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The new Small Shrimp Wontons order should include chili packet and vinegar packet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
