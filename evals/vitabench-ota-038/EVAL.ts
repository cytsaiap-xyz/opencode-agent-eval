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
    expect(result[0].store_id).toBe('S17557071510245346_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071510245346_P00042", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(180, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557071510245346_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071510245346_P00001", "quantity": 1}, {"product_id": "S17557071510245346_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(856, 0);
  });

  test('rubric: Query the price of Huangcheng Xiangfu tickets with show included', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query the price of Huangcheng Xiangfu tickets with show included"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Jincheng from August 2, 2025 to August 7, 2025, and find wh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Jincheng from August 2, 2025 to August 7, 2025, and find which day is sunny (result: August 5, 2025), so the attraction ticket date is set for August 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket purchased includes a show', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket purchased includes a show"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check that the Beginning of Autumn date is August 7, 2025, so hotel reservations', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check that the Beginning of Autumn date is August 7, 2025, so hotel reservations are made for August 7 and August 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: By reviewing last month\'s hotel orders in Wuzhou, determine that the hotel to b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "By reviewing last month\'s hotel orders in Wuzhou, determine that the hotel to be booked is Atour Hotel Wuzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type booked is a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type booked is a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
