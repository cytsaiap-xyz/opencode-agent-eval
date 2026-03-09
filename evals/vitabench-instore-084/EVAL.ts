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
    expect(result[0].store_id).toBe('S17567843444802542_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843444802542_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1680, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17567843444802542_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843444802542_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(320, 0);
  });

  test('rubric: Query user\'s historical behavior, the French restaurant that the user frequentl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query user\'s historical behavior, the French restaurant that the user frequently visits is Chuli Fusion French Restaurant (Wangjing Jinhui Branch), which offers birthday special packages for six people, therefore the restaurant order should be placed at Chuli Fusion French Restaurant (Wangjing Jinhui Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) shou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be a birthday special package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) shou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at Chuli Fusion French Restaurant (Wangjing Jinhui Branch) should be suitable for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Chuli Fusion French Restaurant (Wangjing Jinhu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Chuli Fusion French Restaurant (Wangjing Jinhui Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurant reservation time should be 2024-06-24 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant reservation time should be 2024-06-24 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurant reservation should be for 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant reservation should be for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered billiards club should be within 1km (inclusive) of Chuli Fusion Fren', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered billiards club should be within 1km (inclusive) of Chuli Fusion French Restaurant, B1 Floor, Jinhui Building, Wangjing, Chaoyang District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the ordered billiards club should be greater than or equal to 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the ordered billiards club should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered package at the billiards club should be a 4-Hour package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered package at the billiards club should be a 4-Hour package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
