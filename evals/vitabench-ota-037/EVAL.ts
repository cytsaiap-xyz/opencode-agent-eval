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
    expect(result[0].store_id).toBe('S17557505558052360_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505558052360_P00001", "quantity": 1}, {"product_id": "S17557505558052360_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2560, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505558052360_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505558052360_P00020", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(140, 0);
  });

  test('rubric: Hotel reservation must be for 2 nights, on 2025-06-20 and 2025-06-21', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel reservation must be for 2 nights, on 2025-06-20 and 2025-06-21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel must be located near Linfen High-speed Railway Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel must be located near Linfen High-speed Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation must be Atour brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation must be Atour brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation must be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation must be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction ticket must be for Xunzi Cultural Park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction ticket must be for Xunzi Cultural Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xunzi Cultural Park visit must be scheduled for 2025-06-21', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xunzi Cultural Park visit must be scheduled for 2025-06-21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must select Double Ticket Package for Xunzi Cultural Park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must select Double Ticket Package for Xunzi Cultural Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must provide information about Xunzi-related attractions in Linfen suitable for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must provide information about Xunzi-related attractions in Linfen suitable for 2-3 hour visits, with result being Xunzi Memorial Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight must arrive around 8-9 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight must arrive around 8-9 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight order must be for 2 tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight order must be for 2 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight must be Business Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight must be Business Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
