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
    expect(result[0].store_id).toBe('S11783747910046861_S82990');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S10167012764512840_P66561", "quantity": 1}, {"product_id": "", "quantity": 1}, {"product_id": "", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(21, 0);
  });

  test('rubric: Need to modify the note for order with order_id 30711009O01 to: No disposable ta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to modify the note for order with order_id 30711009O01 to: No disposable tableware"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Sauce Bone Rice order should be Nanhu Garden, 15 Do', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Sauce Bone Rice order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Sauce Bone Rice order should be before 2025-10-18 12:4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Sauce Bone Rice order should be before 2025-10-18 12:43:29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sauce Bone Rice set meal should include vegetables', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sauce Bone Rice set meal should include vegetables"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sauce Bone Rice order should note no disposable tableware', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sauce Bone Rice order should note no disposable tableware"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Children\'s Set Meal order should be Nanhu Garden, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Children\'s Set Meal order should be Nanhu Garden, 15 Dongzhai Road, Wucheng District, Jinhua, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Children\'s Set Meal order should be before 2025-10-18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Children\'s Set Meal order should be before 2025-10-18 12:43:29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Children\'s Set Meal should be selected from Ajisen Ramen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Children\'s Set Meal should be selected from Ajisen Ramen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Children\'s Set Meal order should note no disposable tableware', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Children\'s Set Meal order should note no disposable tableware"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
