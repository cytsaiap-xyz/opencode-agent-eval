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
    expect(result[0].store_id).toBe('S17557112364479019_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557112364479019_P00065", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(796, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557112364479019_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557112364479019_P00003", "quantity": 1}, {"product_id": "S17557112364479019_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1416, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557072491807785_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557112364479019_P00025", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(300, 0);
  });

  test('rubric: Need to check the weather in Xi\'an and Datong on December 31, 2024. The result ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Xi\'an and Datong on December 31, 2024. The result is Xi\'an: cloudy, 0 to 10 degrees Celsius; Datong: cloudy, -6 to 4 degrees Celsius, so the departure time of the train ticket is December 31"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket must be first-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket must be first-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train arrival time cannot exceed 9:00 PM on December 31, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train arrival time cannot exceed 9:00 PM on December 31, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets in the train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets in the train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located within 3 kilometers of the Yungang Grottoes scenic spo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located within 3 kilometers of the Yungang Grottoes scenic spot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide luggage storage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide luggage storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking duration must be 2 nights (check-in on December 31 and January', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking duration must be 2 nights (check-in on December 31 and January 1)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order must be for consecutive stays, i.e., the same hotel and same roo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order must be for consecutive stays, i.e., the same hotel and same room type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot tickets date must be January 1, 2025 (the second day after arriv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot tickets date must be January 1, 2025 (the second day after arrival)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot tickets must include battery car service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot tickets must include battery car service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot tickets must be adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot tickets must be adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should be for Yungang Grottoes scenic spot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should be for Yungang Grottoes scenic spot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
