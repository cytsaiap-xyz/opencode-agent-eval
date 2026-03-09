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
    expect(result[0].store_id).toBe('S17557511697936893_F00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511697936893_P00118", "quantity": 7}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(5460, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557511697936893_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511697936893_P00001", "quantity": 3}, {"product_id": "S17557511697936893_P00012", "quantity": 3}, {"product_id": "S17557511697936893_P00003", "quantity": 3}, {"product_id": "S17557511697936893_P00009", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(4056, 0);
  });

  test('rubric: January 29, 2025 is Spring Festival. The user wants all five days of the trip to', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "January 29, 2025 is Spring Festival. The user wants all five days of the trip to be workdays, so the trip should be from January 20, 2025 to January 24, 2025, with the departure flight on January 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight cannot be a red-eye flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight cannot be a red-eye flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight seat type should be Economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight seat type should be Economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of departure flight tickets should be 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of departure flight tickets should be 7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight should be from Chengdu to Nanjing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight should be from Chengdu to Nanjing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be within 1km range of Qinhuai River (excluding exactly 1km)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 1km range of Qinhuai River (excluding exactly 1km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel budget should be 300-500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel budget should be 300-500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should not be any of these brands: Home Inn/Hanting/7 Days/Ji Hotel/Ji', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should not be any of these brands: Home Inn/Hanting/7 Days/Ji Hotel/Jinjiang Inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be a chain brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be a chain brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should include 3 twin rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should include 3 twin rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should include twin rooms for 4 nights, specifically for Janua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should include twin rooms for 4 nights, specifically for January 20, 2025, January 21, 2025, January 22, 2025, and January 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
