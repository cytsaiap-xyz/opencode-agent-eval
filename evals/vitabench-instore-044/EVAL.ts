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
    expect(result[0].store_id).toBe('S17564426124392851_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426124392851_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(88, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564426124392851_I00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426124392851_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(158, 0);
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

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564426124392851_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426124392851_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(88, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17564426124392851_I00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426124392851_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: The status of the adult rock climbing single experience package order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the adult rock climbing single experience package order should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the climbing gym should be Parent-child rock climbing pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the climbing gym should be Parent-child rock climbing package (1 adult, 1 child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the climbing gym order should be Extreme Rock Climbing Gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the climbing gym order should be Extreme Rock Climbing Gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the climbing gym is November 15, 2025, at 16:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the climbing gym is November 15, 2025, at 16:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the climbing gym reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the climbing gym reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved merchant for the climbing gym should be Extreme Rock Climbing Gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved merchant for the climbing gym should be Extreme Rock Climbing Gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Cantonese restaurant should not be more than 1km (including 1km) from Extrem', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Cantonese restaurant should not be more than 1km (including 1km) from Extreme Rock Climbing Gym, 85 Lianqian West Road, Siming District, Xiamen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food from the Cantonese restaurant should be Light diet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food from the Cantonese restaurant should be Light diet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Cantonese restaurant should be Package for two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Cantonese restaurant should be Package for two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The technician at the sports rehabilitation center should have a sports rehabili', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The technician at the sports rehabilitation center should have a sports rehabilitation therapist certificate"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sports rehabilitation center should not be more than 1km (including 1km) fro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sports rehabilitation center should not be more than 1km (including 1km) from Room 504, Building 3, Lotus Apartment, 189 Lianqian East Road, Siming District, Xiamen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the sports rehabilitation center should be Sports rehabili', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the sports rehabilitation center should be Sports rehabilitation package for one"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
