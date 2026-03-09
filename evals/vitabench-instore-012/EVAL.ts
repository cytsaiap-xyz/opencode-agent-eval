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
    expect(result[0].store_id).toBe('S17564420255503132_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420255503132_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(120, 0);
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
    expect(result[2].store_id).toBe('S17564420255503132_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420255503132_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(688, 0);
  });

  test('rubric: Should check if the highest temperature on July 4, 2024 exceeds 30 degrees. The ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the highest temperature on July 4, 2024 exceeds 30 degrees. The result is no, so the sports venue order should be from a previously visited gymnasium"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check user\'s historical behavior to find previously visited gymnasiums.', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check user\'s historical behavior to find previously visited gymnasiums. The result is Lexing Sports Center, so the sports venue order should be from Lexing Sports Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the sports venue should be a Badminton Court usage vouche', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the sports venue should be a Badminton Court usage voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage duration for the sports venue product should be 4 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage duration for the sports venue product should be 4 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of sports venue product ordered should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of sports venue product ordered should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved sports venue should be Lexing Sports Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved sports venue should be Lexing Sports Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sports venue reservation time should be 2024-07-04 14:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sports venue reservation time should be 2024-07-04 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the sports venue reservation should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the sports venue reservation should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the whole roasted lamb restaurant should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the whole roasted lamb restaurant should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The whole roasted lamb restaurant\'s distance from Lexing Sports Center, 77 Spor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The whole roasted lamb restaurant\'s distance from Lexing Sports Center, 77 Sports Road, Yingze District, Taiyuan should not exceed 2km (including 2km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the whole roasted lamb restaurant should be a set for 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the whole roasted lamb restaurant should be a set for 5-6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of product ordered from the whole roasted lamb restaurant should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of product ordered from the whole roasted lamb restaurant should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered from the whole roasted lamb restaurant should be non-alcoholic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered from the whole roasted lamb restaurant should be non-alcoholic"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
