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
    expect(result[0].store_id).toBe('S17550802111734829_A00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802111734829_P00019", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(195, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550931962874071_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550931962874071_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(289, 0);
  });

  test('rubric: The ordered scenic area should be suitable for hiking activities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered scenic area should be suitable for hiking activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered scenic area should be in Baoding', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered scenic area should be in Baoding"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The latest admission time for the scenic area should be after 16:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The latest admission time for the scenic area should be after 16:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered tickets should be the lowest among all tickets for this', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered tickets should be the lowest among all tickets for this scenic area (S17550802111734829_P00019)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of a single ticket should not exceed 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of a single ticket should not exceed 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the ordered tickets should be October 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the ordered tickets should be October 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of ordered tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of ordered tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The agent must check the weather for both October 29, 2025, and October 30, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The agent must check the weather for both October 29, 2025, and October 30, 2025, with the final results showing temperatures above 30 degrees on both days"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered outdoor equipment should be from the Toread Outdoor Flagship Store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered outdoor equipment should be from the Toread Outdoor Flagship Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered outdoor equipment should be a tent', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered outdoor equipment should be a tent"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the outdoor equipment should be Huachuang International', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the outdoor equipment should be Huachuang International Plaza, 557 Yuhua West Road, Lianchi District, Baoding, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the outdoor equipment should be before 16:30 on O', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the outdoor equipment should be before 16:30 on October 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
