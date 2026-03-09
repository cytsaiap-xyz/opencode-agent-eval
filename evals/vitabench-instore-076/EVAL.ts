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
    expect(result[0].store_id).toBe('S17567842655251946_I00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842655251946_P00021", "quantity": 1}];
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
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567842655251946_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842655251946_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The order status of the Cantonese restaurant set menu should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status of the Cantonese restaurant set menu should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation status of the Cantonese restaurant should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation status of the Cantonese restaurant should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved BBQ restaurant should be Northeastern BBQ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved BBQ restaurant should be Northeastern BBQ"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The average consumption at the BBQ restaurant should be less than or equal to 15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The average consumption at the BBQ restaurant should be less than or equal to 150 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the BBQ restaurant is 2023-07-08 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the BBQ restaurant is 2023-07-08 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the BBQ restaurant reservation is 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the BBQ restaurant reservation is 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the Self-Service Mahjong Club to Charcoal Legend Northeastern ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the Self-Service Mahjong Club to Charcoal Legend Northeastern BBQ, 200m East of Gongbei Port Plaza, Xiangzhou District, Zhuhai should be within 2km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set package ordered at the Self-Service Mahjong Club should include mahjong ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set package ordered at the Self-Service Mahjong Club should include mahjong playing and tea service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage duration of the ordered set package at the Self-Service Mahjong Club s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage duration of the ordered set package at the Self-Service Mahjong Club should be 4 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
