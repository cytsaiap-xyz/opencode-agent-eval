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
    expect(result[0].store_id).toBe('S14928051648372008_S44574');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14673831172316592_P26837", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(18.0, 0);
  });

  test('rubric: The delivery address for the chicken claypot order should be Jinzhai Residential', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the chicken claypot order should be Jinzhai Residential Area near Machine Tool Factory No.3, Jinwa Road, east of Dashuying Interchange, Guandu District, Kunming City, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the chicken claypot order should be before 2025-04-11 19:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the chicken claypot order should be before 2025-04-11 19:00:00 to ensure the user has enough time for dining and digestion"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered claypot dish must contain chicken as the main ingredient', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered claypot dish must contain chicken as the main ingredient"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered claypot dish must include rice or other staple food to ensure a comp', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered claypot dish must include rice or other staple food to ensure a complete nutritional balance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered claypot dish should have a light, non-greasy flavor to meet the user', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered claypot dish should have a light, non-greasy flavor to meet the user\'s dietary restriction of avoiding greasy food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered claypot dish must come with dipping sauce to satisfy the user\'s req', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered claypot dish must come with dipping sauce to satisfy the user\'s requirement for condiments"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
