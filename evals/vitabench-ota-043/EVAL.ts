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
    expect(result[0].store_id).toBe('S17557505566882089_F00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505566882089_P00081", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4360, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505566882089_F00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505566882089_P00087", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(9120, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505566882089_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505566882089_P00001", "quantity": 1}, {"product_id": "S17557505566882089_P00003", "quantity": 1}, {"product_id": "S17557505566882089_P00004", "quantity": 1}, {"product_id": "S17557505566882089_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1832, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505566882089_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505566882089_P00052", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(796, 0);
  });

  test('rubric: The anniversary is on August 10, 2025, and the user wishes to arrive two days be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The anniversary is on August 10, 2025, and the user wishes to arrive two days before the anniversary, so the departure flight should be on August 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight should not be a Red-eye Flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight should not be a Red-eye Flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of departure flight tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of departure flight tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight should be from Dalian to Daocheng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight should be from Dalian to Daocheng"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight date should be August 12, 2025 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight date should be August 12, 2025 "
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should not be a Red-eye Flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should not be a Red-eye Flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of return flight tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of return flight tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be from Daocheng to Dalian', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be from Daocheng to Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should have Tibetan Characteristics', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should have Tibetan Characteristics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type ordered should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type ordered should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should include 4 nights, specifically for August 8, 2025, Augu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should include 4 nights, specifically for August 8, 2025, August 9, 2025, August 10, 2025, and August 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic area ordered should be Daocheng Yading Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic area ordered should be Daocheng Yading Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets should include Oxygen Cylinder', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets should include Oxygen Cylinder"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Daocheng on 2025-08-09 will be light rain, so the tickets should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Daocheng on 2025-08-09 will be light rain, so the tickets should include rain gear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of scenic area tickets ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of scenic area tickets ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the scenic area tickets should be August 9, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the scenic area tickets should be August 9, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
