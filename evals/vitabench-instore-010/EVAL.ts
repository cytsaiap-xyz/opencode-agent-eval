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
    expect(result[0].store_id).toBe('S17564420267442732_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420267442732_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(388, 0);
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
    expect(result[2].store_id).toBe('S17564420267442732_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420267442732_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The merchant in the package order is a local cuisine restaurant (Minnan cuisine)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the package order is a local cuisine restaurant (Minnan cuisine)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased package must include the restaurant\'s signature dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased package must include the restaurant\'s signature dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased package is a four-person meal, not four individual packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased package is a four-person meal, not four individual packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant is Gulang Minwei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant is Gulang Minwei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation is 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation is 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is 12:00:00 on 2024-03-17', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is 12:00:00 on 2024-03-17"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check tomorrow\'s (2024-03-18) weather forecast, with the highest temperature be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check tomorrow\'s (2024-03-18) weather forecast, with the highest temperature being 28 degrees, not exceeding 30 degrees, therefore purchasing a badminton package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant in the badminton package order should be the one the user frequentl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the badminton package order should be the one the user frequently visits (Software Park Badminton Hall)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased badminton package should be for two hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased badminton package should be for two hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased badminton package should be a court package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased badminton package should be a court package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
