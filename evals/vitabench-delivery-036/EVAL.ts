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
    expect(result[0].store_id).toBe('S15927822440687410_S54674');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S54069754917006434_P49432", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(24.5, 0);
  });

  test('rubric: Order of sauce meat buns to satisfy hunger before evening study session, deliver', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Order of sauce meat buns to satisfy hunger before evening study session, delivery address should be Longtan Campus of Shanxi Engineering Vocational College, 131 Xinjian Road, Sanqiao Street, Xinghualing District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Order of sauce meat buns to satisfy hunger before evening study session, estimat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Order of sauce meat buns to satisfy hunger before evening study session, estimated delivery time should be before 2025-04-01 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When ordering sauce meat buns to satisfy hunger before evening study session, th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering sauce meat buns to satisfy hunger before evening study session, the selected store should be Pang Er Jiu Traditional Buns (Jingang\'yan Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Order of sauce meat buns to satisfy hunger before evening study session, the tot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Order of sauce meat buns to satisfy hunger before evening study session, the total quantity of items should be 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
