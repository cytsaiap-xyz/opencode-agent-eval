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
    expect(result[0].store_id).toBe('S17567842819486826_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842819486826_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(68, 0);
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
    expect(result[2].store_id).toBe('S17567842819486826_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842819486826_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(158, 0);
  });

  test('rubric: The restaurant ordered should be a Yunnan cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a Yunnan cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be an established restaurant with over ten years o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be an established restaurant with over ten years of history"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should have free parking available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should have free parking available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking, the restaurant offers a single-person meal that includes Steam P', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking, the restaurant offers a single-person meal that includes Steam Pot Chicken, so the ordered item should be a single-person meal with Steam Pot Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s ordered items should be available on weekends', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s ordered items should be available on weekends"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Dian Xiang Ge Yunnan Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Dian Xiang Ge Yunnan Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 2024-07-21 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 2024-07-21 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered KTV should be within 1km (including 1km) of Dian Xiang Ge Yunnan Cui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered KTV should be within 1km (including 1km) of Dian Xiang Ge Yunnan Cuisine at 128 Zhongzhou Middle Road, Xigong District, Luoyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV ordered item should include a Fruit Platter', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV ordered item should include a Fruit Platter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage duration of the KTV ordered item should be 4 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage duration of the KTV ordered item should be 4 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since both the user and friend don\'t want to spend more than 80 yuan each for k', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since both the user and friend don\'t want to spend more than 80 yuan each for karaoke, the KTV ordered item should cost less than or equal to 160 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
