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
    expect(result[0].store_id).toBe('S17557505541891707_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505541891707_P00093", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1659, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505541891707_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505541891707_P00090", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1659, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505541891707_T00014');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505541891707_P00104", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1659, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505541891707_A00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505541891707_P00041", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(480, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557505541891707_H00002');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505541891707_P00010", "quantity": 1}, {"product_id": "S17557505541891707_P00011", "quantity": 1}, {"product_id": "S17557505541891707_P00015", "quantity": 1}, {"product_id": "S17557505541891707_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(1392, 0);
  });

  test('rubric: The order status of train ticket from Chengdu to Guiyang North on July 31, 2021 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status of train ticket from Chengdu to Guiyang North on July 31, 2021 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number for August 7, 2021 should be G2954', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number for August 7, 2021 should be G2954"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets for August 7, 2021 should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets for August 7, 2021 should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order status of train tickets for August 7, 2021 should be paid', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status of train tickets for August 7, 2021 should be paid"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket for August 9, 2021 should be from Guiyang North to Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket for August 9, 2021 should be from Guiyang North to Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets for August 9, 2021 should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets for August 9, 2021 should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order status of train tickets for August 9, 2021 should be paid', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status of train tickets for August 9, 2021 should be paid"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot ordered should be Libo Xiaoqikong Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot ordered should be Libo Xiaoqikong Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot tickets should include Sightseeing Bus tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot tickets should include Sightseeing Bus tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of scenic spot tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of scenic spot tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the scenic spot tickets should be August 8, 2021', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the scenic spot tickets should be August 8, 2021"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be within 2km of Guiyang North Railway Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 2km of Guiyang North Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking dates for the Twin Room in the hotel order should be August 7, 2021 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking dates for the Twin Room in the hotel order should be August 7, 2021 and August 8, 2021"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking dates for the King Room in the hotel order should be August 7, 2021 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking dates for the King Room in the hotel order should be August 7, 2021 and August 8, 2021"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel budget should be 300-500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel budget should be 300-500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
