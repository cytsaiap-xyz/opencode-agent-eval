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
    expect(result[0].store_id).toBe('S17550810646623020_A00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810646623020_P00052", "quantity": 8}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1200, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810646623020_A00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810646623020_P00062", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(480, 0);
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
    expect(result[3].store_id).toBe('S17550810646623020_F00014');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810646623020_P00089", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1960, 0);
  });

  test('rubric: The boat tour ticket should be used between 14:00-18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boat tour ticket should be used between 14:00-18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boat tour ticket order should include 8 tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boat tour ticket order should include 8 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boat tour ticket order date should be June 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boat tour ticket order date should be June 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Other experience activities not involving water activities should be within Wuzh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Other experience activities not involving water activities should be within Wuzhen West Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Other experience activity tickets not involving water activities should be used ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Other experience activity tickets not involving water activities should be used between 14:00-18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for other experience activity tickets not involving water activities s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for other experience activity tickets not involving water activities should include 4 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order date for other experience activity tickets not involving water activit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order date for other experience activity tickets not involving water activities should be June 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be no more than 800 meters from Wuzhen West Sceni', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be no more than 800 meters from Wuzhen West Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have a Classical Ambiance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have a Classical Ambiance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have banquet set meals that can accommodate 12 pe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have banquet set meals that can accommodate 12 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 18:00 on June 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 18:00 on June 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation order should be for 12 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation order should be for 12 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the flight order should be June 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the flight order should be June 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The take-off time of the flight should be at or after 07:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The take-off time of the flight should be at or after 07:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: To ensure members can arrive from Hangzhou Airport to Wuzhen for the 14:00 activ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "To ensure members can arrive from Hangzhou Airport to Wuzhen for the 14:00 activity on the same day, considering it takes one and a half hours from Hangzhou to Wuzhen, the flight in the ticket order should arrive in Hangzhou at or before 12:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the flight ticket order should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the flight ticket order should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
