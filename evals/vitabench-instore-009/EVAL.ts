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
    expect(result[0].store_id).toBe('S17564420351855866_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420351855866_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(85, 0);
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
    expect(result[2].store_id).toBe('S17564420351855866_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420351855866_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(68, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564420351855866_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420351855866_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(58, 0);
  });

  test('rubric: The table tennis hall to be booked should be open 24 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The table tennis hall to be booked should be open 24 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The table tennis hall should offer a 2-Hour Trial Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The table tennis hall should offer a 2-Hour Trial Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The table tennis hall booking time should be 2024-07-13 16:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The table tennis hall booking time should be 2024-07-13 16:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the table tennis hall booking should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the table tennis hall booking should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The table tennis hall to be booked should be Star Power Table Tennis Hall (Jiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The table tennis hall to be booked should be Star Power Table Tennis Hall (Jianghan Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The table tennis hall booking should be for a Trial Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The table tennis hall booking should be for a Trial Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of use for the table tennis hall booking should be 2 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of use for the table tennis hall booking should be 2 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dumpling order status should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dumpling order status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert shop should be within 500m (inclusive) from Room 501, Unit 2, Buildi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert shop should be within 500m (inclusive) from Room 501, Unit 2, Building 4, Hankou Bank Staff Quarters, 241 Xinhua Road, Jianghan District, Wuhan, Hubei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert shop rating should be 3.8 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert shop rating should be 3.8 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert shop order should be for a Cake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert shop order should be for a Cake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert shop order should be Fruit flavored', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert shop order should be Fruit flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert shop order should not be Cheesecake flavored', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert shop order should not be Cheesecake flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
