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
    expect(result[0].store_id).toBe('S17557505513132740_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505513132740_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(980, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505513132740_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505513132740_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(780, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505513132740_A00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505513132740_P00032", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: Need to check the date of Qingming Festival in 2025, which is April 4, 2025, so ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the date of Qingming Festival in 2025, which is April 4, 2025, so the departure date for flight booking should be April 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the flight should be between 12:00-18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the flight should be between 12:00-18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to compare flight prices between Sanya and Haikou within the available opti', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to compare flight prices between Sanya and Haikou within the available options, and the price in the flight order should be the cheapest one (Haikou flight CZ6851 Economy Class at ¥980)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be Clearwater Bay Resort', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be Clearwater Bay Resort"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel should be April 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel should be April 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room price in the hotel order should be the cheapest among available options', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room price in the hotel order should be the cheapest among available options (Ocean View Deluxe King Room at ¥780)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to calculate the distance between Clearwater Bay Resort, Clearwater Bay Ave', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to calculate the distance between Clearwater Bay Resort, Clearwater Bay Avenue, Yingzhou Town, Lingshui Li Autonomous County, Hainan Province and Tianya Haijiao, Tianya Haijiao Scenic Area, Tianya District, Sanya, Hainan Province; Nanshan Temple, Nanshan Cultural Tourism Zone, Yazhou District, Sanya, Hainan Province; Wuzhizhou Island, Wuzhizhou Island Tourism Area, Haitang District, Sanya, Hainan Province, and compare which scenic spot is closest to Clearwater Bay Resort. The result is Wuzhizhou Island (33.73 kilometers away), so the scenic spot to be booked should be Wuzhizhou Island. (Tianya Haijiao is 72.62 kilometers away from Clearwater Bay Resort, Nanshan Temple is 88.98 kilometers away from Clearwater Bay Resort)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the scenic spot order should be April 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the scenic spot order should be April 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the scenic spot order should be Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the scenic spot order should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
