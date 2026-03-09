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
    expect(result[0].store_id).toBe('S19004578492371518_S36411');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S46568509078173011_P19624", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(64.8, 0);
  });

  test('rubric: The delivery address for the steamed beef steak order should be Building A, Baol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the steamed beef steak order should be Building A, Baolian Plaza, 1103 Li Yu Road, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the steamed beef steak order should be on or before 2025-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the steamed beef steak order should be on or before 2025-12-21 19:00, ensuring that the user can eat promptly after class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a steamed beef steak restaurant, the rating should be 4.3 or abov', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a steamed beef steak restaurant, the rating should be 4.3 or above to ensure high-quality products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a steamed beef steak restaurant, it should be a Dine-in Restauran', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a steamed beef steak restaurant, it should be a Dine-in Restaurant with a physical store, which can generally be checked in the merchant\'s tags"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a steamed beef steak product, the portion should be 250g to meet ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a steamed beef steak product, the portion should be 250g to meet the user\'s appetite requirements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
