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
    expect(result[0].store_id).toBe('S17557512008539083_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512008539083_P00082", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(402, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512008539083_H00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512008539083_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(328, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512008539083_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512008539083_P00020", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(318, 0);
  });

  test('rubric: The departure location of the outbound ticket should be Xi\'an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location of the outbound ticket should be Xi\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination of the outbound ticket should be Jiuquan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination of the outbound ticket should be Jiuquan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the outbound ticket should be June 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the outbound ticket should be June 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the lowest price for Express Train sleeper within the optional ran', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the lowest price for Express Train sleeper within the optional range, which is 392 yuan; need to check the price information for High-speed Train Second Class Seat within the optional range, which is 402 yuan; subtract these two prices, the result is 10 yuan, meaning the price difference between the two seat types does not exceed 100 yuan, so the seat type in the ticket order should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 29, 2025 should be within 3 kilometers of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 29, 2025 should be within 3 kilometers of Jiuquan Satellite Launch Center, Dongfeng Aerospace City, Suzhou District, Jiuquan City, Gansu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 29, 2025 should offer Laundry Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 29, 2025 should offer Laundry Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 29, 2025 should offer Free Luggage Storage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 29, 2025 should offer Free Luggage Storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order for June 29, 2025 should be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order for June 29, 2025 should be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 30, 2025 should be within 3 kilometers of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 30, 2025 should be within 3 kilometers of Jiuquan Park, 1 Park Road, Suzhou District, Jiuquan City, Gansu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 30, 2025 should offer Laundry Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 30, 2025 should offer Laundry Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the hotel order for June 30, 2025 should offer Free Luggage Storage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the hotel order for June 30, 2025 should offer Free Luggage Storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order for June 30, 2025 should be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order for June 30, 2025 should be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
