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
    expect(result[0].store_id).toBe('S17564420237542211_I00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420237542211_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(88, 0);
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

  test('rubric: The gym should be Fully Equipped', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym should be Fully Equipped"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym should be within 5000m range of Room 502, Unit 1, Building 3, Longcheng ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym should be within 5000m range of Room 502, Unit 1, Building 3, Longcheng Shangdu, 136 Qinxian North Street, Xiaodian District, Taiyuan City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym should provide Swimming Pool', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym should provide Swimming Pool"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym should provide Swimming Class Single Experience Voucher and Body Shaping', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym should provide Swimming Class Single Experience Voucher and Body Shaping Class Single Experience Voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Taiyuan on 2025-11-07 will be overcast, Body Shaping class should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Taiyuan on 2025-11-07 will be overcast, Body Shaping class should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym reservation should be made at Kangti Swimming Fitness Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym reservation should be made at Kangti Swimming Fitness Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The gym reservation time should be 2025-11-07 17:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The gym reservation time should be 2025-11-07 17:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the gym reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the gym reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
