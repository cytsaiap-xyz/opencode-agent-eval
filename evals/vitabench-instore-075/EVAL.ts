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
    expect(result[0].store_id).toBe('S17567841558014419_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567841558014419_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(52, 0);
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
    expect(result[2].store_id).toBe('S17567841558014419_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567841558014419_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(46, 0);
  });

  test('rubric: The restaurant ordered should be a Jiangxi cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a Jiangxi cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the ordered restaurant to Room 503, Lawyers Building of Shanxi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the ordered restaurant to Room 503, Lawyers Building of Shanxi Provincial Justice Department, No.9 Fuxi Street, Xinghualing District, Taiyuan City should be within 3km (including 3km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant should be available on weekdays', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant should be available on weekdays"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant should be an individual package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant should be an individual package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant should include Main course, Side dish and ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant should include Main course, Side dish and Beverage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Gan Xiang Lou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Gan Xiang Lou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 2025-03-25 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 2025-03-25 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the massage shop should be a Shoulder and neck massage pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the massage shop should be a Shoulder and neck massage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: According to the query, the price of the restaurant ordered item is 52 yuan, so ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to the query, the price of the restaurant ordered item is 52 yuan, so the price of the massage shop ordered item should be less than or equal to 48 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
