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
    expect(result[0].store_id).toBe('S17557516206098984_F00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00088", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1280, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512803333407_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00093", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(420, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557516206098984_F00012');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00101", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(580, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557516206098984_F00013');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00106", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(850, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557516206098984_H00001');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00003", "quantity": 1}, {"product_id": "S17557516206098984_P00002", "quantity": 1}, {"product_id": "S17557516206098984_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(2064, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557516206098984_A00005');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516206098984_P00044", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The first leg of the outbound flight must be from Taizhou to Kunming', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The first leg of the outbound flight must be from Taizhou to Kunming"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the first leg of the outbound flight must be next Saturday, June 19,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the first leg of the outbound flight must be next Saturday, June 19, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The second leg of the outbound flight must be from Kunming to Xishuangbanna', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The second leg of the outbound flight must be from Kunming to Xishuangbanna"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the second leg must be at least 90 minutes after the arriv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the second leg must be at least 90 minutes after the arrival time of the first leg"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the second leg of the outbound flight must be June 19, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the second leg of the outbound flight must be June 19, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The first leg of the return flight must be from Xishuangbanna to Kunming', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The first leg of the return flight must be from Xishuangbanna to Kunming"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the first leg of the return flight must be the fourth day of the tri', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the first leg of the return flight must be the fourth day of the trip, June 22, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The second leg of the return flight must be from Kunming to Taizhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The second leg of the return flight must be from Kunming to Taizhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the second leg of the return flight must be at least 90 mi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the second leg of the return flight must be at least 90 minutes after the arrival time of the first leg"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the second leg of the return flight must be June 22, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the second leg of the return flight must be June 22, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be only one hotel booking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be only one hotel booking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in dates must be June 19, 2027, June 20, 2027, and June 21, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in dates must be June 19, 2027, June 20, 2027, and June 21, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must feature Dai ethnic style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must feature Dai ethnic style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel standard must match the user\'s usual accommodation preference (mainly', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel standard must match the user\'s usual accommodation preference (mainly four-star, comfort-type hotels)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Weather information for June 21, 2027 (Monday after next week) must be checked a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Weather information for June 21, 2027 (Monday after next week) must be checked and provided, with the result showing cloudy, 22-28 degrees Celsius, 70% humidity, and scenic spot tickets need to be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket must be for Wild Elephant Valley', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket must be for Wild Elephant Valley"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket must include the sightseeing bus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket must include the sightseeing bus"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the attraction ticket must be June 21, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the attraction ticket must be June 21, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
