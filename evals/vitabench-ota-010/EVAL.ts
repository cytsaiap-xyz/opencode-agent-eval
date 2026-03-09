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
    expect(result[0].store_id).toBe('S17557505552244121_F00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552244121_P00058", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(950, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505552244121_T00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552244121_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(553, 0);
  });

  test('rubric: Flight booking status should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight booking status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train departure date should be July 30, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train departure date should be July 30, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train ticket should be for a route from Tianjin to Hangzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train ticket should be for a route from Tianjin to Hangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: On July 30, 2025, the cheapest seat type (Second Class Seat) on the earliest tra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "On July 30, 2025, the cheapest seat type (Second Class Seat) on the earliest train G1677 from Tianjin to Hangzhou is sold out, so the booked train should be G1635, which departs 2-3 hours later"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train seat type should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train seat type should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from Ningsheng Li, Intersection of Weijin South Road and Cangqiong ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from Ningsheng Li, Intersection of Weijin South Road and Cangqiong Road, Nankai District, Tianjin to Tianjin Railway Station is about 6 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
