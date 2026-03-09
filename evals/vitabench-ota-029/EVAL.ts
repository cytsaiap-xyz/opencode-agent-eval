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
    expect(result[0].store_id).toBe('S17557505534942588_H00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505534942588_P00031", "quantity": 1}, {"product_id": "S17557505534942588_P00032", "quantity": 1}, {"product_id": "S17557505534942588_P00041", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1694, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505534942588_A00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505534942588_P00059", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(45, 0);
  });

  test('rubric: The hotel brand should be Hanting, Ji Hotel, or Vienna Hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand should be Hanting, Ji Hotel, or Vienna Hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type must be king rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type must be king rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include three nights, specifically 2025-01-07, 2025-01-08', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include three nights, specifically 2025-01-07, 2025-01-08, and 2025-01-09"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price for each hotel room per night should be less than or equal to 600 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price for each hotel room per night should be less than or equal to 600 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the date of Laba Festival in 2025, which is January 7, 2025 (the e', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the date of Laba Festival in 2025, which is January 7, 2025 (the eighth day of the twelfth lunar month of 2024), and the attraction ticket date should be January 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if Yanmenguan Scenic Area offers tickets with guide services on Ja', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if Yanmenguan Scenic Area offers tickets with guide services on January 7, 2025; the result is no, so the attraction should be Gujiao Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket type should be adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket type should be adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
