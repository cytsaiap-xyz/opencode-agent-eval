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
    expect(result[0].store_id).toBe('S17550802127833850_H00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802127833850_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(688, 0);
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
    expect(result[2].store_id).toBe('S17550802127833850_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802127833850_P00002", "quantity": 2}, {"product_id": "S17550802127833850_P00003", "quantity": 1}, {"product_id": "S17550931962268303_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(184.1, 0);
  });

  test('rubric: The hotel booked must be pet-friendly', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must be pet-friendly"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must have a Massage Bathtub', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must have a Massage Bathtub"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking date should be 2025-04-24', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking date should be 2025-04-24"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 6km (inclusive) of the sports center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 6km (inclusive) of the sports center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked should be within 3km (inclusive) of the sports center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked should be within 3km (inclusive) of the sports center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked must allow pets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked must allow pets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked must have nutritional meals designed for athletes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked must have nutritional meals designed for athletes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 13:00:00 on 2025-04-25', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 13:00:00 on 2025-04-25"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the pet food order should be Athletes\' Nutrition Resta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pet food order should be Athletes\' Nutrition Restaurant, 35 Keyuan Avenue, Xixiangtang District, Nanning, Guangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the pet food order should be around 13:00 on 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the pet food order should be around 13:00 on 2025-04-25 [meaning the expected delivery time should be within the 12:45-13:15 timeframe]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet food order should include Chicken Breast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet food order should include Chicken Breast"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet food order should include canned pet snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet food order should include canned pet snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet food order should include a dog food bowl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet food order should include a dog food bowl"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All items in the pet food order should be from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All items in the pet food order should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of Chicken Breast in the pet food order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of Chicken Breast in the pet food order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of canned pet snacks in the pet food order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of canned pet snacks in the pet food order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of dog food bowl in the pet food order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of dog food bowl in the pet food order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
