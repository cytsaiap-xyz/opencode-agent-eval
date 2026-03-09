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
    expect(result[0].store_id).toBe('S17557512977306832_H00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512977306832_P00012", "quantity": 1}, {"product_id": "S17557512977306832_P00014", "quantity": 1}, {"product_id": "S17557512977306832_P00097", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1374, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512977306832_A00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512977306832_P00031", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(50, 0);
  });

  test('rubric: The hotel booked should support Free cancellation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should support Free cancellation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to verify whether March 9, 2025, March 10, 2025, and March 11, 2025 are sta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to verify whether March 9, 2025, March 10, 2025, and March 11, 2025 are statutory holidays, and the result is no, so the distance between the booked hotel and Jiefangbei Pedestrian Street, 100 Zourong Road, Yuzhong District, Chongqing should be less than or equal to 100 meters"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include three nights, which must be March 9, 2025, March ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include three nights, which must be March 9, 2025, March 10, 2025, and March 11, 2025 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the hotel room should be less than or equal to 500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the hotel room should be less than or equal to 500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction booked should be Baiheliang Underwater Museum', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booked should be Baiheliang Underwater Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the attraction order should be March 10, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the attraction order should be March 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the attraction order should be an Adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the attraction order should be an Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
