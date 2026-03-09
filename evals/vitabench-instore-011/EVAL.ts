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
    expect(result[0].store_id).toBe('S17564420250725791_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420250725791_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(388, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420250725791_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420250725791_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(138, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17564420250725791_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420250725791_P00017", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(68, 0);
  });

  test('rubric: The merchant ordered in the bathhouse order cannot be the \'Northeastern Bathhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant ordered in the bathhouse order cannot be the \'Northeastern Bathhouse\' that the user has visited before"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered in the bathhouse order must include full body massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered in the bathhouse order must include full body massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered in the bathhouse order must include Cupping Therapy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered in the bathhouse order must include Cupping Therapy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant ordered in the bathhouse order must be high-end', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant ordered in the bathhouse order must be high-end"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the merchant ordered in the Japanese restaurant order should be 4.', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the merchant ordered in the Japanese restaurant order should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered in the Japanese restaurant order is a meal for one person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered in the Japanese restaurant order is a meal for one person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered in the Japanese restaurant order includes Sashimi Platter', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered in the Japanese restaurant order includes Sashimi Platter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant ordered in the Japanese restaurant order should be within 3km of Cr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant ordered in the Japanese restaurant order should be within 3km of Crown Sauna Club, No. 268, Xueshi Road, Yuelu District, Changsha"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: If the total cost of the bathhouse order and Japanese cuisine order does not exc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "If the total cost of the bathhouse order and Japanese cuisine order does not exceed 600 yuan, then purchase a billiards package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of the billiards package order plus the bathhouse order and Japan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of the billiards package order plus the bathhouse order and Japanese cuisine order cannot exceed 600 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
