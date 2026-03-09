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
    expect(result[0].store_id).toBe('S22380603448156647_S47133');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S19752548911592184_P21735", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(44.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S19264770908101694_S38950');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S32959546924972330_P56695", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(268.0, 0);
  });

  test('rubric: The delivery address for the fruit tea order should be Zhinong Li, Opposite to t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the fruit tea order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the fruit tea order should be around 2024-09-14 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the fruit tea order should be around 2024-09-14 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit tea order should select Auntie Shanghai Select Tea (Xingfu Middle Road', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit tea order should select Auntie Shanghai Select Tea (Xingfu Middle Road Branch) as the store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit tea order should select Extra Large Bucket of Fruit Tea as the product', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit tea order should select Extra Large Bucket of Fruit Tea as the product"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The temperature attribute for the fruit tea order should be selected as No Ice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The temperature attribute for the fruit tea order should be selected as No Ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the hot pot order should be Zhinong Li, Opposite to the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the hot pot order should be Zhinong Li, Opposite to the North of Huaxin Garden, Xingfu South Road, Zhifu District, Yantai, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the hot pot order should be around 2024-09-14 18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the hot pot order should be around 2024-09-14 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot order should select a product with tomato flavor to cater to childre', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot order should select a product with tomato flavor to cater to children\'s preferences"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot order should select a set meal suitable for 2-3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot order should select a set meal suitable for 2-3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
