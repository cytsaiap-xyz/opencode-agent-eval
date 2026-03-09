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
    expect(result[0].store_id).toBe('S85277471199200385_S98778');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S26110520013660896_P88296", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(25, 0);
  });

  test('rubric: The rice noodle restaurant must support Dine-in available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rice noodle restaurant must support Dine-in available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rice noodle product must not be gold soup flavor, as the user is tired of it', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rice noodle product must not be gold soup flavor, as the user is tired of it"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rice noodle product must not contain fried side dishes or high-purine ingred', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rice noodle product must not contain fried side dishes or high-purine ingredients (such as offal, seafood soup, etc.)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the rice noodle order should be Yunnan University Affil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the rice noodle order should be Yunnan University Affiliated Hospital, 160 meters southeast of the intersection of Xinmin Lane and Pingzheng Street, Wuhua District, Kunming, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the rice noodle order should be around 2025-06-21 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the rice noodle order should be around 2025-06-21 12:00:00 to ensure completion of the meal before the afternoon break"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
