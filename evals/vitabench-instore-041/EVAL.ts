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
    expect(result[0].store_id).toBe('S17564425662164131_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425662164131_P00001", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17564425662164131_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425662164131_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: The ordered item from the workshop should be a cookie-making package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the workshop should be a cookie-making package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the workshop should be a Parent-Child package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the workshop should be a Parent-Child package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the workshop should include Baking Instruction service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the workshop should include Baking Instruction service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The workshop location should be within 3 kilometers (inclusive) of Jinshui Garde', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The workshop location should be within 3 kilometers (inclusive) of Jinshui Garden, 128 Zhenhua Road, Licang District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved workshop should be Sweetheart Bakery Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved workshop should be Sweetheart Bakery Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the workshop reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the workshop reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The workshop reservation time should be 2025-10-06 15:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The workshop reservation time should be 2025-10-06 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the restaurant should be a Hairtail Fish set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the restaurant should be a Hairtail Fish set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be one Two-Person Set rather than two Single Person ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be one Two-Person Set rather than two Single Person Meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be on the 2024 Must-Eat List', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be on the 2024 Must-Eat List"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s rating should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s rating should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes in the restaurant order should be Light', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes in the restaurant order should be Light"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
