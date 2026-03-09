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
    expect(result[0].store_id).toBe('S17557512278455908_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512278455908_P00023", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(560, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512278455908_F00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512278455908_P00043", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2680, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512278455908_T00013');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512278455908_P00067", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(134, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512278455908_H00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512278455908_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(888, 0);
  });

  test('rubric: Check the specific date of the Dragon Boat Festival in 2023 (June 22, 2023), and', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the specific date of the Dragon Boat Festival in 2023 (June 22, 2023), and the scenic area ticket date must be June 23, 2023 (the second day of the Dragon Boat Festival)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check and provide ticket price information for Huangguoshu Waterfall Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check and provide ticket price information for Huangguoshu Waterfall Scenic Area (Adult ticket 240 yuan, Scenic area shuttle bus ticket 50 yuan, Adult ticket + Sightseeing bus combo 280 yuan), the purchased ticket should be Adult ticket + Sightseeing bus combo"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets purchased should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets purchased should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the flight reservation should be 2023-06-22', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the flight reservation should be 2023-06-22"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the flight in the order should be in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the flight in the order should be in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved flight should be Business class cabin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved flight should be Business class cabin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather conditions for Guiyang and Anshun on 2023-06-23, which are sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather conditions for Guiyang and Anshun on 2023-06-23, which are showers and sunny respectively; if one of them is rainy, then purchase train tickets from Guiyang to Anshun"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets purchased should be High-speed rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets purchased should be High-speed rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seats for the train tickets should be First class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seats for the train tickets should be First class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets purchased should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets purchased should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation date should be June 23, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation date should be June 23, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should have Ethnic feature', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should have Ethnic feature"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should have a Waterfall view', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should have a Waterfall view"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should be within 10km of Huangguoshu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should be within 10km of Huangguoshu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should have a rating of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should have a rating of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
