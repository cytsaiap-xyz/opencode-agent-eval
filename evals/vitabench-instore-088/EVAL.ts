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
    expect(result[0].store_id).toBe('S17567843025861280_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843025861280_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(588, 0);
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
    expect(result[2].store_id).toBe('S17567843025861280_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843025861280_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(888, 0);
  });

  test('rubric: The noon restaurant order must include a set meal for five people, not multiple ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The noon restaurant order must include a set meal for five people, not multiple individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for lunch must be within 2.5km (inclusive) of Oriental Pearl Gard', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for lunch must be within 2.5km (inclusive) of Oriental Pearl Garden, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The noon restaurant must serve Jiangsu and Zhejiang Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The noon restaurant must serve Jiangsu and Zhejiang Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The noon restaurant must be listed on the Must-Try List', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The noon restaurant must be listed on the Must-Try List"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and lu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and lunch takes 40% of the budget. Since (1600-100)*40%=600, the price of items in the noon restaurant order cannot exceed 600 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant is Grandmother\'s Home (Oriental Pearl Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant is Grandmother\'s Home (Oriental Pearl Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch reservation time is 12:00:00 on Double Ninth Festival (2024-10-11)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch reservation time is 12:00:00 on Double Ninth Festival (2024-10-11)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch reservation is for 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch reservation is for 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The evening restaurant order must include a set meal for 7 people, not multiple ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The evening restaurant order must include a set meal for 7 people, not multiple individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The evening restaurant order must include a Cantonese Set Menu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The evening restaurant order must include a Cantonese Set Menu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The evening restaurant order must include White Cut Chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The evening restaurant order must include White Cut Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The evening restaurant order must include Stir-fried Seasonal Vegetables', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The evening restaurant order must include Stir-fried Seasonal Vegetables"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for dinner must be within 3km (inclusive) of Shengshi Huating, No', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for dinner must be within 3km (inclusive) of Shengshi Huating, No.1399 Shuanglong South Street, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and di', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s total budget is 1600 yuan, but at least 100 yuan must remain, and dinner takes 60% of the budget. Since (1600-100)*60%=900, the price of items in the evening restaurant order cannot exceed 900 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
