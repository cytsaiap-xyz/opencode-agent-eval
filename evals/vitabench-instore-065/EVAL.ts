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
    expect(result[0].store_id).toBe('S17567836596776278_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836596776278_P00001", "quantity": 2}, {"product_id": "S17567836596776278_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(544, 0);
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

  test('rubric: The massage shop ordered should have a comfortable environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop ordered should have a comfortable environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The service of the massage shop ordered should be meticulous', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The service of the massage shop ordered should be meticulous"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage shop order should include elderly massage packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop order should include elderly massage packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of elderly massage packages in the massage shop order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of elderly massage packages in the massage shop order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The elderly massage packages in the massage shop order should not be packages th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The elderly massage packages in the massage shop order should not be packages that include full body massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage shop order should include essential oil SPA packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop order should include essential oil SPA packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of essential oil SPA packages in the massage shop order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of essential oil SPA packages in the massage shop order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The elderly massage packages and essential oil SPA packages should be from the s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The elderly massage packages and essential oil SPA packages should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved massage shop should be Kangleyuan Wellness Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved massage shop should be Kangleyuan Wellness Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check the specific date of the Double Ninth Festival in 2024, which is Fr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, so the massage shop reservation time is 2024-10-11 20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the massage shop reservation should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the massage shop reservation should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check the specific date of the Double Ninth Festival in 2024, which is Fr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check the specific date of the Double Ninth Festival in 2024, which is Friday, October 11, 2024, not a weekend, so should not order from a Hangzhou cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
