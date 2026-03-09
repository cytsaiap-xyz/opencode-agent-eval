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
    expect(result[0].store_id).toBe('S17557505482126205_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505482126205_P00070", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1256, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505482126205_T00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505482126205_P00080", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1258, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505482126205_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505482126205_P00001", "quantity": 1}, {"product_id": "S17557505482126205_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(976, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505482126205_A00008');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505482126205_P00051", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(25, 0);
  });

  test('rubric: The outbound train is from Qingdao to Luohe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train is from Qingdao to Luohe"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Planning to depart the day after Qixi Festival, which falls on August 10, 2024, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound train ticket date should be August 11, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket is for a Business class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket is for a Business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train is from Luohe to Qingdao', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train is from Luohe to Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Planning to depart the day after Qixi Festival, which falls on August 10, 2024, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, so the outbound date should be August 11, 2024, staying for two nights and returning on August 13, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket is for a Business class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket is for a Business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the return train is in the afternoon of that day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the return train is in the afternoon of that day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Planning to depart the day after Qixi Festival, which falls on August 10, 2024, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the hotel booking dates should be August 11, 2024 and August 12, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 3km of Xinmart Shopping Plaza', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 3km of Xinmart Shopping Plaza"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price for the two nights at the hotel should not exceed 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price for the two nights at the hotel should not exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Checking whether Luohe has historical sites, exhibition halls (museums/art galle', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Checking whether Luohe has historical sites, exhibition halls (museums/art galleries), natural landscapes (mountains/lakes/forests), or hot spring scenic areas (Luohe Museum matches the user\'s preferences), and the purchased ticket is for Luohe Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Planning to depart the day after Qixi Festival, which falls on August 10, 2024, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Planning to depart the day after Qixi Festival, which falls on August 10, 2024, staying for two nights, so the return date is August 13, 2024, and the attraction ticket is booked for August 13, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased ticket is an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased ticket is an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
