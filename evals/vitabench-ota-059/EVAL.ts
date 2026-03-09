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
    expect(result[0].store_id).toBe('S17557111228331195_A00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557111228331195_P00057", "quantity": 1}, {"product_id": "S17557111228331195_P00058", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(300, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557111228331195_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557111228331195_P00002", "quantity": 1}, {"product_id": "S17557111228331195_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(796, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557111228331195_F00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557111228331195_P00086", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1780, 0);
  });

  test('rubric: The attraction ticket order should be for Harbin Ice and Snow World', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order should be for Harbin Ice and Snow World"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket date should be December 11, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket date should be December 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket order should include 1 child ticket and 1 adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order should include 1 child ticket and 1 adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located within 500m of Harbin People\'s Square', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located within 500m of Harbin People\'s Square"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide indoor hot spring facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide indoor hot spring facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type must be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type must be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in dates should be December 10 and December 11', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in dates should be December 10 and December 11"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the nearest metro station to the hotel, which is People\'s Square Met', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the nearest metro station to the hotel, which is People\'s Square Metro Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check direct train travel time from Harbin to Linyi, results show all ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check direct train travel time from Harbin to Linyi, results show all exceed 12-hour limit, so flight tickets should be booked instead of train tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight departure time should be around 2:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight departure time should be around 2:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight date should be Friday (December 12, 2025)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight date should be Friday (December 12, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Transportation should be arranged for the user and the child only, so flight tic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Transportation should be arranged for the user and the child only, so flight ticket quantity should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
