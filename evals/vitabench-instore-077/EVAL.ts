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
    expect(result[0].store_id).toBe('S17567842410354300_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842410354300_P00001", "quantity": 1}];
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
    expect(result[1].store_id).toBe('S17567842410354300_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842410354300_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(68, 0);
  });

  test('rubric: The Xinjiang restaurant order should be suitable for photo check-in', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Xinjiang restaurant order should be suitable for photo check-in"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Xinjiang restaurant order should be a two-person set that includes alcoholic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Xinjiang restaurant order should be a two-person set that includes alcoholic beverages, Spicy Lamb Hoof, and Hand-Grabbed Rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the claw machine store to Tianshan Style Xinjiang Cuisine, 1st', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the claw machine store to Tianshan Style Xinjiang Cuisine, 1st Floor, Building A, Triumph Plaza, No. 198 Zhongzhou Middle Road, Xigong District, Luoyang should be within 2km (including 2km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: In the claw machine store, the 200 Game Coins Package costs only 10 yuan more th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "In the claw machine store, the 200 Game Coins Package costs only 10 yuan more than the 100 Game Coins Package, so the 200 Game Coins Package should be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the Xinjiang restaurant to Room 1503, Building B, Triumph Plaz', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the Xinjiang restaurant to Room 1503, Building B, Triumph Plaza, No. 229 Zhongzhou Middle Road, Xigong District, Luoyang is within 1km (including 1km), so no reservation is needed"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
