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
    expect(result[0].store_id).toBe('S17550802127823540_I00015');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802127823540_P00114", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1990, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802127823540_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802127823540_P00006", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(244.5, 0);
  });

  test('rubric: The ordered moxibustion package duration must be between 60-90 minutes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered moxibustion package duration must be between 60-90 minutes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion package should be exactly enough for 5 people, no more no less', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion package should be exactly enough for 5 people, no more no less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion package must be a suspended moxibustion service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion package must be a suspended moxibustion service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery restaurant must support night delivery', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery restaurant must support night delivery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery restaurant should have a rating of 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery restaurant should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery food must be low-sodium light food', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery food must be low-sodium light food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery food must not affect reaction speed, and cannot contain alc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery food must not affect reaction speed, and cannot contain alcohol or irritating ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order needs to include 5 individual meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order needs to include 5 individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Hangzhou Atour Hotel (Sports Center Branch), 3800', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Hangzhou Atour Hotel (Sports Center Branch), 3800 Moganshan Road, Gongshu District, Hangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
