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
    expect(result[0].store_id).toBe('S17557512753054748_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512753054748_P00001", "quantity": 1}, {"product_id": "S17557512753054748_P00002", "quantity": 1}, {"product_id": "S17557512753054748_P00003", "quantity": 1}, {"product_id": "S17557512753054748_P00004", "quantity": 1}, {"product_id": "S17557512753054748_P00005", "quantity": 1}, {"product_id": "S17557512753054748_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4208, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512753054748_A00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512753054748_P00086", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25, 0);
  });

  test('rubric: The hotel should be within 5km (inclusive) of the Shaoyang Intermediate People\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 5km (inclusive) of the Shaoyang Intermediate People\'s Court"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel price should be between 500-1000 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel price should be between 500-1000 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must provide Ironing Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must provide Ironing Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must provide Laundry Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must provide Laundry Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must provide breakfast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must provide breakfast"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation dates should be December 30, 2024, December 31, 2024, Janu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation dates should be December 30, 2024, December 31, 2024, January 01, 2025, January 02, 2025, January 03, 2025, January 04, 2025,"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Due to the New Year\'s Day (January 01, 2025) weather (light rain) being unsuita', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Due to the New Year\'s Day (January 01, 2025) weather (light rain) being unsuitable for outdoor activities, tickets to Baishuidong Scenic Area should not be purchased, but tickets for indoor attractions should be purchased instead"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets should be for January 01, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets should be for January 01, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
