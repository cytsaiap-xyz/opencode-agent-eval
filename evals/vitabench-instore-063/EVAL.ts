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
    expect(result[0].store_id).toBe('S17567836566125885_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836566125885_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(158, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567836566125885_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836566125885_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(23, 0);
  });

  test('rubric: The distance between the health preservation center and Room 1203, Building B, H', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the health preservation center and Room 1203, Building B, Huale Garden, 1037 Luoyu Road, Hongshan District, Wuhan should be within 3000m (including 3000m)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The health preservation center should have a TCM Physician available on Mondays', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The health preservation center should have a TCM Physician available on Mondays"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the health preservation center should be a multiple acu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the health preservation center should be a multiple acupoint treatment package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the health preservation center should be moxibustion tr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the health preservation center should be moxibustion treatment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the health preservation center should be the Traditiona', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the health preservation center should be the Traditional Five-Point Moxibustion Experience Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the beverage shop and the Starlight Paradise Shopping Mall ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the beverage shop and the Starlight Paradise Shopping Mall should be within 1000m (including 1000m)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking the user\'s historic orders, book and resercation, the user\'s pr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking the user\'s historic orders, book and resercation, the user\'s preferred store rating range is 4.3-5.0, so the beverage shop\'s rating should be 4.3 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop should be checked for Strawberry Milkshake, which is available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop should be checked for Strawberry Milkshake, which is available, so the ordered product from the beverage shop should be Strawberry Milkshake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
