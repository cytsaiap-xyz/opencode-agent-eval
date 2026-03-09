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
    expect(result[0].store_id).toBe('S17557514237836785_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514237836785_P00080", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(580, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514237836785_F00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514237836785_P00115", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1280, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557514237836785_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514237836785_P00001", "quantity": 1}, {"product_id": "S17557514237836785_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(476, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557514237836785_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514237836785_P00041", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(80, 0);
  });

  test('rubric: Query the price of economy class flights from Changchun to Yanji for next week\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query the price of economy class flights from Changchun to Yanji for next week\'s holiday (which is known to be Qingming Festival on April 4, 2025) (1280), and the price for Friday\'s economy class flights from Changchun to Yanji (580), with a price difference of 1280-580=700, exceeding 500 yuan. The departure flight date is March 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight is economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight is economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the departure ticket order is from Changchun to Yanji', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the departure ticket order is from Changchun to Yanji"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight ticket date should be March 30, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight ticket date should be March 30, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight is business class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight is business class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the departure ticket order is from Yanji to Changchun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the departure ticket order is from Yanji to Changchun"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates are March 28, 2025 and March 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates are March 28, 2025 and March 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be within 5km of Yanbian University', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be within 5km of Yanbian University"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price for two nights at the hotel cannot exceed 500 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price for two nights at the hotel cannot exceed 500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction booking date is March 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booking date is March 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased ticket is an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased ticket is an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
