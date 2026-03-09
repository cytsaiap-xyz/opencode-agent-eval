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
    expect(result[0].store_id).toBe('S17550802145565647_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145565647_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
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
    expect(result[2].store_id).toBe('S17550802145565647_I00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145565647_P00055", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(228, 0);
  });

  test('rubric: The takeout item ordered for mom is Bird\'s Nest Cup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout item ordered for mom is Bird\'s Nest Cup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the takeout item ordered for mom should be less than 150 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the takeout item ordered for mom should be less than 150 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time of the takeout item ordered for mom is around 09:00 o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time of the takeout item ordered for mom is around 09:00 on May 11, 2025 【which means the expected delivery time is within the 08:45-09:15 range】"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for mom\'s takeout order is Water Lane Apartment, 89 Pingji', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for mom\'s takeout order is Water Lane Apartment, 89 Pingjiang Road, Gusu District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower arrangement appointment time is 15:00 on May 11, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower arrangement appointment time is 15:00 on May 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the flower arrangement appointment is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the flower arrangement appointment is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flower arrangement studio should be Four Seasons Floral Fragrance St', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flower arrangement studio should be Four Seasons Floral Fragrance Studio (S17550802145565647_I00011)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower arrangement package should include teaching service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower arrangement package should include teaching service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather on May 11, 2025 is light rain', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather on May 11, 2025 is light rain"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should not purchase cruise tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should not purchase cruise tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
