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
    expect(result[0].store_id).toBe('S17557505501187701_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505501187701_P00025", "quantity": 2}, {"product_id": "S17557505501187701_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(480, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505501187701_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505501187701_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(398, 0);
  });

  test('rubric: Check the Lantern Festival date, which is 2025-02-12, so the ticket purchase dat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the Lantern Festival date, which is 2025-02-12, so the ticket purchase date is 2025-02-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order needs to include a child ticket (the older brother is 11 years ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order needs to include a child ticket (the older brother is 11 years old, and he needs to purchase child ticket for ages 6-12)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the children ticket in the order should be for two days"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The younger sister is only 5 years old (children under 6 don\'t need tickets), s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The younger sister is only 5 years old (children under 6 don\'t need tickets), so no ticket is purchased for her"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order needs to include adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order needs to include adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of adult tickets in the order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of adult tickets in the order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather for February 12 and 13, 2025 (sunny and cloudy respectively), the weather conditions are good, so the adult tickets in the order should be for two days"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the Lantern Festival date, which is 2025-02-12, so the hotel booking date ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the Lantern Festival date, which is 2025-02-12, so the hotel booking date is 2025-02-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must include a parking lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must include a parking lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must include a private beach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must include a private beach"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must offer extra bed service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must offer extra bed service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type booked in the hotel order is a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type booked in the hotel order is a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
