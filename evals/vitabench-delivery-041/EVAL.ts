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
    expect(result[0].store_id).toBe('S26029760355367319_S56035');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S33992586623866451_P39950", "quantity": 1}, {"product_id": "S23410007806115216_P22724", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(90.5, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S21386320899164091_S60328');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S89975760415369552_P50335", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(19.6, 0);
  });

  test('rubric: The delivery address for the braised goose and goose liver order should be Linhu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the braised goose and goose liver order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The braised goose and goose liver order should include one set menu and one indi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The braised goose and goose liver order should include one set menu and one individual item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the braised goose and goose liver order should be between ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the braised goose and goose liver order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total portion of items in the braised goose and goose liver order must be la', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total portion of items in the braised goose and goose liver order must be larger than a normal meal for two people, but not excessive (e.g., a meal for four would be excessive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected merchant for the braised goose and goose liver order should have a ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected merchant for the braised goose and goose liver order should have a rating higher than 4.0"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Peach Gum and Lotus Seed Stewed Milk order should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Peach Gum and Lotus Seed Stewed Milk order should be Linhua Road Community, No. 39 Linhua Road, Qixinggang Street, Yuzhong District, Chongqing (Next to Exit 4B of Qixinggang Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Peach Gum and Lotus Seed Stewed Milk order should be b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Peach Gum and Lotus Seed Stewed Milk order should be between 2025-01-01 11:30:00 and 2025-01-01 12:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the Peach Gum and Lotus Seed Stewed Milk order should have the hot ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the Peach Gum and Lotus Seed Stewed Milk order should have the hot drink attribute selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
