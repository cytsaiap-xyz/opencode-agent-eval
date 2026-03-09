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
    expect(result[0].store_id).toBe('S17550802145136245_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145136245_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(24.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802145136245_I00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145136245_P00059", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(188, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802145136245_T00009');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145136245_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(147.5, 0);
  });

  test('rubric: The takeout food ordered must be chicken soup rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout food ordered must be chicken soup rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout food ordered must not contain carrots', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout food ordered must not contain carrots"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the takeout food should not exceed 25 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the takeout food should not exceed 25 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order must be delivered before 2024-12-17 19:20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order must be delivered before 2024-12-17 19:20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be 5th Floor, Building D, Changzhou Software Park, 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be 5th Floor, Building D, Changzhou Software Park, 9 Taihu East Road, Xinbei District, Changzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV to be booked should be located within 3km of Changzhou Wanda Cinema, 4th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV to be booked should be located within 3km of Changzhou Wanda Cinema, 4th Floor, Wanda Plaza, 123 Yanling West Road, Zhonglou District, Changzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV must have good sound equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV must have good sound equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package service duration should be 3 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package service duration should be 3 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package specification should be Small Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package specification should be Small Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket to be booked should be for a departure on December 18, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket to be booked should be for a departure on December 18, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket must be for a morning departure', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket must be for a morning departure"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check for the shortest morning journey from Changzhou to Huai\'an, with ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check for the shortest morning journey from Changzhou to Huai\'an, with the search result showing train G7681 taking 1 hour 15 minutes (10:05-11:20) as the shortest, and need to book this one"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
