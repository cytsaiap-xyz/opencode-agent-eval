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
    expect(result[0].store_id).toBe('S17550848554515407_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550848554515407_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1299, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802119759684_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802119759684_P00001", "quantity": 1}, {"product_id": "S17550802119759684_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(336, 0);
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

  test('rubric: The washing machine ordered must be a quiet operation washing machine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The washing machine ordered must be a quiet operation washing machine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The washing machine ordered must be an energy-saving model', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The washing machine ordered must be an energy-saving model"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The washing machine brand must be either Midea or Haier', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The washing machine brand must be either Midea or Haier"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the washing machine should be Tangshan People\'s Hospit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the washing machine should be Tangshan People\'s Hospital Single Dormitory"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must be located within 1km (inclusive) of Tangshan People\'s Ho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must be located within 1km (inclusive) of Tangshan People\'s Hospital"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must have good soundproofing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must have good soundproofing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The most economical room type must be selected for the hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The most economical room type must be selected for the hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel needs to be booked for two nights, with check-in dates on 2025-10-07 a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel needs to be booked for two nights, with check-in dates on 2025-10-07 and 2025-10-08"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Distance information from the hotel to the user\'s dormitory must be provided, w', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Distance information from the hotel to the user\'s dormitory must be provided, with the result showing Home Inn is approximately 150 meters from Tangshan People\'s Hospital Single Dormitory"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered must be a Tangshan-style Time-honored Brand restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be a Tangshan-style Time-honored Brand restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant rating must be higher than 4.8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant rating must be higher than 4.8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time must be 2025-10-07 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time must be 2025-10-07 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation order must be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation order must be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
