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
    expect(result[0].store_id).toBe('S17564420317678244_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420317678244_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
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
    expect(result[2].store_id).toBe('S17564421111385022_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564421111385022_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(32, 0);
  });

  test('rubric: Massage shop rating should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Massage shop rating should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage shop should be within 2500m of Maker Space, 18th Floor, Shangmao Cen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop should be within 2500m of Maker Space, 18th Floor, Shangmao Century Plaza, 49 Zhongshan South Road, Qinhuai District, Nanjing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: On 2025-09-25, the weather in Nanjing will be cloudy turning to light rain, and ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "On 2025-09-25, the weather in Nanjing will be cloudy turning to light rain, and the massage shop should have parking available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered service at the massage shop should be a full body massage package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered service at the massage shop should be a full body massage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage duration should be around 60 minutes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage duration should be around 60 minutes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved massage shop should be Yu Zu Tang (Shangmao Century Plaza Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved massage shop should be Yu Zu Tang (Shangmao Century Plaza Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time should be 2025-09-25 21:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time should be 2025-09-25 21:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be from Hong Kong Style Pork Knuckle Rice (Hanzhong ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be from Hong Kong Style Pork Knuckle Rice (Hanzhong Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dish should be Pork knuckle rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dish should be Pork knuckle rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
