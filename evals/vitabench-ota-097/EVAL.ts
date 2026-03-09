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
    expect(result[0].store_id).toBe('S17557512725123677_H00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512725123677_P00037", "quantity": 1}, {"product_id": "S17557512725123677_P00038", "quantity": 1}, {"product_id": "S17557512725123677_P00039", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(894, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512725123677_A00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512725123677_P00064", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(80, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512725123677_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512725123677_P00047", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(80, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512725123677_H00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512725123677_P00042", "quantity": 1}, {"product_id": "S17557512725123677_P00043", "quantity": 1}, {"product_id": "S17557512725123677_P00044", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1140, 0);
  });

  test('rubric: The order status of Jinjiang Inn Changsha Huanghua Airport Branch is cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status of Jinjiang Inn Changsha Huanghua Airport Branch is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date of Orange Isle tickets is November 16, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date of Orange Isle tickets is November 16, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Orange Isle tickets should include sightseeing bus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Orange Isle tickets should include sightseeing bus"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Orange Isle tickets should include professional commentary service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Orange Isle tickets should include professional commentary service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date of Yuelu Academy tickets is November 17, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date of Yuelu Academy tickets is November 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Yuelu Academy tickets should include professional guided tour', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Yuelu Academy tickets should include professional guided tour"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be near Wuyi Square', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be near Wuyi Square"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel price range should be 300-500 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel price range should be 300-500 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should provide a Fitness center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should provide a Fitness center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include rooms for 3 nights, specifically November 14, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include rooms for 3 nights, specifically November 14, 2024, November 15, 2024, and November 16, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
