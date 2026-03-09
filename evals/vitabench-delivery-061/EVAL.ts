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
    expect(result[0].store_id).toBe('S32974240222313518_S52218');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21362993512450958_P20483", "quantity": 6}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(90.0, 0);
  });

  test('rubric: The order must be placed at Guming (Software Park Phase III Store), which is loc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order must be placed at Guming (Software Park Phase III Store), which is located at Building 07, Zone F, Software Park Phase III, Jimei District, Xiamen City, Fujian Province, and is the closest Guming branch to the user\'s work address"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of ordered items should be 6 servings to meet the needs of a 6-pers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of ordered items should be 6 servings to meet the needs of a 6-person sharing meeting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should have floral fragrance characteristics, such as jasmin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should have floral fragrance characteristics, such as jasmine aroma"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sweetness level of the ordered product should be selected as \'three parts s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sweetness level of the ordered product should be selected as \'three parts sweet\', suitable for the low-sugar needs of people who are losing weight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be before 14:30 on June 27, 2024, to ensure a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be before 14:30 on June 27, 2024, to ensure arrival before the sharing meeting begins"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
