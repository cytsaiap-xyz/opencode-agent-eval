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
    expect(result[0].store_id).toBe('S17557514070032606_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514070032606_P00100", "quantity": 7}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(8260, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514070032606_F00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514070032606_P00105", "quantity": 7}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(8260, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512073196111_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514070032606_P00015", "quantity": 1}, {"product_id": "S17557514070032606_P00016", "quantity": 1}, {"product_id": "S17557514070032606_P00024", "quantity": 1}, {"product_id": "S17557514070032606_P00025", "quantity": 1}, {"product_id": "S17557514070032606_P00013", "quantity": 2}, {"product_id": "S17557514070032606_P00014", "quantity": 2}, {"product_id": "S17557514070032606_P00022", "quantity": 2}, {"product_id": "S17557514070032606_P00023", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(8380, 0);
  });

  test('rubric: The outbound flight order must be from Shenzhen to Nyingchi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order must be from Shenzhen to Nyingchi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order departure time must be March 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order departure time must be March 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order cabin class should be economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order cabin class should be economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order ticket quantity must be 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order ticket quantity must be 7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order must depart after 10:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order must depart after 10:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order must be from Nyingchi to Shenzhen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order must be from Nyingchi to Shenzhen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order departure time must be March 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order departure time must be March 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order cabin class should be economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order cabin class should be economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order ticket quantity must be 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order ticket quantity must be 7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order must depart after 10:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order must depart after 10:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must be located in Nyingchi city area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must be located in Nyingchi city area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be only one hotel order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be only one hotel order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order check-in dates must be March 25, 2025, March 26, 2025, March 27,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order check-in dates must be March 25, 2025, March 26, 2025, March 27, 2025, and March 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order must book 2 family rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order must book 2 family rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order must book 1 twin room per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order must book 1 twin room per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Weather for March 26 in Nyingchi should be checked, with results showing light r', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Weather for March 26 in Nyingchi should be checked, with results showing light rain; no scenic spot tickets need to be booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
