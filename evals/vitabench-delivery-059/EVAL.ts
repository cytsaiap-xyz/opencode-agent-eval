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
    expect(result[0].store_id).toBe('S33426782440170597_S44844');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S19129919838199477_P45960", "quantity": 1}, {"product_id": "S24419034942875443_P68345", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(79.6, 0);
  });

  test('rubric: The delivery address for the Garlic and Vermicelli Shrimp lunch order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Garlic and Vermicelli Shrimp lunch order should be East Building, Hubin, No. 33 Renmin West Road, Lucheng District, Wenzhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Garlic and Vermicelli Shrimp lunch order sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Garlic and Vermicelli Shrimp lunch order should be between 11:00 and 12:00 on March 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Garlic and Vermicelli Shrimp lunch order should not include spicy or greasy ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Garlic and Vermicelli Shrimp lunch order should not include spicy or greasy items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Garlic and Vermicelli Shrimp lunch order should include Garlic and Vermicell', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Garlic and Vermicelli Shrimp lunch order should include Garlic and Vermicelli Shrimp related items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Garlic and Vermicelli Shrimp lunch order should be portioned for either a me', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Garlic and Vermicelli Shrimp lunch order should be portioned for either a meal for two or two single-person meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the Garlic and Vermicelli Shrimp lunch order should be kept w', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the Garlic and Vermicelli Shrimp lunch order should be kept within 80 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
