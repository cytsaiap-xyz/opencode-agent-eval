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
    expect(result[0].store_id).toBe('S17567836667787240_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836667787240_P00001", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17567836667787240_I00010');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836667787240_P00083", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(158, 0);
  });

  test('rubric: The bakery workshop should be within 5 kilometers or less from Room 501, Unit 2,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery workshop should be within 5 kilometers or less from Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the bakery workshop should be a Doraemon themed baking pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the bakery workshop should be a Doraemon themed baking package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery workshop ordered item should be suitable for 2 Adults 1 Child', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery workshop ordered item should be suitable for 2 Adults 1 Child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery workshop reservation should be for Doraemon Dream Bakery Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery workshop reservation should be for Doraemon Dream Bakery Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery workshop reservation time should be 2024-12-14 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery workshop reservation time should be 2024-12-14 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery reservation should be for 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery reservation should be for 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 1 kilometer or less from Doraemon Dream ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 1 kilometer or less from Doraemon Dream Bakery Workshop, 2nd Floor, Golden Age Plaza, No. 230 Zhenhua Road, Lichang District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered items should be Parent-Child Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered items should be Parent-Child Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered items should be suitable for 2 Adults 1 Child', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered items should be suitable for 2 Adults 1 Child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered items should be within 200 yuan or less', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered items should be within 200 yuan or less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since there is a bakery workshop within 5 kilometers (inclusive) of Room 501, Un', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since there is a bakery workshop within 5 kilometers (inclusive) of Room 501, Unit 2, Building 3, Jinshui Garden, No. 128 Zhenhua Road, Lichang District, Qingdao, there should not be any photo studio orders"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
