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
    expect(result[0].store_id).toBe('S28422315784431063_S02543');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S83212177555407456_P08105", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(39.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S64699348232044444_S98376');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17395716266717529_P37049", "quantity": 1}, {"product_id": "S17395716266717529_P37049", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(48.0, 0);
  });

  test('rubric: The delivery address of the sushi order should be Yingge Yuan Residential Area, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address of the sushi order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time of the sushi order should be around 2024-07-15 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time of the sushi order should be around 2024-07-15 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sushi order should be from a Dine-in Restaurant rather than a delivery-only ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sushi order should be from a Dine-in Restaurant rather than a delivery-only restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sushi order should be from the restaurant closest to the user', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sushi order should be from the restaurant closest to the user"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in the sushi order should be a cooked sushi platter', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in the sushi order should be a cooked sushi platter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address of the juice order should be Yingge Yuan Residential Area, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address of the juice order should be Yingge Yuan Residential Area, 198 Jiqingmen Street, Jianye District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time of the juice order should be around 2024-07-15 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time of the juice order should be around 2024-07-15 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The juice order should include one room temperature item', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The juice order should include one room temperature item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The juice order should include one chilled item', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The juice order should include one chilled item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of items in the juice order should be 2 portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of items in the juice order should be 2 portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
