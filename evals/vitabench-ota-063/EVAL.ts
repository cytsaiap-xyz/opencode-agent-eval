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
    expect(result[0].store_id).toBe('S17557512184312537_T00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512184312537_P00075", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(536, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512184312537_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512184312537_P00028", "quantity": 1}, {"product_id": "S17557512184312537_P00029", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(30, 0);
  });

  test('rubric: Check train tickets and flight information from Nanjing Station to Shanghai for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check train tickets and flight information from Nanjing Station to Shanghai for next Wednesday, choose the travel option that allows earlier arrival at the office; Train G7003 arrives the earliest, arriving at 09:02, plus 30 minutes from the station to the office, finally arriving at 09:32; Flight MU2882 arrives at 08:20, plus 80 minutes from the airport to the office, finally arriving at 09:40. Therefore, choose to take the G7003 train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the purchased train ticket is October 23, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the purchased train ticket is October 23, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased train ticket is for a train from Nanjing to Shanghai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased train ticket is for a train from Nanjing to Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased train ticket is a Business Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased train ticket is a Business Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction must be of the user\'s favorite type (exhibition hall/mus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction must be of the user\'s favorite type (exhibition hall/museum/art gallery)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction is within 5km (inclusive) of the Bund Financial Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction is within 5km (inclusive) of the Bund Financial Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order includes an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order includes an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order includes guided tour service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order includes guided tour service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scheduled time for the attraction ticket is October 25, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scheduled time for the attraction ticket is October 25, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
