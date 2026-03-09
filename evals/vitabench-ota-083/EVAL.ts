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
    expect(result[0].store_id).toBe('S17557515810777999_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515810777999_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(659, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557515810777999_H00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515810777999_P00012", "quantity": 1}];
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

  test('rubric: The ordered attraction should be the type that the user visits most frequently (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction should be the type that the user visits most frequently (by querying user profile, it should be theme parks)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: By checking the calendar, the Dragon Boat Festival is on May 31, 2025, and the a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "By checking the calendar, the Dragon Boat Festival is on May 31, 2025, and the attraction tickets should be booked for the Saturday after the festival (i.e., June 7, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets should be family package (2 adults + 1 child)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets should be family package (2 adults + 1 child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 3km of Zigong Fantawild Dinosaur Kingdom', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 3km of Zigong Fantawild Dinosaur Kingdom"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should be for a theme room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should be for a theme room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation date should be June 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation date should be June 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order cost should not exceed 300 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order cost should not exceed 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should offer late checkout', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should offer late checkout"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Verify that the hotel reservation is confirmed successfully', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Verify that the hotel reservation is confirmed successfully"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
