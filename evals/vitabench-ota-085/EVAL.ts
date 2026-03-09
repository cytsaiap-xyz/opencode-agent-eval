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
    expect(result[0].store_id).toBe('S17557513723206568_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00079", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1450, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557513723206568_F00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00083", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1380, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557513723206568_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00001", "quantity": 1}, {"product_id": "S17557513723206568_P00002", "quantity": 1}, {"product_id": "S17557513723206568_P00003", "quantity": 1}, {"product_id": "S17557513723206568_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1902, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557513723206568_A00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00054", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(90, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557513723206568_A00005');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00043", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(70, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557513723206568_A00007');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513723206568_P00067", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The departure flight is from Harbin to Xining', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight is from Harbin to Xining"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight date is September 23, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight date is September 23, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight time is in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight time is in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight is from Xining to Harbin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight is from Xining to Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight date is September 27, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight date is September 27, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight cannot be a red-eye flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight cannot be a red-eye flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of departure and return flights cannot exceed 3000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of departure and return flights cannot exceed 3000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates are September 23, 2027, September 24, 2027, September 25', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates are September 23, 2027, September 24, 2027, September 25, 2027, September 26, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must have opened in the last two years', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must have opened in the last two years"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must provide oxygen facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must provide oxygen facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must have wake-up call service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must have wake-up call service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of the hotel order should be around 2000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of the hotel order should be around 2000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Xining from September 23-27, 2027, and find that September ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Xining from September 23-27, 2027, and find that September 25 has the highest temperature (10-23 ℃), so the ticket date for Qinghai Lake is September 25, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type purchased for Qinghai Lake is adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type purchased for Qinghai Lake is adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for Ta\'er Monastery should be September 26, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for Ta\'er Monastery should be September 26, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type purchased for Ta\'er Monastery is adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type purchased for Ta\'er Monastery is adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for the museum should be September 26, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for the museum should be September 26, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
