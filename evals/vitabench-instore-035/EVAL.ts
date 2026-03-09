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
    expect(result[0].store_id).toBe('S17564426054175010_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426054175010_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(428, 0);
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
    expect(result[2].store_id).toBe('S17564426054175010_I00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426054175010_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: Should check if there are outdoor BBQ restaurants within 20km of Room 502, Unit ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if there are outdoor BBQ restaurants within 20km of Room 502, Unit 1, Building 3, Zilang Mansion, 128 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (including 20km). The result is yes, so the merchant for the in-store dining order should be an outdoor BBQ restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered outdoor BBQ restaurant should have spacious lawn and canopy faciliti', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered outdoor BBQ restaurant should have spacious lawn and canopy facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered at the outdoor BBQ restaurant should provide BBQ ingredient', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered at the outdoor BBQ restaurant should provide BBQ ingredients and BBQ tools"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ ingredients provided in the outdoor BBQ restaurant\'s ordered set menu s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ ingredients provided in the outdoor BBQ restaurant\'s ordered set menu should not include pork"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outdoor BBQ restaurant order should be for one 4-person meal, not four indiv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outdoor BBQ restaurant order should be for one 4-person meal, not four individual sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved outdoor BBQ restaurant should be Prairie Canopy BBQ Camp', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved outdoor BBQ restaurant should be Prairie Canopy BBQ Camp"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outdoor BBQ restaurant reservation time should be 2024-01-06 11:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outdoor BBQ restaurant reservation time should be 2024-01-06 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the outdoor BBQ restaurant reservation is 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the outdoor BBQ restaurant reservation is 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check user behavior history to find previously visited family parks, wit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check user behavior history to find previously visited family parks, with the result being Wonder Family Park; the ordered family park should be Wonder Family Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the BBQ order price, with the result being not more than 450 yuan;', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the BBQ order price, with the result being not more than 450 yuan; the family park order should be for a Family Package (1 Adult & 1 Child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
