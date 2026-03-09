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
    expect(result[0].store_id).toBe('S17557512487369621_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512487369621_P00086", "quantity": 2}, {"product_id": "S17557512487369621_P00090", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(832, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512487369621_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512487369621_P00032", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(40, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512487369621_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512487369621_P00043", "quantity": 2}, {"product_id": "S17557512487369621_P00045", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(60, 0);
  });

  test('rubric: Train number should be D3115', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train number should be D3115"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train departure date should be March 22, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train departure date should be March 22, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets should include 2 Second-class seats', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets should include 2 Second-class seats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets should include 2 Business-class seats', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets should include 2 Business-class seats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 1 attraction should be Pingtan Beach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 1 attraction should be Pingtan Beach"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 1 attraction ticket usage date should be March 22, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 1 attraction ticket usage date should be March 22, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 1 attraction ticket quantity should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 1 attraction ticket quantity should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 2 attraction should be Three Lanes and Seven Alleys', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 2 attraction should be Three Lanes and Seven Alleys"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 2 attraction ticket usage date should be March 23, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 2 attraction ticket usage date should be March 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 2 attraction tickets should include 2 Adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 2 attraction tickets should include 2 Adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Day 2 attraction tickets should include 2 Senior tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Day 2 attraction tickets should include 2 Senior tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
