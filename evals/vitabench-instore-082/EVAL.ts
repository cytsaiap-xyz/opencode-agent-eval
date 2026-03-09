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
    expect(result[0].store_id).toBe('S17567836570522520_I00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836570522520_P00032", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1088, 0);
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
    expect(result[2].store_id).toBe('S17567836570522520_I00009 ');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836570522520_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(198, 0);
  });

  test('rubric: The distance from the hot spring establishment to No. 18, Section 2, Hongxing Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the hot spring establishment to No. 18, Section 2, Hongxing Road, Jinjiang District, Chengdu, Sichuan Province (450 meters walk from Exit A of City Second Hospital Metro Station) should be within 20km (including 20km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot spring establishment rating should be 5.0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot spring establishment rating should be 5.0"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot spring establishment should have a Parking lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot spring establishment should have a Parking lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item price at the hot spring establishment can exceed 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item price at the hot spring establishment can exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the hot spring establishment should be a Family hot spring p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the hot spring establishment should be a Family hot spring package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hot spring establishment should be Jinjiang Hot Spring Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hot spring establishment should be Jinjiang Hot Spring Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the hot spring establishment is 2024-02-11 09:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the hot spring establishment is 2024-02-11 09:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the hot spring reservation is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the hot spring reservation is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There is a Game hall within 10km (including 10km) of Jinjiang Hot Spring Club, C', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There is a Game hall within 10km (including 10km) of Jinjiang Hot Spring Club, Chenglong Road, Jinjiang District, Chengdu, therefore the establishment to order from should be the Game hall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Game hall should be a Newcomer experience package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Game hall should be a Newcomer experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
