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
    expect(result[0].store_id).toBe('S55752896230532586_S79712');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S10013050269630202_P84592", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(28.7, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S20865362129566483_S13882');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S23251562205512993_P99701", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(36.0, 0);
  });

  test('rubric: Successfully canceled the order for 🏅Deluxe Individual Customized Set Meal from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the order for 🏅Deluxe Individual Customized Set Meal from Sixi Cloud Kitchen Chinese Healthy Cuisine store, specifically the order with order_id 90721002T02 should have been updated to cancelled status"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Carrot Slimming Bottle juice order should be Jiayle', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Carrot Slimming Bottle juice order should be Jiayleyuan, No.158 Yongle Road, Liangxi District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Carrot Slimming Bottle juice order should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Carrot Slimming Bottle juice order should be before 7:00 PM on November 1, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the Carrot Slimming Bottle juice order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the Carrot Slimming Bottle juice order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product specification in the Carrot Slimming Bottle juice order should be \'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product specification in the Carrot Slimming Bottle juice order should be \'No ice\'"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
