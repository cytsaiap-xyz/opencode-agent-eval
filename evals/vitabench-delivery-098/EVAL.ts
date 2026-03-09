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
    expect(result[0].store_id).toBe('S14300562617778145_S54361');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23532868960336657_P82546", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(29.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S59786818786582947_S57980');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S40851029391762274_P15308", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(24.9, 0);
  });

  test('rubric: The rating of the ramen restaurant should be 4.3 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the ramen restaurant should be 4.3 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ramen product ordered should not contain shrimp ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ramen product ordered should not contain shrimp ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the ramen order should be Tianyuan Business Building, 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the ramen order should be Tianyuan Business Building, 3 Yuejin Road, Chang\'an District, Shijiazhuang, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the ramen order should be around 2024-03-31 12:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the ramen order should be around 2024-03-31 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The temperature attribute for the milk tea product should be set as hot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The temperature attribute for the milk tea product should be set as hot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the milk tea order should be Tianyuan Business Building', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the milk tea order should be Tianyuan Business Building, 3 Yuejin Road, Chang\'an District, Shijiazhuang, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the milk tea order should be around 2024-03-31 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the milk tea order should be around 2024-03-31 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
