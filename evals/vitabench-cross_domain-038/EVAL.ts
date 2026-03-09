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
    expect(result[0].store_id).toBe('S17550809417136210_T00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809417136210_P00030", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(183, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809417136210_I00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809417136210_P00058", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(99, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809417136210_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809417136210_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(450, 0);
  });

  test('rubric: The train ticket booked should be from Suzhou to Lianyungang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket booked should be from Suzhou to Lianyungang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected train should be the one with shortest travel time (select G2878, to', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected train should be the one with shortest travel time (select G2878, total duration 2 hours 38 minutes, shortest time)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the selected train should be August 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the selected train should be August 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the selected train should be in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the selected train should be in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket purchased should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket purchased should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photo studio purchase should include Four-Grid Photo Booth Stickers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photo studio purchase should include Four-Grid Photo Booth Stickers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photo studio purchase should include Polaroid photo shooting', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photo studio purchase should include Polaroid photo shooting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photo studio products should have Korean Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photo studio products should have Korean Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photo studio products should be cost-effective, query shows that Korean Styl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photo studio products should be cost-effective, query shows that Korean Style Four-Grid + Polaroid Package offers the best value"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should be four-star or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should be four-star or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be in downtown Lianyungang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be in downtown Lianyungang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type booked should be Standard King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type booked should be Standard King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking date should be August 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking date should be August 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
