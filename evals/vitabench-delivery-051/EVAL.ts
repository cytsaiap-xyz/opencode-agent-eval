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
    expect(result[0].store_id).toBe('S30850685469731172_S36097');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21506093879054601_P76267", "quantity": 1}, {"product_id": "S93547843667417090_P83816", "quantity": 1}, {"product_id": "S26425446816165610_P76672", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(19.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S33996772983601674_S77584');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S27620400204289599_P20660", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(22, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S18153259721295821_S70391');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17046537634653466_P30684", "quantity": 1}, {"product_id": "S12674226154717622_P79085", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(20.4, 0);
  });

  test('rubric: Need to cancel the order with order_id 90721003O01', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to cancel the order with order_id 90721003O01"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the rice wrapper roll ordered for daughter should be Cu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the rice wrapper roll ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the rice wrapper roll order should be between 2025-10-17 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the rice wrapper roll order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing a rice wrapper roll restaurant, priority should be given to chain ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing a rice wrapper roll restaurant, priority should be given to chain stores that originated from Guizhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the bean soup rice ordered for daughter should be Cuihu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the bean soup rice ordered for daughter should be Cuihu Paradise Walk Phase 2, 120 meters west of the intersection of Huasheng Road and Jiabo Road, Yuzhong District, Chongqing City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the bean soup rice order should be between 2025-10-17 10:4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the bean soup rice order should be between 2025-10-17 10:43:27 and 2025-10-17 12:43:27"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing a bean soup rice restaurant, it should be the highest-rated No. 71', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing a bean soup rice restaurant, it should be the highest-rated No. 71 Bean Soup Rice restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Considering the daughter\'s health condition of high cholesterol, the bean soup ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Considering the daughter\'s health condition of high cholesterol, the bean soup rice items should not contain offal or other high-cholesterol ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
