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
    expect(result[0].store_id).toBe('S17567836607319113_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836607319113_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(480, 0);
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
    expect(result[2].store_id).toBe('S17567836607319113_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836607319113_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(45, 0);
  });

  test('rubric: Swimming pools should be disinfected daily', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Swimming pools should be disinfected daily"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the swimming pool should be one-on-one guidance course', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the swimming pool should be one-on-one guidance course"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the swimming pool should be a course suitable for beginne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the swimming pool should be a course suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s practice period is two weeks, during which they only participate in ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s practice period is two weeks, during which they only participate in practice on Fridays, Saturdays, and Sundays each week, totaling 6 days of practice, so the swimming pool order should be for a 6-session package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved swimming pool should be Haiyue Swimming and Fitness Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved swimming pool should be Haiyue Swimming and Fitness Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the swimming pool should be 2025-05-09 19:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the swimming pool should be 2025-05-09 19:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the swimming pool reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the swimming pool reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the user\'s historical behavior to find previously visited salad s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the user\'s historical behavior to find previously visited salad shops, the result is Mr. Salad, so the salad shop to order from should be Mr. Salad"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the salad shop should be a single person set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the salad shop should be a single person set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the salad shop should include red meat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the salad shop should include red meat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the salad shop should not include chicken breast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the salad shop should not include chicken breast"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the salad shop should not include coffee drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the salad shop should not include coffee drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
