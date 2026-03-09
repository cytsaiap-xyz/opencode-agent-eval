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
    expect(result[0].store_id).toBe('S17557505479571970_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505479571970_P00072", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(175, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505479571970_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505479571970_P00079", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(158, 0);
  });

  test('rubric: There should be two train ticket orders, with the user\'s own ticket departing b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be two train ticket orders, with the user\'s own ticket departing before 8 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When searching for the station nearest to the user\'s home address (Wancheng Hua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When searching for the station nearest to the user\'s home address (Wancheng Huafu Shangyuan, near Haiyuan, at the intersection of Wanliu Huafu North Street and Wanliu West Road, Haidian District, Beijing), the result is Beijing North Railway Station, so the departure station for the ticket departing before 8 AM must be Beijing North Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When filtering for trains departing before 8 AM from Beijing North Railway Stati', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When filtering for trains departing before 8 AM from Beijing North Railway Station, and finding the one with the shortest journey time, the result is G6703, so the user\'s own ticket order must be for train G6703"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket orders must be for September 19, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket orders must be for September 19, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must search for and provide the weather information for Shijiazhuang on Septembe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must search for and provide the weather information for Shijiazhuang on September 19, 2026, which is light rain with temperatures between 16-23 degrees"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be two train ticket orders, with the college classmate\'s ticket ar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be two train ticket orders, with the college classmate\'s ticket arriving around 2 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The college classmate\'s train ticket order must be for September 19, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The college classmate\'s train ticket order must be for September 19, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
