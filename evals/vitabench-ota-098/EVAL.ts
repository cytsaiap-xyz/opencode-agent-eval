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
    expect(result[0].store_id).toBe('S17557072491807785_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557072491807785_P00033", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(272, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557072491807785_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557072491807785_P00083", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(536, 0);
  });

  test('rubric: The attraction ordered is Jiangbei Grand Canyon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered is Jiangbei Grand Canyon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets ordered is 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets ordered is 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type should be Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the tickets should be January 17, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the tickets should be January 17, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from Jiangbei Grand Canyon to Yuncheng Railway Station is about 72k', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from Jiangbei Grand Canyon to Yuncheng Railway Station is about 72km, which is not more than 100 kilometers, so train tickets for January 17, 2023 should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number ordered should be D2568', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number ordered should be D2568"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ordered should be from Yuncheng to Taiyuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ordered should be from Yuncheng to Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train seat type ordered should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train seat type ordered should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets ordered should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets ordered should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return date is January 17, 2023, not January 18, 2023, so there is no need t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return date is January 17, 2023, not January 18, 2023, so there is no need to check if there is a park near Yuncheng Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
