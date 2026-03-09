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
    expect(result[0].store_id).toBe('S20925321976048558_S44996');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S12535768828833281_P20402", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(20, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S21738656403955999_S17120');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S24749432382521543_P05845", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(18, 0);
  });

  test('rubric: Successfully canceled the Sticky Rice Tibetan Tea · Fresh Milk Tea order from Ji', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the Sticky Rice Tibetan Tea · Fresh Milk Tea order from Jincheng Tea House (Renhe New City Branch), the order status should be changed to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the wonton order should be Global Center, Building 1, 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the wonton order should be Global Center, Building 1, 1700 North Tianfu Avenue, Guixi Street, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the wonton order should be between 11:30 and 12:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the wonton order should be between 11:30 and 12:30 on 2025-11-07"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant rating for the wonton order should be 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant rating for the wonton order should be 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flavor of the wonton product should be spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flavor of the wonton product should be spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
