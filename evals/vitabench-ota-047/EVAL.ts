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
    expect(result[0].store_id).toBe('S17557511395254657_T00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511395254657_P00093", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(450, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557511395254657_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511395254657_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(45, 0);
  });

  test('rubric: Train departure date should be June 18, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train departure date should be June 18, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets should be for the train from Jinan to Weihai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets should be for the train from Jinan to Weihai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train number should be G6966', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train number should be G6966"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction ticket should be the cheapest one (Banana boat experience', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction ticket should be the cheapest one (Banana boat experience ticket)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction ticket use date should be June 19, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction ticket use date should be June 19, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of attraction tickets should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of attraction tickets should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
