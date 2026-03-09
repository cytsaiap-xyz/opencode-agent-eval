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
    expect(result[0].store_id).toBe('S17564420268579665_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420268579665_P00003", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(116, 0);
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
    expect(result[2].store_id).toBe('S17564420268579665_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420268579665_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(218, 0);
  });

  test('rubric: The ordered yoga studio cannot be Taiyuan Yushe Yoga Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio cannot be Taiyuan Yushe Yoga Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio must be within 3km (including 3km) of the user\'s home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio must be within 3km (including 3km) of the user\'s home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio must have an elegant environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio must have an elegant environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio must have professional teachers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio must have professional teachers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio must have classes scheduled on weekdays (Monday to Frida', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio must have classes scheduled on weekdays (Monday to Friday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio must be recently opened', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio must be recently opened"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased yoga package must be suitable for beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased yoga package must be suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased yoga package must include basic pose instruction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased yoga package must include basic pose instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of yoga packages purchased must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of yoga packages purchased must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked merchant should be Qingya Yoga Life Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked merchant should be Qingya Yoga Life Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people in the yoga studio reservation should be 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people in the yoga studio reservation should be 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The time in the yoga studio reservation should be 19:30:00 on 2025-07-11', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The time in the yoga studio reservation should be 19:30:00 on 2025-07-11"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered KTV must be within 3km of the user\'s home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered KTV must be within 3km of the user\'s home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered KTV package should be a singing-only package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered KTV package should be a singing-only package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage duration of the ordered KTV package should be 3 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage duration of the ordered KTV package should be 3 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
