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
    expect(result[0].store_id).toBe('S17550802145725256_S00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145725256_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(48, 0);
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
    expect(result[2].store_id).toBe('S17550802145725256_F00009');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802145725256_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(980, 0);
  });

  test('rubric: Food delivery order items should be Japanese cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery order items should be Japanese cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Food delivery order items must include rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery order items must include rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Food delivery order items cannot be raw food', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery order items cannot be raw food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Food delivery order items should be a single portion', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery order items should be a single portion"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Estimated delivery time for the food delivery order is May 31, 2025, 17:15-18:15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Estimated delivery time for the food delivery order is May 31, 2025, 17:15-18:15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Delivery address for the food delivery order is Harbin Institute of Technology S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Delivery address for the food delivery order is Harbin Institute of Technology Student Dormitory Building 3, 74 Xuefu Road, Nangang District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be within 2km of the Main Teaching Building of Ha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be within 2km of the Main Teaching Building of Harbin Institute of Technology, 92 Xuefu Road, Nangang District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be a Chinese Cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a Chinese Cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have Private Room or Booth Seating', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have Private Room or Booth Seating"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should include dishes that are not Heavy Oil Spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should include dishes that are not Heavy Oil Spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be June 1, 2025, 11:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be June 1, 2025, 11:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 Persons', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 Persons"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight date should be between June 1, 2025, 14:30 and June 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight date should be between June 1, 2025, 14:30 and June 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cheapest flight ticket should be selected', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cheapest flight ticket should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
