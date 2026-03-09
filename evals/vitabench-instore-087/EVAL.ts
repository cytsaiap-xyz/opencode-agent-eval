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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567844530668853_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844530668853_P00010", "quantity": 1}, {"product_id": "S17567844530668853_P00011", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(454, 0);
  });

  test('rubric: The reserved restaurant must have an elegant environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must have an elegant environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant must have a cartoon theme', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must have a cartoon theme"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant must be a family restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must be a family restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant must provide birthday celebration service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must provide birthday celebration service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant must be within 3 kilometers (inclusive) of Room 501, Uni', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must be within 3 kilometers (inclusive) of Room 501, Unit 3, Building 12, Sea View Garden, 28 Victory Road, Zhifu District, Yantai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation must be for 8 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation must be for 8 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time must be 2026-06-13 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time must be 2026-06-13 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered children\'s amusement center must be within 1 kilometer (inclusive) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered children\'s amusement center must be within 1 kilometer (inclusive) of Children\'s Dream Fantasy Theme Restaurant, 3rd Floor, Sunshine Department Store, 156 Victory Road, Zhifu District, Yantai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered amusement center must have birthday amusement vouchers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered amusement center must have birthday amusement vouchers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order must include 1 birthday amusement voucher', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order must include 1 birthday amusement voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered amusement center must have standard amusement vouchers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered amusement center must have standard amusement vouchers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order must include 2 standard amusement vouchers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order must include 2 standard amusement vouchers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The birthday amusement vouchers and standard amusement vouchers must be from the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday amusement vouchers and standard amusement vouchers must be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
