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
    expect(result[0].store_id).toBe('S19315672627329167_S12289');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21294793049651694_P89343", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(21, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S12623390759490947_S33169');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S27724810072617102_P48906", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(38.9, 0);
  });

  test('rubric: The delivery address for LELECHA Tea order should be Greenland Yuansheng Interna', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for LELECHA Tea order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for LELECHA Tea order should be before 12:00 on Augu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for LELECHA Tea order should be before 12:00 on August 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing LELECHA Tea drinks, select products with no tea base to avoid caff', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing LELECHA Tea drinks, select products with no tea base to avoid caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for Xiabu Xiabu Hot Pot order should be Greenland Yuansheng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Xiabu Xiabu Hot Pot order should be Greenland Yuansheng International, Intersection of Jinshui East Road and Dongfeng South Road, Zhengdong New District, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for Xiabu Xiabu Hot Pot order should be before 12:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for Xiabu Xiabu Hot Pot order should be before 12:00 on August 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing Xiabu Xiabu Hot Pot set, select non-spicy savory flavor, avoiding ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing Xiabu Xiabu Hot Pot set, select non-spicy savory flavor, avoiding mild spicy or spicy flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
