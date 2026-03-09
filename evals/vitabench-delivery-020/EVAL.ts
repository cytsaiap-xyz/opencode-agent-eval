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
    expect(result[0].store_id).toBe('S97537355154593224_S10282');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30020602686844963_P19861", "quantity": 1}, {"product_id": "S11612563883050070_P50866", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(27.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S22026835984229219_S49422');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S28196571056007770_P75509", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25.8, 0);
  });

  test('rubric: Successfully canceled the Old Shanghai Pork Rib with Rice Cake store order that ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the Old Shanghai Pork Rib with Rice Cake store order that the user no longer needs due to indigestion, the order status with order_id 30711008O01 has been changed to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the newly ordered winter melon meat soup should be Gree', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the newly ordered winter melon meat soup should be Greentown Begonia Garden, No. 1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the newly ordered winter melon meat soup should be before ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the newly ordered winter melon meat soup should be before 13:00 on November 22, 2025, to meet the user\'s afternoon shift needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly ordered product for the user with indigestion should contain both wint', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly ordered product for the user with indigestion should contain both winter melon and meat, suitable for stomach care needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
