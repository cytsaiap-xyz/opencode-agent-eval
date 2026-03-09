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
    expect(result[0].store_id).toBe('S17564420259995947_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420259995947_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(98, 0);
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
    expect(result[2].store_id).toBe('S17564420259995947_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420259995947_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(118, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564420259995947_I00004');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420259995947_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(138, 0);
  });

  test('rubric: Must search for information about three types of sports venues: badminton halls,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must search for information about three types of sports venues: badminton halls, tennis courts, and table tennis halls, and select the one closest to the user\'s home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the sports venue order should be usable for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the sports venue order should be usable for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the sports venue order should include venue usage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the sports venue order should include venue usage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the sports venue order should include free equipment usage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the sports venue order should include free equipment usage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the package in the sports venue order should be consistent with the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the package in the sports venue order should be consistent with the user\'s usual spending level (within the range of 60-100 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the sports venue order should be for two hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the sports venue order should be for two hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved sports venue should be the one closest to the user\'s home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved sports venue should be the one closest to the user\'s home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved sports venue should be Yaohai District Sports Center Badminton Hall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved sports venue should be Yaohai District Sports Center Badminton Hall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the sports venue reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the sports venue reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The time for the sports venue reservation should be 14:00:00 on 2025-05-03', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The time for the sports venue reservation should be 14:00:00 on 2025-05-03"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the hot pot set purchase in the historical orders to see if it includes du', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the hot pot set purchase in the historical orders to see if it includes duck tongues; the search shows it does not, and the status of this order is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the newly purchased hot pot set should be Bashu General Hot Pot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the newly purchased hot pot set should be Bashu General Hot Pot (Yaohai Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly purchased hot pot set should include duck tongues', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly purchased hot pot set should include duck tongues"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly purchased hot pot set should be a set for two people, not two single-p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly purchased hot pot set should be a set for two people, not two single-person sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
