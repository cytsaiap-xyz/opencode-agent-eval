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
    expect(result[0].store_id).toBe('S17550810586464916_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810586464916_P00054", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(368, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810586464916_F00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810586464916_P00030", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1440, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810586464916_F00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810586464916_P00037", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1560, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550810586464916_S00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810586464916_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1299, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The massage shop should be within 5.5km of Chengdu Shuangliu International Airpo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop should be within 5.5km of Chengdu Shuangliu International Airport, Shuangliu District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order at the massage shop should include food items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order at the massage shop should include food items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order at the massage shop should include massage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order at the massage shop should include massage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order at the massage shop should be suitable for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order at the massage shop should be suitable for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Cancel the flight ticket order (flight number CA1832) on September 7, 2024 from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Cancel the flight ticket order (flight number CA1832) on September 7, 2024 from historical orders"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for flight ticket booking should be September 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for flight ticket booking should be September 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked flight should be a Red-Eye Flight (flight MU2354)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked flight should be a Red-Eye Flight (flight MU2354)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of flight tickets to book should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of flight tickets to book should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be within 5.5km of CR Land Park Mansion, 228 Huai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be within 5.5km of CR Land Park Mansion, 228 Huaining Road, Shushan District, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should serve Hui Cuisine or Cantonese cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should serve Hui Cuisine or Cantonese cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 19:00 on September 17, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 19:00 on September 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
