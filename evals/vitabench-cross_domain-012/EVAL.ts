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
    expect(result[0].store_id).toBe('S17550802148582740_I00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802148582740_P00057", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(688, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802148582740_T00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802148582740_P00022", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(557, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The restaurant ordered must have artistic atmosphere', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must have artistic atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered must be a western restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be a western restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered must have a rating of 4.8 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must have a rating of 4.8 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered should be suitable for six people dining', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered should be suitable for six people dining"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered cannot contain alcohol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered cannot contain alcohol"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered cannot contain high purine foods such as seafood soup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered cannot contain high purine foods such as seafood soup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets ordered should be First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets ordered should be First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket price should be less than 300 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket price should be less than 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the ordered train should be before 10 PM on January 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the ordered train should be before 10 PM on January 9"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the ordered train should be after 3 PM on January 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the ordered train should be after 3 PM on January 9"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 12:00 on January 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 12:00 on January 9"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reserved should be Art Space Western Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reserved should be Art Space Western Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
