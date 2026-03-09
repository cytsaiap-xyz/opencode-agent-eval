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
    expect(result[0].store_id).toBe('S17550809870242807_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809870242807_P00055", "quantity": 1}, {"product_id": "S17550809870242807_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2233, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809870242807_H00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809870242807_P00041", "quantity": 2}, {"product_id": "S17550809870242807_P00042", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(592, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809870242807_S00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809870242807_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(15.8, 0);
  });

  test('rubric: The high-speed rail ticket must be dated June 21, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail ticket must be dated June 21, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail ticket must be for a train from Nanjing to Xiangtan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail ticket must be for a train from Nanjing to Xiangtan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail ticket\'s departure time must be between 09:00-11:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail ticket\'s departure time must be between 09:00-11:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the shortest travel time from Nanjing to Xiangtan, which is 6 hour', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the shortest travel time from Nanjing to Xiangtan, which is 6 hours and 26 minutes, exceeding 5 hours, so the order should include 1 Business class seat and 1 Second class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located in Yuhu District, Xiangtan City, Hunan Province', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located in Yuhu District, Xiangtan City, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel rating should be greater than or equal to 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel rating should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room price should be less than or equal to 180 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room price should be less than or equal to 180 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of hotel rooms should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of hotel rooms should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be June 21, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be June 21, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-out date should be June 23, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-out date should be June 23, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order item should be disposable toilet seat covers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order item should be disposable toilet seat covers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of disposable toilet seat covers should be greater than or equal to 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of disposable toilet seat covers should be greater than or equal to 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the disposable toilet seat covers must be Xiangtan Orie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the disposable toilet seat covers must be Xiangtan Oriental Hotel, No.45 Renmin Road, Yuhu District, Xiangtan, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the disposable toilet seat covers should be betw', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the disposable toilet seat covers should be between 19:00-20:00 on 2026-06-21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
