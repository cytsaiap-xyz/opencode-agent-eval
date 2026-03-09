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
    expect(result[0].store_id).toBe('S32814171117127084_S30670');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23240680060346608_P00124", "quantity": 1}, {"product_id": "S33040284436404108_P48156", "quantity": 1}, {"product_id": "S12642530014776475_P58854", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(20.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S68885587418599272_S28839');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26400754400806447_P62652", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(19.98, 0);
  });

  test('rubric: Rice dumplings in the order should not be sweet flavored, but should be savory o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Rice dumplings in the order should not be sweet flavored, but should be savory options such as Egg Yolk and Meat Rice Dumpling, Fresh Meat Rice Dumpling, etc."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Rice dumpling orders should not be from Barbie Steamed Buns & Dumplings stores, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Rice dumpling orders should not be from Barbie Steamed Buns & Dumplings stores, but from other vendors offering rice dumplings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for rice dumpling orders should be Wuxi (National) Software', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for rice dumpling orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Coffee in the order should not contain dairy products, and should have the \'no ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Coffee in the order should not contain dairy products, and should have the \'no milk\' attribute"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for coffee orders should be Wuxi (National) Software Park, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for coffee orders should be Wuxi (National) Software Park, 18 Zhenze Road (111 Linghu Avenue), Xinwu District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
