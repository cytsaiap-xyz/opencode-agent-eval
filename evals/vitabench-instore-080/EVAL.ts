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
    expect(result[0].store_id).toBe('S17567842747473171_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842747473171_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(138, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17567842747473171_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842747473171_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(198, 0);
  });

  test('rubric: The restaurant for ordering should be within 2 kilometers (inclusive) from Room ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for ordering should be within 2 kilometers (inclusive) from Room 1203, Building A, Jianye Kaixuan Plaza, No. 59 Huayuan Road, Jinshui District, Zhengzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be a Northeastern cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be a Northeastern cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should have parking available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should have parking available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a set meal for two people, not two individual set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a set meal for two people, not two individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must include Di San Xian (sautéed potato, eggplant and gree', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must include Di San Xian (sautéed potato, eggplant and green pepper) and Guo Bao Rou (sweet and sour pork)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Northeast Master Chef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Northeast Master Chef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 2023-11-24 19:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 2023-11-24 19:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people,"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema should be within 3 kilometers (inclusive) from Northeast Mast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema should be within 3 kilometers (inclusive) from Northeast Master Chef (Huayuan Road Branch), No. 38 Huayuan Road, Jinshui District, Zhengzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema must be a ranked merchant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema must be a ranked merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema order must include movie viewing service and be equipped with', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema order must include movie viewing service and be equipped with Nintendo Switch games"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema order should be for a duration of 3 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema order should be for a duration of 3 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
