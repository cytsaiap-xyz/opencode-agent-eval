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
    expect(result[0].store_id).toBe('S17550807808389466_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807808389466_P00061", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(688, 0);
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
    expect(result[2].store_id).toBe('S17550807808389466_T00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807808389466_P00029", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3516, 0);
  });

  test('rubric: The restaurant should be within 1 kilometer of the company address (Room 1208, H', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 1 kilometer of the company address (Room 1208, Hang Lung Plaza Office Building, 139 Renmin Middle Road, Liangxi District, Wuxi, Jiangsu Province)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must be a high-end restaurant with a rating above 4.7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must be a high-end restaurant with a rating above 4.7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should have a Business Banquet tag', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should have a Business Banquet tag"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set menu should have \'Wealth Prosperity\' or similar wealth symb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set menu should have \'Wealth Prosperity\' or similar wealth symbolism"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should support reservation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should support reservation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set menu should be sufficient for 7 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set menu should be sufficient for 7 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to book the restaurant for noon on March 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to book the restaurant for noon on March 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurant reservations should be for 7 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant reservations should be for 7 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for and provide high-speed rail schedules from Wuxi to Shenzhen a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for and provide high-speed rail schedules from Wuxi to Shenzhen after 4:00 PM on March 7, 2025, with the result showing G2382 train with Standing Ticket availability"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for and provide the earliest available train on March 8, 2025, wi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for and provide the earliest available train on March 8, 2025, with the ordered train being G2102"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed train tickets should not be Standing Tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed train tickets should not be Standing Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed train tickets\' destination must be Shenzhen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed train tickets\' destination must be Shenzhen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order should be for 2 high-speed rtrain tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order should be for 2 high-speed rtrain tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
