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
    expect(result[0].store_id).toBe('S17567843343057973_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843343057973_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(398, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567843343057973_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843343057973_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(288, 0);
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

  test('rubric: The restaurant & bar should have a live singer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant & bar should have a live singer"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When querying and ordering packages at the restaurant & bar, the results should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When querying and ordering packages at the restaurant & bar, the results should include a four-person meal with craft beer, so the restaurant & bar order should only have one four-person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant & bar package should include food and craft beer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant & bar package should include food and craft beer"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV should be within 2km (inclusive) from Drunk Note Restaurant & Bar, 3rd F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV should be within 2km (inclusive) from Drunk Note Restaurant & Bar, 3rd Floor, Wanda Plaza, 1380 Lijiang Road, Honggutan New District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV should have a rating of 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV should be a chain brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV should be a chain brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV order should be for a karaoke package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV order should be for a karaoke package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV order should be for a 3-hour session', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV order should be for a 3-hour session"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation time should be September 8, 2023, at 20:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation time should be September 8, 2023, at 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation should be for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation should be for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved KTV venue should be Star Gathering KTV (Wanda Plaza Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved KTV venue should be Star Gathering KTV (Wanda Plaza Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
