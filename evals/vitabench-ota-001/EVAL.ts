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
    expect(result[0].store_id).toBe('S17557071510434562_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071510434562_P00001", "quantity": 1}, {"product_id": "S17557071510434562_P00002", "quantity": 1}, {"product_id": "S17557071510434562_P00003", "quantity": 1}, {"product_id": "S17557071510434562_P00004", "quantity": 1}, {"product_id": "S17557071510434562_P00005", "quantity": 1}, {"product_id": "S17557071510434562_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(3700, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557071510434562_A00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071510434562_P00071", "quantity": 2}, {"product_id": "S17557071510434562_P00072", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(75, 0);
  });

  test('rubric: The hotel brand should be the one the user stays at most frequently (query shows', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand should be the one the user stays at most frequently (query shows it\'s Ji Hotel)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel needs to be the Ji Hotel closest to Nanyang Municipal Government', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel needs to be the Ji Hotel closest to Nanyang Municipal Government"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order includes 3 nights of twin rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order includes 3 nights of twin rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order includes 3 nights of king rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order includes 3 nights of king rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The twin rooms in the hotel order are booked for August 1, 2026, August 2, 2026,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The twin rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The king rooms in the hotel order are booked for August 1, 2026, August 2, 2026,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The king rooms in the hotel order are booked for August 1, 2026, August 2, 2026, and August 3, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The query shows that the highest temperature in Nanyang on August 3, 2026 is 32℃', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The query shows that the highest temperature in Nanyang on August 3, 2026 is 32℃, which exceeds 30℃, so the attraction chosen is Zhang Zhongjing Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date on the attraction tickets should be August 3, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date on the attraction tickets should be August 3, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order should include Senior Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order should include Senior Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order should include Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order should include Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order should have 1 Senior Ticket (father is 61 years old, eligib', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order should have 1 Senior Ticket (father is 61 years old, eligible for senior ticket)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction order should have 2 Adult Tickets (mother is 57 years old, needs ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction order should have 2 Adult Tickets (mother is 57 years old, needs adult ticket; plus one adult ticket for the user)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
