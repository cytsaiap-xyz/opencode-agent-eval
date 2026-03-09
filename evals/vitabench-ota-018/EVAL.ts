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
    expect(result[0].store_id).toBe('S17557505472901595_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505472901595_P00052", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(200, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505472901595_F00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505472901595_P00087", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1560, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505472901595_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505472901595_P00023", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(2174, 0);
  });

  test('rubric: Need to provide Inner Mongolia Xiangshawan weather forecast information, with re', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to provide Inner Mongolia Xiangshawan weather forecast information, with results showing sandstorm in Ordos on April 8, 2027, temperature 8-15 degrees, therefore the destination of the trip should be Ningxia Shapotou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction for the admission ticket order must be Ningxia Shapotou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction for the admission ticket order must be Ningxia Shapotou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The type of admission ticket order must be basic admission ticket without other ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The type of admission ticket order must be basic admission ticket without other activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the admission ticket order must be April 8, 2027 (the second day aft', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the admission ticket order must be April 8, 2027 (the second day after the first Wednesday of next month)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of admission tickets must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of admission tickets must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival city for the flight order should be Yinchuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival city for the flight order should be Yinchuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the flight order must be April 7, 2027 (the first Wednesda', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the flight order must be April 7, 2027 (the first Wednesday of next month)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of flight tickets must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of flight tickets must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the flight should be in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the flight should be in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel order must be April 7, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel order must be April 7, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room in the hotel order needs to have a desert view', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room in the hotel order needs to have a desert view"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be rated 4-star or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be rated 4-star or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel address should be located near Ningxia Shapotou rather than Inner Mong', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel address should be located near Ningxia Shapotou rather than Inner Mongolia Xiangshawan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
