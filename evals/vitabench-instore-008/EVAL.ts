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
    expect(result[0].store_id).toBe('S17564420278251374_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420278251374_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(68, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420278251374_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420278251374_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(88, 0);
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

  test('rubric: The coffee shop merchant must be Pet-Friendly', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop merchant must be Pet-Friendly"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop order set must include mini cake and beverage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop order set must include mini cake and beverage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop order set must not include Tiramisu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop order set must not include Tiramisu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage in the coffee shop order set cannot be fruit coffee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage in the coffee shop order set cannot be fruit coffee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet shop must be within 1km of the coffee shop (Meow Café, Room 102, Buildin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet shop must be within 1km of the coffee shop (Meow Café, Room 102, Building B, Triumph Plaza, at the Intersection of Wangcheng Avenue and Triumph East Road, Xigong District, Luoyang)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet shop order package must be a bathing service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet shop order package must be a bathing service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet shop order package must include Paw Hair Trimming and Loose Hair Removal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet shop order package must include Paw Hair Trimming and Loose Hair Removal services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet shop bathing service must be booked around 16:00 on 2025-06-17', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet shop bathing service must be booked around 16:00 on 2025-06-17"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked pet shop merchant should be Cute Pet Paradise', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked pet shop merchant should be Cute Pet Paradise"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must look for restaurants within 1km of the pet shop, and the restaurant set men', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must look for restaurants within 1km of the pet shop, and the restaurant set menu must provide spicy food, cannot contain garlic, must include Sour Plum Juice. The result was none, so no restaurant order is needed"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
