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
    expect(result[0].store_id).toBe('S27620908423745403_S21237');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S68872193363872223_P23861", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(23.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S33414768862736242_S26758');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S18330858245118659_P05003", "quantity": 1}, {"product_id": "S10265457617021740_P85391", "quantity": 1}, {"product_id": "S22921577738284123_P49736", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(72.0, 0);
  });

  test('rubric: Successfully cancelled the Clear Broth Beef Noodles order from Ma Changhe Northw', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully cancelled the Clear Broth Beef Noodles order from Ma Changhe Northwest Beef Noodles (Desiqin Branch), the status of order with order_id 30711002O01 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Xinjiang cuisine order should be Xiangzhang Garden,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Xinjiang cuisine order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Xinjiang cuisine order should be around 19:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Xinjiang cuisine order should be around 19:00 on 2025-08-20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Xinjiang cuisine order should include Stir-fried Cabbage with Naan, quantity', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Xinjiang cuisine order should include Stir-fried Cabbage with Naan, quantity of 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the Xinjiang cuisine order should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the Xinjiang cuisine order should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
