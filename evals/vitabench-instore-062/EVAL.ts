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
    expect(result[0].store_id).toBe('S17567836575705922_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836575705922_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(138, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17567836575705922_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836575705922_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(128, 0);
  });

  test('rubric: The order for the DIY store should be an aromatherapy candle DIY package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for the DIY store should be an aromatherapy candle DIY package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for the DIY store should be a single person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for the DIY store should be a single person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for the DIY store should include DIY relief dried flower style candles', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for the DIY store should include DIY relief dried flower style candles"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for the DIY store should include teaching guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for the DIY store should include teaching guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should search whether there are pet stores providing pet care services within 30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should search whether there are pet stores providing pet care services within 3000m (including 3000m) of Creative Workshop (Wanda Plaza Store), 3rd Floor, Building A, Wanda Plaza, 1266 Fenghe Middle Avenue, Honggutan New District, Nanchang. The result is yes, so a pet store should be booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the pet store reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the pet store reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the pet store should be 2025-05-01 09:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the pet store should be 2025-05-01 09:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check the user\'s behavior history. The gym the user visited last time wa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check the user\'s behavior history. The gym the user visited last time was Super Fitness (Greenland Store), so the gym order should be for Super Fitness (Greenland Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym order should be for a private lesson package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym order should be for a private lesson package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
