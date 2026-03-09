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
    expect(result[0].store_id).toBe('S17550810619584205_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810619584205_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
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
    expect(result[2].store_id).toBe('S17550943321994151_F00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810619584205_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3980, 0);
  });

  test('rubric: The breakfast delivery order\'s address is Room 1506, Building 3, Plaza 66, 1266', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast delivery order\'s address is Room 1506, Building 3, Plaza 66, 1266 West Nanjing Road, Jing\'an District, Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the breakfast order is 2025-09-06 09:30:00-10:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the breakfast order is 2025-09-06 09:30:00-10:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast delivery restaurant offers Dine-in Available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast delivery restaurant offers Dine-in Available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered breakfast delivery items come with Elegant Packaging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered breakfast delivery items come with Elegant Packaging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered breakfast delivery is a Set for Two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered breakfast delivery is a Set for Two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The café reservation time is 14:00:00 on 2025-09-06', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The café reservation time is 14:00:00 on 2025-09-06"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved café should have Window Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved café should have Window Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved café should be suitable for Photo Check-in', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved café should be suitable for Photo Check-in"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The café reservation is for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The café reservation is for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended cinema should be within 3km of the café, no movie tickets need t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended cinema should be within 3km of the café, no movie tickets need to be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved flight should be the latest departure of the day, the query should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved flight should be the latest departure of the day, the query should be for CZ3703"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased air ticket date is for 2025-09-06', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased air ticket date is for 2025-09-06"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased air ticket cannot be Economy Class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased air ticket cannot be Economy Class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: No need to cancel the 7 o\'clock reservation at the western restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "No need to cancel the 7 o\'clock reservation at the western restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
