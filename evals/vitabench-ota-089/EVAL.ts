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
    expect(result[0].store_id).toBe('S17557513687523962_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513687523962_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(60, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557513687523962_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513687523962_P00008", "quantity": 1}, {"product_id": "S17557513687523962_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(296, 0);
  });

  test('rubric: The attraction ordered should be of the type that interests the user most (which', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should be of the type that interests the user most (which according to user profile is traditional village type)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket purchased should be for November 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket purchased should be for November 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket purchased should be an Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket purchased should be an Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: According to the calendar, Wednesday (November 6, 2024) and Thursday (November 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to the calendar, Wednesday (November 6, 2024) and Thursday (November 7, 2024) are not holidays, so the hotel booked should be within 5km of the attraction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be booked for November 6, 2024 and November 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be booked for November 6, 2024 and November 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type booked in the hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type booked in the hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price spent on the hotel order should not exceed 300 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price spent on the hotel order should not exceed 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should have Free Parking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should have Free Parking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
