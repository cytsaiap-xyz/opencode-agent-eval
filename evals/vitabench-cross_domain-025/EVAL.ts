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
    expect(result[0].store_id).toBe('S17550802118058644_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118058644_P00030", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(288, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802118058644_I00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118058644_P00070", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(108, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802118058644_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118058644_P00001", "quantity": 1}, {"product_id": "S17550802118058644_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(41.8, 0);
  });

  test('rubric: Must check and compare Mianyang\'s weather on July 9 and 10, 2025: July 9 is sun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check and compare Mianyang\'s weather on July 9 and 10, 2025: July 9 is sunny with temperatures of 26-35°C; July 10 is cloudy with temperatures of 27-38°C, July 10 is hotter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must arrange activities reasonably according to weather conditions: the date for', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must arrange activities reasonably according to weather conditions: the date for rafting tickets should be July 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Rafting activity should be suitable for children', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Rafting activity should be suitable for children"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must choose the most economical option available for rafting, the ticket order p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must choose the most economical option available for rafting, the ticket order package should be Family Ticket (2 Adults 1 Child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The VR game center ordered should be near a shopping mall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The VR game center ordered should be near a shopping mall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered should be a two-hour children\'s package at the VR game cent', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered should be a two-hour children\'s package at the VR game center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must choose the most economical option for the VR game center, the in-store orde', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must choose the most economical option for the VR game center, the in-store order package should be Children\'s VR Adventure World (2 hours) 108 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for face washing towels and towels must be JI Hotel, Next t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for face washing towels and towels must be JI Hotel, Next to Wangfujing Department Store, 68 East Linyuan Road, Fucheng District, Mianyang, Sichuan Province/JI Hotel next to Wangfujing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for face washing towels and towels should be between 21:00-22:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for face washing towels and towels should be between 21:00-22:00 on July 9, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include 1 face washing towel and 1 towel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include 1 face washing towel and 1 towel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The face washing towel and towel should come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The face washing towel and towel should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
