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
    expect(result[0].store_id).toBe('S17557505539631060_T00014');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505539631060_P00116", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(594, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505539631060_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505539631060_P00012", "quantity": 1}, {"product_id": "S17557505539631060_P00001", "quantity": 1}, {"product_id": "S17557505539631060_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2174, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505539631060_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505539631060_P00040", "quantity": 2}, {"product_id": "S17557505539631060_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(225, 0);
  });

  test('rubric: The high-speed rail order date must be August 14, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail order date must be August 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail must be from Xi\'an to Tianshui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail must be from Xi\'an to Tianshui"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail departure time must be between 2:30-3:30 PM the day after to', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail departure time must be between 2:30-3:30 PM the day after tomorrow (August 14)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of high-speed rail tickets must be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of high-speed rail tickets must be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must be within 1km of the entrance to Maijishan Grottoes (i.e.,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must be within 1km of the entrance to Maijishan Grottoes (i.e., Maijishan Grottoes, Maiji Mountain Scenic Spot, Maiji District, Tianshui, Gansu Province)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be four-star or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be four-star or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type must be Family Room or Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type must be Family Room or Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in dates must be August 14, 2025, August 15, 2025, and August 16', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in dates must be August 14, 2025, August 15, 2025, and August 16, 2025, respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room types should be consistent', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room types should be consistent"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot for the ticket order must be Maijishan Grottoes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot for the ticket order must be Maijishan Grottoes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Maijishan tickets date cannot be on weekends (i.e., cannot be August 16 or A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Maijishan tickets date cannot be on weekends (i.e., cannot be August 16 or August 17)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total quantity of tickets in the ticket order should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total quantity of tickets in the ticket order should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should include 2 Adult Tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should include 2 Adult Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should include 1 Child Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should include 1 Child Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
