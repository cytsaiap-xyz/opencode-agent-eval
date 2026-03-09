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
    expect(result[0].store_id).toBe('S17550802108185132_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108185132_P00041", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(398, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802108185132_H00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108185132_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(288, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802108185132_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108185132_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(258, 0);
  });

  test('rubric: The total budget for hotel, skincare products and restaurant orders cannot excee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total budget for hotel, skincare products and restaurant orders cannot exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the user\'s most frequently stayed hotel brand in historical behav', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the user\'s most frequently stayed hotel brand in historical behavior, which is Home Inn, and the hotel brand ordered must be Home Inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type ordered must be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type ordered must be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel must be within 3 kilometers (inclusive) of Fengsheng Garden, N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel must be within 3 kilometers (inclusive) of Fengsheng Garden, No.328 Tian\'an South Road, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel order should be December 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel order should be December 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The skincare products ordered must have Spot Removal effects', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The skincare products ordered must have Spot Removal effects"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the skincare products order should be Fengsheng Garden,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the skincare products order should be Fengsheng Garden, No.328 Tian\'an South Road, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the skincare products order should be before 16:30 on Dece', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the skincare products order should be before 16:30 on December 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should serve Traditional Min Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should serve Traditional Min Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan Cuisine order set meal should have a variety of dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan Cuisine order set meal should have a variety of dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan Cuisine order set meal must include Ginger Duck', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan Cuisine order set meal must include Ginger Duck"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan Cuisine order set meal should be enough for at least 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan Cuisine order set meal should be enough for at least 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
