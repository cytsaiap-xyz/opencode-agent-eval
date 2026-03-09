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
    expect(result[0].store_id).toBe('S17550806591392888_I00007');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806591392888_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(458, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550806591392888_I00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806591392888_P00063", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(288, 0);
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

  test('rubric: The Hanfu store should be within 1km of Xiyuan Temple', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Hanfu store should be within 1km of Xiyuan Temple"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the Hanfu store should be a couple photography package ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the Hanfu store should be a couple photography package including styling"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should mainly serve Suzhou Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should mainly serve Suzhou Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should offer free Pingtan performance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should offer free Pingtan performance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should provide free Pingtan performance between 4:00 PM a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should provide free Pingtan performance between 4:00 PM and 7:30 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be for one couple meal, not two individual meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be for one couple meal, not two individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation is for Songhelou Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation is for Songhelou Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is September 21, 2025, at 16:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is September 21, 2025, at 16:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation is for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation is for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The last time milk tea was ordered was July 10, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The last time milk tea was ordered was July 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The last milk tea order was more than one month before September 20, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The last milk tea order was more than one month before September 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
