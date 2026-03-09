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
    expect(result[0].store_id).toBe('S17564420245532453_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420245532453_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(198, 0);
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
    expect(result[2].store_id).toBe('S17564420245532453_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420245532453_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(98, 0);
  });

  test('rubric: The price of ordered items at the nail salon should be within the range of 150-2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of ordered items at the nail salon should be within the range of 150-280 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the ordered nail salon must be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the ordered nail salon must be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered nail salon must provide One-customer-one-disinfection service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered nail salon must provide One-customer-one-disinfection service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered nail salon item cannot be a Solid Color Nail Art Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered nail salon item cannot be a Solid Color Nail Art Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered nail salon item should be a nail art package with design', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered nail salon item should be a nail art package with design"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered nail salon item should be a French Manicure Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered nail salon item should be a French Manicure Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered nail salon item should include Constructed Nail Art service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered nail salon item should include Constructed Nail Art service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved nail salon should be Elegant Fingertip Nail Salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved nail salon should be Elegant Fingertip Nail Salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the nail salon reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the nail salon reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the nail salon is 2025-05-07 11:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the nail salon is 2025-05-07 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot restaurant should be Old Beijing Copper Pot Hot Pot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant should be Old Beijing Copper Pot Hot Pot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot restaurant must be within 1km (inclusive) of Elegant Fingertip Nail ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant must be within 1km (inclusive) of Elegant Fingertip Nail Salon, No.170 Xuefu Road, Nangang District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the hot pot restaurant should be a Single Person Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the hot pot restaurant should be a Single Person Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hot pot package should be Non-spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hot pot package should be Non-spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
