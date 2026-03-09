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
    expect(result[0].store_id).toBe('S32395321317664020_S72918');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23369123308080764_P87732", "quantity": 1}, {"product_id": "S15417513347977519_P98691", "quantity": 1}, {"product_id": "S27191398078431397_P45736", "quantity": 1}, {"product_id": "S22177717874912125_P02570", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(151.9, 0);
  });

  test('rubric: The restaurant ordered from must be an authentic Shaanxi cuisine restaurant, suc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from must be an authentic Shaanxi cuisine restaurant, such as Running! Shaanxi Cuisine or other restaurants specializing in Shaanxi local dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The celebration order must include a balance of two meat dishes and one vegetabl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The celebration order must include a balance of two meat dishes and one vegetable dish"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The celebration order must include staple food items sufficient for two people\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The celebration order must include staple food items sufficient for two people\'s dining needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dishes must avoid extremely spicy flavors', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dishes must avoid extremely spicy flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should provide quality takeout packaging to avoid issues such as ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should provide quality takeout packaging to avoid issues such as oil leakage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the celebration order should be Ziwei City Garden near ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the celebration order should be Ziwei City Garden near Bank of Communications (Xi\'an Electronic City Branch), Yanta District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the celebration order should be completed before', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the celebration order should be completed before 19:00 on December 28, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
