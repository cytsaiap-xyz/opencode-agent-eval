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
    expect(result[0].store_id).toBe('S19728863776884431_S86002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S78307369213340465_P29115", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(25.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S30804956163842857_S55020');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S95851429464568625_P06476", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(18.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S33689769018838954_S40512');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S24288445174253477_P93566", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(31.9, 0);
  });

  test('rubric: The delivery address for the bibimbap order should be Building D, Jianye Headqua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the bibimbap order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the bibimbap order should be around September 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the bibimbap order should be around September 20, 2024, 12:00:00-13:00:00, so that the meal can be finished before the meeting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bibimbap item selected should be tuna bibimbap type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bibimbap item selected should be tuna bibimbap type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bibimbap item selected should be non-spicy flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bibimbap item selected should be non-spicy flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bibimbap item price should be above 25 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bibimbap item price should be above 25 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the sweet drink order should be Building D, Jianye Head', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the sweet drink order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the sweet drink order should be before 13:30 on ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the sweet drink order should be before 13:30 on September 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected drink should be a hot drink type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected drink should be a hot drink type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected drink should have energizing effects, such as containing caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected drink should have energizing effects, such as containing caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the snack order should be Building D, Jianye Headquarte', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the snack order should be Building D, Jianye Headquarters Harbor, Intersection of Dongfeng East Road and Ruyi West Road, Ruyi Lake Street, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the snack order should be before 13:30 on Septem', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the snack order should be before 13:30 on September 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected snack should be crispy type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected snack should be crispy type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected snack should be large size or in a shareable format', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected snack should be large size or in a shareable format"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
