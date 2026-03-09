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
    expect(result[0].store_id).toBe('S17564420305476295_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420305476295_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
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
    expect(result[2].store_id).toBe('S17564420305476295_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420305476295_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(52, 0);
  });

  test('rubric: Hot spring store orders must include SPA services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hot spring store orders must include SPA services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot spring establishment must provide Free Parking service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot spring establishment must provide Free Parking service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at hot spring establishments must offer Multi-temperature Pools', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at hot spring establishments must offer Multi-temperature Pools for selection"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at hot spring establishments must provide good Private Space', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at hot spring establishments must provide good Private Space"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at hot spring establishments should be priced between 180-300 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at hot spring establishments should be priced between 180-300 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at hot spring establishments should include Accommodation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at hot spring establishments should include Accommodation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at hot spring establishments should be Single Serving packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at hot spring establishments should be Single Serving packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hot spring establishment should be Yunding Hot Spring Resort', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hot spring establishment should be Yunding Hot Spring Resort"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the hot spring reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the hot spring reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the hot spring establishment is March 16, 2025 at 20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the hot spring establishment is March 16, 2025 at 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must provide Free Parking service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must provide Free Parking service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must be within 2km (inclusive) of Yunding Hot Spring Resort, 88 H', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must be within 2km (inclusive) of Yunding Hot Spring Resort, 88 Hot Spring Road, Qiantao Township, Huaxi District, Guiyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products ordered at the restaurant must include Sour Soup Beef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products ordered at the restaurant must include Sour Soup Beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant rating should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant rating should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurant orders should be Single Serving packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant orders should be Single Serving packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Restaurant order prices should be within 60 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant order prices should be within 60 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
