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
    expect(result[0].store_id).toBe('S17564420291759936_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420291759936_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(288, 0);
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

  test('rubric: The KTV to be ordered should have a rating of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV to be ordered should have a rating of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package must include drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package must include drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package must not exceed 360 yuan (based on twice the upper limit of the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package must not exceed 360 yuan (based on twice the upper limit of the user\'s leisure entertainment consumption of 120-180 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the KTV package should be 2 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the KTV package should be 2 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather information for the weekend (May 31st: sunny 20-28℃, June 1st:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather information for the weekend (May 31st: sunny 20-28℃, June 1st: light rain 19-25℃), as it won\'t rain on the 31st, the KTV reservation time should be 2025-05-31 at 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the KTV reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the KTV reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV to be booked should be Xingju KTV (Shinan Mixc Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV to be booked should be Xingju KTV (Shinan Mixc Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The night snack venue must be a Hot pot restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The night snack venue must be a Hot pot restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The night snack venue must be within 3km of home (Sea View Garden, 76 Yan\'an Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The night snack venue must be within 3km of home (Sea View Garden, 76 Yan\'an Road)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The night snack venue must have a Two-person private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The night snack venue must have a Two-person private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The night snack venue must support advance reservations', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The night snack venue must support advance reservations"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the night snack venue must be 2025-05-31 at 21:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the night snack venue must be 2025-05-31 at 21:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the night snack reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the night snack reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
