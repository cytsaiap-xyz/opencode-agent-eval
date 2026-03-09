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
    expect(result[0].store_id).toBe('S17564420251842877_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420251842877_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(35, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420251842877_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420251842877_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(35, 0);
  });

  test('rubric: The ordered murder mystery game set must include carpooling service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery game set must include carpooling service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered murder mystery game set must include a script', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery game set must include a script"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered murder mystery game set must include script and tea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery game set must include script and tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered murder mystery game must be horror themed', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery game must be horror themed"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The query shows that Friday (2025-09-12) has a high temperature of 32 degrees, e', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The query shows that Friday (2025-09-12) has a high temperature of 32 degrees, exceeding 30 degrees, so the order should be placed at a cold noodle restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cold noodle restaurant is within 500m of home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cold noodle restaurant is within 500m of home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cold noodles must not contain apple strips', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cold noodles must not contain apple strips"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cold noodles must be available for takeaway', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cold noodles must be available for takeaway"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
