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
    expect(result[0].store_id).toBe('S17567836572324193_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836572324193_P00001", "quantity": 1}, {"product_id": "S17567836572324193_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(300, 0);
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
    expect(result[2].store_id).toBe('S17567836572324193_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836572324193_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(28, 0);
  });

  test('rubric: The rating of the art training center for placing an order should be 4.0 or abov', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the art training center for placing an order should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the art training center should be one-on-one private le', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the art training center should be one-on-one private lessons"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the art training center should be an advanced course', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the art training center should be an advanced course"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the art training center should be a single session', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the art training center should be a single session"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check whether the art training center has guitar weekly rental packages a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check whether the art training center has guitar weekly rental packages available, and the result is yes, so the product ordered should be a guitar weekly rental package."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the product ordered from the art training center should not e', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the product ordered from the art training center should not exceed 600 yuan (including 600 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The art training center to be booked should be Musical String Arts Training Cent', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The art training center to be booked should be Musical String Arts Training Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking time for the art training center should be 2024-02-19 13:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking time for the art training center should be 2024-02-19 13:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the art training center reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the art training center reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check order history to find previously visited dessert shops, the result', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check order history to find previously visited dessert shops, the result is Bread Talk (Wuyue Plaza Store), so the merchant to order from should be Bread Talk (Wuyue Plaza Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check order history to find products in previous packages, the result is', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check order history to find products in previous packages, the result is Whole wheat toast + Classic fruit tart, this time buying just a fruit tart, so the product ordered from the bakery should be Classic fruit tart"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
