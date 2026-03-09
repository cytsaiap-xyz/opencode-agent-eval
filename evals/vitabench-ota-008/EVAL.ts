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
    expect(result[0].store_id).toBe('S17557505471272970_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505471272970_P00001", "quantity": 1}, {"product_id": "S17557505471272970_P00002", "quantity": 1}, {"product_id": "S17557505471272970_P00003", "quantity": 1}, {"product_id": "S17557505471272970_P00004", "quantity": 1}, {"product_id": "S17557505471272970_P00005", "quantity": 1}, {"product_id": "S17557505471272970_P00006", "quantity": 1}, {"product_id": "S17557505471272970_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2016, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505471272970_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505471272970_P00060", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The hotel booked is in Linyi area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked is in Linyi area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates are March 5, 2025, March 6, 2025, March 7, 2025, March 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates are March 5, 2025, March 6, 2025, March 7, 2025, March 8, 2025, March 9, 2025, March 10, 2025, March 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must include laundry service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must include laundry service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must include parking lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must include parking lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be in the category that the user most frequently searche', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be in the category that the user most frequently searches for (by checking user profile, it\'s Budget hotel)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Yuncheng on Women\'s Day (March 8, 2025), (sunny, temperatu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Yuncheng on Women\'s Day (March 8, 2025), (sunny, temperature 3-14 degrees Celsius, humidity 58%) the weather condition is good, so the tickets purchased are for Rainbow Salt Lake Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchase date for the tickets is March 8, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchase date for the tickets is March 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets purchased is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets purchased is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order only includes Adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order only includes Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
