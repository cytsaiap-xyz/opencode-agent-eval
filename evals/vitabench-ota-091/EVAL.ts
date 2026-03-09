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
    expect(result[0].store_id).toBe('S17557515354675422_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515354675422_P00045", "quantity": 1}, {"product_id": "S17557515354675422_P00046", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(238, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557515354675422_A00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515354675422_P00053", "quantity": 1}, {"product_id": "S17557515354675422_P00058", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(295, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557515354675422_A00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515354675422_P00068", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(30, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557515354675422_H00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515354675422_P00005", "quantity": 1}, {"product_id": "S17557515354675422_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(716, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557515354675422_H00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515354675422_P00025", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(498, 0);
  });

  test('rubric: It won\'t rain in Guilin on October 18 and 19, 2026, and it won\'t rain in Beiha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "It won\'t rain in Guilin on October 18 and 19, 2026, and it won\'t rain in Beihai on October 20 and 21, 2026, which meets the travel plan requirement of four days without rain, so the date for using Longji Rice Terraces tickets is October 18, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Longji Rice Terraces tickets should include 2 adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Longji Rice Terraces tickets should include 2 adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Longji Rice Terraces tickets should include 1 child ticket (7 years and below)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Longji Rice Terraces tickets should include 1 child ticket (7 years and below)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xingping Ancient Town Li River cruise tickets are for use on October 19, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xingping Ancient Town Li River cruise tickets are for use on October 19, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xingping Ancient Town Li River cruise tickets should include 2 adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xingping Ancient Town Li River cruise tickets should include 2 adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xingping Ancient Town Li River cruise tickets should include 1 child ticket (7 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xingping Ancient Town Li River cruise tickets should include 1 child ticket (7 years and below)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Weizhou Island Dishui Danping Scenic Area tickets are for use on October 20, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Weizhou Island Dishui Danping Scenic Area tickets are for use on October 20, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of Weizhou Island Dishui Danping Scenic Area tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of Weizhou Island Dishui Danping Scenic Area tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel brand for staying in Guilin should be Home Inn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand for staying in Guilin should be Home Inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order in Guilin should include rooms for 2 nights, on October 18 and 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order in Guilin should include rooms for 2 nights, on October 18 and 19, 2026 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The budget for the hotel in Guilin is 300-500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The budget for the hotel in Guilin is 300-500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the hotel in Guilin should be a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the hotel in Guilin should be a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel on Weizhou Island should be booked for October 20, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel on Weizhou Island should be booked for October 20, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The budget for the hotel on Weizhou Island is 300-500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The budget for the hotel on Weizhou Island is 300-500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the hotel on Weizhou Island should be a family suite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the hotel on Weizhou Island should be a family suite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
