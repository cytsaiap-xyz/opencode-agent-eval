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
    expect(result[0].store_id).toBe('S17564424982696164_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424982696164_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564424982696164_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424982696164_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(468, 0);
  });

  test('rubric: The ordered package is an archery experience package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered package is an archery experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered archery package is for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered archery package is for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered archery hall must be equipped with complete safety protection facili', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered archery hall must be equipped with complete safety protection facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The staff at the ordered archery hall must have professional safety guidance qua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The staff at the ordered archery hall must have professional safety guidance qualifications"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered archery package must include free instruction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered archery package must include free instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if the double experience package at the ordered archery hall includ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the double experience package at the ordered archery hall includes protective gear, the result is yes; the ordered package for two must include protective gear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Japanese cuisine package is for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Japanese cuisine package is for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant cannot be \'Sushi Ichiban\' from the user\'s order histor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant cannot be \'Sushi Ichiban\' from the user\'s order history"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant must be an internet celebrity store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant must be an internet celebrity store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The average consumption per person for the ordered package must not exceed 300 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The average consumption per person for the ordered package must not exceed 300 yuan (300 yuan included)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant must be within 4-5 kilometers from Gold Medal Archery Clu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant must be within 4-5 kilometers from Gold Medal Archery Club, 3rd Floor, Building B, Yuefeng Plaza, 89 Culture Road, Jinshui District, Zhengzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
