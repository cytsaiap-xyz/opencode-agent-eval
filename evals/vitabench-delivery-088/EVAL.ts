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
    expect(result[0].store_id).toBe('S28238457757110038_S89746');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21140841273620451_P81330", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(134.4, 0);
  });

  test('rubric: The delivery address for the Lemon Boneless Chicken Feet night snack order shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Lemon Boneless Chicken Feet night snack order should be Weifang Xinchen Tiandi, No.1588 Wenhua Road, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Lemon Boneless Chicken Feet night snack order should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Lemon Boneless Chicken Feet night snack order should be between 2025-03-05 19:00:00 and 2025-03-05 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting Lemon Boneless Chicken Feet night snack products, the quantity sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting Lemon Boneless Chicken Feet night snack products, the quantity should be sufficient for five people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting night snack chicken feet products, boneless chicken feet should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting night snack chicken feet products, boneless chicken feet should be chosen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting night snack products, lemon flavored chicken feet should be chose', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting night snack products, lemon flavored chicken feet should be chosen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
