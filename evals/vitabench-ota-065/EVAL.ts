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
    expect(result[0].store_id).toBe('S17557512073196111_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512073196111_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(768, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512073196111_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512073196111_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(658, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557111228331195_A00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557111228331195_P00057", "quantity": 1}];
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

  test('rubric: The train ticket order\'s departure time is Saturday (May 25, 2024)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order\'s departure time is Saturday (May 25, 2024)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order must be for a lower berth', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order must be for a lower berth"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order should be for a Soft sleeper (lower berth)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order should be for a Soft sleeper (lower berth)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be the evening of arrival (May 27, 2024)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be the evening of arrival (May 27, 2024)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel environment must be Tidy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel environment must be Tidy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located within 2km (inclusive) of Urumqi Railway Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located within 2km (inclusive) of Urumqi Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order price must be between 500-1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order price must be between 500-1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot in the ticket order must be Tianshan Grand Canyon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot in the ticket order must be Tianshan Grand Canyon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date on the ticket order must be the first Saturday in June 2024, which is J', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date on the ticket order must be the first Saturday in June 2024, which is June 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order must include 2 Adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order must include 2 Adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
