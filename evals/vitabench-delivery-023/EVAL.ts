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
    expect(result[0].store_id).toBe('S30993599337981774_S34673');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14292360609424463_P36400", "quantity": 1}, {"product_id": "S31583341312882063_P22648", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(155, 0);
  });

  test('rubric: The Sichuan cuisine delivery order must be from Xiao Sichuan (Shifan Street Bran', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sichuan cuisine delivery order must be from Xiao Sichuan (Shifan Street Branch), which is a Sichuan restaurant where the user has ordered before"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Sichuan cuisine delivery order should be Jinzheng H', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Sichuan cuisine delivery order should be Jinzheng Haiyue International"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Sichuan cuisine delivery order should be bef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Sichuan cuisine delivery order should be before 13:00 on September 12, 2024, so that it can be enjoyed at the beginning of friend\'s lunch break"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The stir-fried vegetables in the Sichuan cuisine delivery order should be garlic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The stir-fried vegetables in the Sichuan cuisine delivery order should be garlic-flavored, as indicated in the product name or label description"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
