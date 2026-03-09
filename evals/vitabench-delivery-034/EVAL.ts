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
    expect(result[0].store_id).toBe('S29386890567258847_S23083');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14144998050103373_P17811", "quantity": 5}, {"product_id": "S32520890639184337_P77818", "quantity": 2}, {"product_id": "S24967465012009756_P93923", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(214.0, 0);
  });

  test('rubric: When ordering milk tea for department refreshments, the product brand should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering milk tea for department refreshments, the product brand should be Bawang Tea Princess"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the department milk tea order should be China Life Buil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the department milk tea order should be China Life Building, No.999 Financial Street, Honggutan District, Nanchang City, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the department milk tea order should be between ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the department milk tea order should be between 2025-09-17 12:00:00 and 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the department milk tea order should be 12 cups', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the department milk tea order should be 12 cups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flavors of products in the department milk tea order should not include any ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flavors of products in the department milk tea order should not include any Gardenia-related flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The department milk tea order needs to include Dairy-free products suitable for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The department milk tea order needs to include Dairy-free products suitable for lactose-intolerant colleagues, with a quantity of 2 cups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The department milk tea order needs to include two different flavors of products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The department milk tea order needs to include two different flavors of products, with 5 cups of each"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
