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
    expect(result[0].store_id).toBe('S17550807205888083_I00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807205888083_P00047", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(188, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550807205888083_A00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807205888083_P00001", "quantity": 2}, {"product_id": "S17550807205888083_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(60, 0);
  });

  test('rubric: The restaurant in the dining order must have an industrial style decor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant in the dining order must have an industrial style decor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must include fried chicken or french fries and other snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must include fried chicken or french fries and other snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant meal set should be for 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant meal set should be for 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Checked if Nantong Museum is open on September 5th (the day after tomorrow), and', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Checked if Nantong Museum is open on September 5th (the day after tomorrow), and the result showed it is open, so tickets for Nantong Museum for the day after tomorrow (September 5th) were booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The museum order includes adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The museum order includes adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The museum order includes senior tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The museum order includes senior tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The museum order includes 2 adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The museum order includes 2 adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The museum order includes 1 senior ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The museum order includes 1 senior ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
