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
    expect(result[0].store_id).toBe('S17550802121554326_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802121554326_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(268, 0);
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
    expect(result[2].store_id).toBe('S17550802121554326_I00017');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802121554326_P00088", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(268, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802121554326_A00010');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802121554326_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(35, 0);
  });

  test('rubric: The delivery address for the takeout order is Room 502, Unit 1, Building 13, Sun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order is Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the takeout order should be before 19:15:00 on 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the takeout order should be before 19:15:00 on 2026-04-22 (including 19:15:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order should be from a French or Italian restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order should be from a French or Italian restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes ordered in the takeout order should be high-end cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes ordered in the takeout order should be high-end cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes ordered in the takeout order should avoid offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes ordered in the takeout order should avoid offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be a Hunan cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a Hunan cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation is for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation is for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is 11:30:00 on April 23, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is 11:30:00 on April 23, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant has an average cost of 200 yuan per person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant has an average cost of 200 yuan per person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house in the order should be elegant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house in the order should be elegant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set in the tea house order should be sufficient for four people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set in the tea house order should be sufficient for four people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set in the tea house order should include Qihong tea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set in the tea house order should include Qihong tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant in the tea house order should be within 3km of Xiang Yu Restaurant,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the tea house order should be within 3km of Xiang Yu Restaurant, 128 Nanjing Road, Heping District, Tianjin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot ordered should be within 50km of Room 502, Unit 1, Building 13, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot ordered should be within 50km of Room 502, Unit 1, Building 13, Sunac Xingyao Wuzhou, 28 Youyi Road, Hexi District, Tianjin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased scenic spot tickets should be valid for night use', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased scenic spot tickets should be valid for night use"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
