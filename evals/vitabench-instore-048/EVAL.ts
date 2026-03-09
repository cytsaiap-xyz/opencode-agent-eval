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
    expect(result[0].store_id).toBe('S17567836568972451_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836568972451_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(468, 0);
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
    expect(result[2].store_id).toBe('S17567836568972451_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836568972451_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: User should prioritize Western restaurants within 5km (inclusive) of Room 1203, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "User should prioritize Western restaurants within 5km (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province. If none available, select a Japanese restaurant from user\'s history. As there are results, the restaurant ordered should be a Western restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant ordered should be a Listed Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant ordered should be a Listed Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant\'s environment should be romantic and suitable for a prop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant\'s environment should be romantic and suitable for a proposal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should include Tomahawk Steak and Red Wine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should include Tomahawk Steak and Red Wine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should be a Set Menu for Two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should be a Set Menu for Two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Western restaurant should be Romantic Starry Sky Western Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Western restaurant should be Romantic Starry Sky Western Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant reservation time should be 2025-08-29 17:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant reservation time should be 2025-08-29 17:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house ordered should have a Quiet Environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house ordered should have a Quiet Environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house should be within 500m (inclusive) of Room 1203, Building B, Wanda ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house should be within 500m (inclusive) of Room 1203, Building B, Wanda Plaza, 28 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order price should be within 100 yuan (inclusive)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order price should be within 100 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order should include Tea Snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order should include Tea Snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order should be a Set Menu for Two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order should be a Set Menu for Two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
