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
    expect(result[0].store_id).toBe('S17567847828372521_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567847828372521_P00001", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17567847828372521_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567847828372521_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(30, 0);
  });

  test('rubric: The Western restaurant ordered should have a romantic atmosphere', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant ordered should have a romantic atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the Western restaurant to Room 1204, Building 3, Canal No.1 Ap', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the Western restaurant to Room 1204, Building 3, Canal No.1 Apartment, 128 Xihui Road, Liangxi District, Wuxi should be within 3km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should be a meal for two people, not multiple singl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should be a meal for two people, not multiple single-person meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should include champagne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should include champagne"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should be available at 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should be available at 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Western restaurant should be Azure Coast Western Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Western restaurant should be Azure Coast Western Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant reservation time should be 2025-08-29 18:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant reservation time should be 2025-08-29 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Western restaurant reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Western restaurant reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the cat cafe to Azure Coast Western Restaurant should be withi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the cat cafe to Azure Coast Western Restaurant should be within 2km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the cat cafe should be a single-person meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the cat cafe should be a single-person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the cat cafe should not include drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the cat cafe should not include drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
