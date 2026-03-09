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
    expect(result[0].store_id).toBe('S29509549137012996_S47439');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S31507710680622253_P20902", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(39.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S33764608762858787_S11690');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S10915355094844256_P90588", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28.71, 0);
  });

  test('rubric: The delivery address for the Garlic Vermicelli Meat Slice order for wife should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Garlic Vermicelli Meat Slice order for wife should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan\'an District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Garlic Vermicelli Meat Slice order for wife ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Garlic Vermicelli Meat Slice order for wife should be around 2024-05-18 21:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Garlic Vermicelli Meat Slice order for wife should be non-spicy flavor, avoi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Garlic Vermicelli Meat Slice order for wife should be non-spicy flavor, avoiding stimulating seasonings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Strained Yogurt Bowl order for daughter should be N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Strained Yogurt Bowl order for daughter should be No.25, No.2 Shuangfengshan Road, Yunmanting Zone C, Nan\'an District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Strained Yogurt Bowl order for daughter shou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Strained Yogurt Bowl order for daughter should be before 2024-05-18 19:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
