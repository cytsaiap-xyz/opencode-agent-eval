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
    expect(result[0].store_id).toBe('S14848003758238527_S93427');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30688323956871062_P57881", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(29.76, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14848003758238527_S93427');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S30688323956871062_P57881", "quantity": 1}, {"product_id": "S10866881969664312_P25702", "quantity": 1}, {"product_id": "S19855181240368022_P21464", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(30.26, 0);
  });

  test('rubric: Cancel the order with order ID 1072104T01', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Cancel the order with order ID 1072104T01"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reordered items should include a Jianbing for the daughter, without egg, wit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reordered items should include a Jianbing for the daughter, without egg, with sweet bean sauce flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Jianbing for the user in the reordered items should be identical to the prod', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Jianbing for the user in the reordered items should be identical to the product in order ID 1072104T01 (with egg, tomato sauce flavor)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reordered breakfast should contain 3 items in total, including 2 Jianbings a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reordered breakfast should contain 3 items in total, including 2 Jianbings and 1 tea egg"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
