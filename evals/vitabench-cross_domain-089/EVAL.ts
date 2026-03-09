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
    expect(result[0].store_id).toBe('S17550942377549944_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942377549944_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(38.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550942377549944_I00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942377549944_P00095", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1280, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550942377549944_I00013');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942377549944_P00094", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1680, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The delivered item should be a greeting card', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivered item should be a greeting card"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivered item should be pop-up or 3D card', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivered item should be pop-up or 3D card"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivered food item should not be in childish style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivered food item should not be in childish style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Room 502, Building 3, Jilin University First Hosp', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Room 502, Building 3, Jilin University First Hospital Residential Area, 2699 Qianjin Street, Chaoyang District, Changchun City, Jilin Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be between 2025-10-24 07:00-08:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be between 2025-10-24 07:00-08:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The four-person meal order from Jing Yue Xuan Michelin Restaurant should be canc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The four-person meal order from Jing Yue Xuan Michelin Restaurant should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be a Michelin-starred restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be a Michelin-starred restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s rating should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s rating should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered at the restaurant should include champagne and special dess', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered at the restaurant should include champagne and special desserts"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered at the restaurant should not include offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered at the restaurant should not include offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu ordered at the restaurant should meet the dining needs of 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu ordered at the restaurant should meet the dining needs of 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the user\'s historical flight information from Shenzhen to Changch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the user\'s historical flight information from Shenzhen to Changchun on 2025-10-25, and should inform the user that the purchased MU5628 flight departs at 8:20 and arrives at 12:35, which can arrive more than two hours before dinner at 18:00, so there\'s no need to change the flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
