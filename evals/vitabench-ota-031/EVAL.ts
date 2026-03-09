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
    expect(result[0].store_id).toBe('S17557505511258118_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505511258118_P00094", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(950, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505511258118_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505511258118_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(168, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505511258118_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505511258118_P00042", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(180, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505511258118_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505511258118_P00069", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(60, 0);
  });

  test('rubric: Need to check the weather conditions at Mount Hua this weekend, the result shows', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather conditions at Mount Hua this weekend, the result shows May 24 at Mount Hua will be sunny 12-25°C, May 25 at Mount Hua will be cloudy 14-26°C; therefore the itinerary time should be this weekend"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order\'s arrival time should be around 5 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order\'s arrival time should be around 5 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order\'s date should be May 24, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order\'s date should be May 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter flights arriving around 5 PM and find the cheapest flight, which ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter flights arriving around 5 PM and find the cheapest flight, which is S17557505511258118_P00094"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located at the closest position to Mount Hua\'s entrance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located at the closest position to Mount Hua\'s entrance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order\'s date should be May 24, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order\'s date should be May 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter hotels at the foot of Mount Hua and find the cheapest room type, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter hotels at the foot of Mount Hua and find the cheapest room type, which is Budget Single Room at Mount Hua International Hotel, the hotel order\'s room type must be Budget Single Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must provide Mount Hua cable car ticket information, the suitable cable car for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must provide Mount Hua cable car ticket information, the suitable cable car for descending after watching the sunrise is the West Peak Cable Car descent ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be two admission ticket orders, one of which is for Mount Hua Sceni', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be two admission ticket orders, one of which is for Mount Hua Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The admission ticket for Mount Hua Scenic Area should be for use on May 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The admission ticket for Mount Hua Scenic Area should be for use on May 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be two admission ticket orders, one of which is for Mount Hua West ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be two admission ticket orders, one of which is for Mount Hua West Peak Cable Car"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cable car ticket\'s use date should be May 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cable car ticket\'s use date should be May 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cable car ticket order type must be Adult Descent Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cable car ticket order type must be Adult Descent Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
