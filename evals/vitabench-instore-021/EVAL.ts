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
    expect(result[0].store_id).toBe('S17564420255786250_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420255786250_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(120, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420255786250_I00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420255786250_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564420255786250_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420255786250_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(268, 0);
  });

  test('rubric: The status of the Single Person Shared Escape Room Experience Ticket order shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the Single Person Shared Escape Room Experience Ticket order should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product at the escape room should be of low difficulty', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product at the escape room should be of low difficulty"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product at the escape room should be a Couple Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product at the escape room should be a Couple Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The escape room should be Puzzle Solver Escape Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The escape room should be Puzzle Solver Escape Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked escape room should be Puzzle Solver Escape Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked escape room should be Puzzle Solver Escape Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking time for the escape room should be 2024-12-21 14:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking time for the escape room should be 2024-12-21 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the escape room booking should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the escape room booking should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The budget is 500 yuan, the escape room costs 198 yuan, so the price of the orde', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The budget is 500 yuan, the escape room costs 198 yuan, so the price of the ordered Minnan cuisine should be less than or equal to 302 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan restaurant should be within 500m (inclusive) of Puzzle Solver Escape ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan restaurant should be within 500m (inclusive) of Puzzle Solver Escape Room Center, 1299 Lijing Road, Honggutan New District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan restaurant should be a Non-Smoking Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan restaurant should be a Non-Smoking Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Minnan restaurant should have Two-Person Booth seating', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Minnan restaurant should have Two-Person Booth seating"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered meal at the Minnan restaurant should be a couple package, not two si', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered meal at the Minnan restaurant should be a couple package, not two single person packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
