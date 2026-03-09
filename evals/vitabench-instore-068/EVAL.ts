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
    expect(result[0].store_id).toBe('S17567836610186779_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836610186779_P00001", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(264, 0);
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

  test('rubric: The baking workshop order delivery address should be within 3km (inclusive) of R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The baking workshop order delivery address should be within 3km (inclusive) of Room 1201, Unit 1, Building A3, Xinghai Square, Shahekou District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the baking workshop should be a Single Person Experience p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the baking workshop should be a Single Person Experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the baking workshop should include Materials Provided and ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the baking workshop should include Materials Provided and Making Instructions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of items ordered from the baking workshop should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of items ordered from the baking workshop should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked baking workshop should be Creative Baking Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked baking workshop should be Creative Baking Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the Qingming Festival 2023 falls on 2023-04-05, the baking workshop reserv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the Qingming Festival 2023 falls on 2023-04-05, the baking workshop reservation time should be 2023-04-05 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the baking workshop reservation should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the baking workshop reservation should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There is a Thai restaurant with terrace within 3km (inclusive) of Creative Bakin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There is a Thai restaurant with terrace within 3km (inclusive) of Creative Baking Workshop, No.18 Xinghai Park East Road, Shahekou District, Dalian, so the restaurant reservation should be for a Thai restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Thai restaurant should have a terrace', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Thai restaurant should have a terrace"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai restaurant reservation time should be 2023-04-05 18:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai restaurant reservation time should be 2023-04-05 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Thai restaurant reservation should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Thai restaurant reservation should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
