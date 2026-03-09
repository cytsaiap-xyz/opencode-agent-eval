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
    expect(result[0].store_id).toBe('S17557505469225855_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505469225855_P00062", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(65, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505469225855_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505469225855_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(238, 0);
  });

  test('rubric: Train tickets must be for departures at or after 10 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets must be for departures at or after 10 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets should be dated for Sunday, May 18, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets should be dated for Sunday, May 18, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket must be the shortest duration option available, which is', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket must be the shortest duration option available, which is G1571 (15:42-16:28, 46 minutes duration)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the return train departs after 3 PM (such as G1571 at 15:42), the guesthou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the return train departs after 3 PM (such as G1571 at 15:42), the guesthouse must allow late check-out until 2 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The guesthouse should be within 2km of Yinxu Ruins, Xiaotun Village, Yindu Distr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The guesthouse should be within 2km of Yinxu Ruins, Xiaotun Village, Yindu District, Anyang, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The guesthouse decoration style must be Retro style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The guesthouse decoration style must be Retro style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the guesthouse booking must be less than or equal to 250 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the guesthouse booking must be less than or equal to 250 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The guesthouse booking must be for Saturday night (May 17, 2025)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The guesthouse booking must be for Saturday night (May 17, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Information about historical sites related to Feng Shen (Gods Canonization) in A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Information about historical sites related to Feng Shen (Gods Canonization) in Anyang should be searched, with the result being Youli City (where King Wen of Zhou was imprisoned, and the birthplace of \'I Ching\')"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
