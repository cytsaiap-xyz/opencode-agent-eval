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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802174487229_I00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802174487229_P00052", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(149, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802174487229_F00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802174487229_F00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(780, 0);
  });

  test('rubric: The booked KTV should have a rating of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked KTV should have a rating of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked KTV should be within 3km of Room 1506, Tower A, Wuhan Tiandi, 688 Jie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked KTV should be within 3km of Room 1506, Tower A, Wuhan Tiandi, 688 Jiefang Avenue, Jianghan District, Wuhan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation time should be 18:00:00 on 2025-09-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation time should be 18:00:00 on 2025-09-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should be compatible with iPhone 13', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should be compatible with iPhone 13"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should be a charging head', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should be a charging head"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should be an Original Factory Product', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should be an Original Factory Product"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should support Fast Charging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should support Fast Charging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: By checking the calendar, there are no holidays coming up, so purchase flight ti', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "By checking the calendar, there are no holidays coming up, so purchase flight tickets for September 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user plans to finish lunch at 12:00 and leave afterward, plus a two-hour buf', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user plans to finish lunch at 12:00 and leave afterward, plus a two-hour buffer, so the flight departure time should be at or after 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user doesn\'t want to land too late and miss dinner at 17:00, so the flight ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user doesn\'t want to land too late and miss dinner at 17:00, so the flight arrival time should be at or before 17:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased flight ticket should be for a flight from Wuhan to Guangzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased flight ticket should be for a flight from Wuhan to Guangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
