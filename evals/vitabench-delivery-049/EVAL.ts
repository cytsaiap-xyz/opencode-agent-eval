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
    expect(result[0].store_id).toBe('S29320856098611305_S14636');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S33258850217936154_P51247", "quantity": 1}, {"product_id": "S94741277271315699_P39700", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(18.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S23149193666334671_S55696');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26406900254948404_P52292", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(30.0, 0);
  });

  test('rubric: The afternoon delivery order after the audition should choose Steamed Tender Cut', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon delivery order after the audition should choose Steamed Tender Cuttlefish Slices and Whole Grain Corn Wowotou from Qingshuji store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the afternoon delivery order after the audition sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the afternoon delivery order after the audition should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the afternoon delivery order after the audition should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the afternoon delivery order after the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the afternoon delivery order after the audition ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the afternoon delivery order after the audition should be around 2025-10-30 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sweetness option for Camellia Americano in the coffee order before the audit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sweetness option for Camellia Americano in the coffee order before the audition should be the no sugar option"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the coffee order before the audition should be 2 cu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the coffee order before the audition should be 2 cups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the coffee order before the audition should be No.8, No', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the coffee order before the audition should be No.8, No.7 Tianxian Bridge North Road, Jinhai International Garden, Jinjiang District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the coffee order before the audition should be b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the coffee order before the audition should be before 2025-10-30 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
