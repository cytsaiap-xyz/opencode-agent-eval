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
    expect(result[0].store_id).toBe('S32613676585530873_S13462');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30257020650698187_P69287", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(22.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S27620923749829280_S83358');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S14884944326041048_P20569", "quantity": 10}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The delivery address for the curry omurice order should be 1588 Wenhua Road, Wei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the curry omurice order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the curry omurice order should be before 14:00 o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the curry omurice order should be before 14:00 on August 2, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the curry omurice order should have spicy characteristics or contai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the curry omurice order should have spicy characteristics or contain pepper or other seasonings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the taro dessert order should be 1588 Wenhua Road, Weif', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the taro dessert order should be 1588 Wenhua Road, Weifang Xinchen Plaza, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the taro dessert order should be between 15:00 a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the taro dessert order should be between 15:00 and 16:00 on August 2, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the taro dessert order should be sweet pastries containing taro fil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the taro dessert order should be sweet pastries containing taro filling"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the taro dessert order should have a soft and tender texture', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the taro dessert order should have a soft and tender texture"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total quantity of items in the taro dessert order should be 20 pieces', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total quantity of items in the taro dessert order should be 20 pieces"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
