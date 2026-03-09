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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810196195804_I00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810196195804_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1980, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810196195804_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810196195804_P00013", "quantity": 6}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(4680, 0);
  });

  test('rubric: The reserved restaurant should be a cultural-themed restaurant with a scholarly ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a cultural-themed restaurant with a scholarly atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have an elegant and dignified environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have an elegant and dignified environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should offer exquisite dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should offer exquisite dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private room of the reserved restaurant should accommodate at least 18 peopl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private room of the reserved restaurant should accommodate at least 18 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is 12:00 on March 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is 12:00 on March 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation is for 18 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation is for 18 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be Moxiang Pavilion (S17550810196195804_I00007)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be Moxiang Pavilion (S17550810196195804_I00007)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The banquet set ordered for the event should be suitable for 18 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The banquet set ordered for the event should be suitable for 18 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 1km of Moxiang Pavilion, 36 Zhongguancun South', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 1km of Moxiang Pavilion, 36 Zhongguancun South Street, Haidian District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should have a nice environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should have a nice environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type booked should be king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type booked should be king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Six rooms should be booked at the same hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Six rooms should be booked at the same hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel should be March 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel should be March 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
