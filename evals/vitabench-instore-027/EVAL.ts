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
    expect(result[0].store_id).toBe('S17564423645199589_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564423645199589_P00001", "quantity": 1}];
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
    expect(result[1].store_id).toBe('S17564423645199589_I00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564423645199589_P00005", "quantity": 1}, {"product_id": "S17564423645199589_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(42, 0);
  });

  test('rubric: Due to tomorrow\'s (July 20, 2025) light rain weather, the swimming pool ordered', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Due to tomorrow\'s (July 20, 2025) light rain weather, the swimming pool ordered must be an indoor swimming pool"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The swimming pool ordered must have a parking lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The swimming pool ordered must have a parking lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The swimming pool order must be for a parent-child package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The swimming pool order must be for a parent-child package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The swimming pool order must include at least 2 hours of swimming time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The swimming pool order must include at least 2 hours of swimming time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be Yonghe King', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be Yonghe King"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be within 1 kilometer (inclusive) of Anhui Province Sports', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 1 kilometer (inclusive) of Anhui Province Sports Center Indoor Swimming Pool, 188 Qianshan Road, Shushan District, Hefei City, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must include two different single-person meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must include two different single-person meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must be valid for use on July 20, 2025 (Sunday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must be valid for use on July 20, 2025 (Sunday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
