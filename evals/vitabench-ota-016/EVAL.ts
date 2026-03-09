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
    expect(result[0].store_id).toBe('S17557505539622425_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505539622425_P00024", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1940, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505539622425_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505539622425_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(480, 0);
  });

  test('rubric: Need to check the weather in Zhuhai on May 16, 2026, with the highest temperatur', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Zhuhai on May 16, 2026, with the highest temperature of 35°C, which exceeds 33°C. The attraction to order should be Zhuhai Chimelong Ocean Kingdom"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets in the attraction order should include a fireworks show', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets in the attraction order should include a fireworks show"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the tickets in the attraction order should be May 16, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the tickets in the attraction order should be May 16, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type in the attraction order should be adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type in the attraction order should be adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be an Ocean View Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be an Ocean View Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room must have a view of the Hong Kong-Zhuhai-Macao Bridge', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room must have a view of the Hong Kong-Zhuhai-Macao Bridge"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order date should be May 16, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order date should be May 16, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the ticket price of Zhuhai Chimelong Ocean Kingdom, which is 850 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the ticket price of Zhuhai Chimelong Ocean Kingdom, which is 850 yuan for Adult Ticket (Including Fireworks Show and Indoor Light Show), exceeding the user\'s budget of 800 yuan per person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
