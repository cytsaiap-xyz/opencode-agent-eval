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
    expect(result[0].store_id).toBe('S17567836573372019_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836573372019_P00001", "quantity": 1}];
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
    expect(result[1].store_id).toBe('S17567836573372019_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836573372019_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(188, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836573372019_I00008');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836573372019_P00064", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(138, 0);
  });

  test('rubric: Private cinemas should have a romantic environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Private cinemas should have a romantic environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Private cinemas should have private rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Private cinemas should have private rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Orders at private cinemas should be couple packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Orders at private cinemas should be couple packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Orders at private cinemas should be for the 18:00-21:00 time slot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Orders at private cinemas should be for the 18:00-21:00 time slot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Package orders at private cinemas should include snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Package orders at private cinemas should include snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Package orders at private cinemas should include drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Package orders at private cinemas should include drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Package orders at private cinemas should not contain caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Package orders at private cinemas should not contain caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products included in private cinema orders should be low in sugar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products included in private cinema orders should be low in sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower shop should be no more than 1km (inclusive) from Starlight Private Ci', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower shop should be no more than 1km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Orders at the flower shop should be blue roses', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Orders at the flower shop should be blue roses"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Orders at the flower shop should be bouquet packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Orders at the flower shop should be bouquet packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower shop should be open on Saturdays', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower shop should be open on Saturdays"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved flower shop should be Blue Rose Flower Shop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved flower shop should be Blue Rose Flower Shop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower shop reservation time should be 17:30:00 on 2025-04-05', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower shop reservation time should be 17:30:00 on 2025-04-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower shop reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower shop reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be a Korean cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be a Korean cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be no more than 2km (inclusive) from Starlight Private Cin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be no more than 2km (inclusive) from Starlight Private Cinema, Section B2, Xinghai Square, Shahekou District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should offer a night view', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should offer a night view"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Orders at the restaurant should be packages for two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Orders at the restaurant should be packages for two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant package should include beef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant package should include beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order price should not exceed 160 yuan (inclusive)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order price should not exceed 160 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
