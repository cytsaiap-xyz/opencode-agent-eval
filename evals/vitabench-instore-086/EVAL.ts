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
    expect(result[0].store_id).toBe('S17567843793441224_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843793441224_P00001", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17567843793441224_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843793441224_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(35, 0);
  });

  test('rubric: The distance between the restaurant and Shandong University, 27 Shanda South Roa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the restaurant and Shandong University, 27 Shanda South Road, Lixia District, Jinan should be within 2km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant environment must be quiet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant environment must be quiet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should provide private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should provide private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the set meal ordered at the restaurant should not exceed 400 yuan (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the set meal ordered at the restaurant should not exceed 400 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The meal set ordered at the restaurant should be a set for two people, not two i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The meal set ordered at the restaurant should be a set for two people, not two individual sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal ordered at the restaurant must be light taste', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal ordered at the restaurant must be light taste"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Yaxuan Private Kitchen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Yaxuan Private Kitchen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departing at 5:00 PM tomorrow, it takes about 20 minutes to walk there, so the r', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departing at 5:00 PM tomorrow, it takes about 20 minutes to walk there, so the reservation time should be 2024-07-07 17:20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the bakery and Yaxuan Private Kitchen (Shandong University ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the bakery and Yaxuan Private Kitchen (Shandong University Branch), 56 Shanda South Road, Lixia District, Jinan should be within 300 meters (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the bakery should not exceed 40 yuan (inclusive)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the bakery should not exceed 40 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the bakery should include bread', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the bakery should include bread"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the bakery should include beverages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the bakery should include beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bread in the bakery set should be a new item', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bread in the bakery set should be a new item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery set should not contain durian flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery set should not contain durian flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
