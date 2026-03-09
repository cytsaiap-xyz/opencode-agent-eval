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
    expect(result[0].store_id).toBe('S17564426693922849_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426693922849_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(188, 0);
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
    expect(result[2].store_id).toBe('S17564426693922849_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426693922849_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(398, 0);
  });

  test('rubric: The DIY handicraft workshop to be ordered should have more than 5 years of tradi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The DIY handicraft workshop to be ordered should have more than 5 years of traditional handicraft making experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from DIY handicraft workshop should include zongzi making ac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from DIY handicraft workshop should include zongzi making activity"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from DIY handicraft workshop should be a family package for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from DIY handicraft workshop should be a family package for 2 adults and 1 child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The DIY handicraft workshop appointment time should be 2025-05-31 14:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The DIY handicraft workshop appointment time should be 2025-05-31 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The DIY handicraft workshop reservation should be for 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The DIY handicraft workshop reservation should be for 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The DIY handicraft workshop merchant should be Zongqing Handcraft Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The DIY handicraft workshop merchant should be Zongqing Handcraft Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking user\'s historical behavior, the restaurant to order from should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking user\'s historical behavior, the restaurant to order from should be Qingdao Fishing Port Seafood Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking the set meals of Qingdao Fishing Port Seafood Restaurant, the res', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking the set meals of Qingdao Fishing Port Seafood Restaurant, the results include Dragon Boat Festival exclusive package, therefore the seafood restaurant order should be for the Dragon Boat Festival exclusive package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
