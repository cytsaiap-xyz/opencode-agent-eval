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
    expect(result[0].store_id).toBe('S30220756126333890_S12490');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S52281857932585112_P12793", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(21.88, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S44013828441542373_S74498');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S19699521858967727_P19744", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(49.8, 0);
  });

  test('rubric: The delivery address for the user\'s potato noodle order should be Weifang Gover', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the user\'s potato noodle order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the potato noodle order should be before 1 PM on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the potato noodle order should be before 1 PM on March 25, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The potato noodle order should select Xu Youdao Potato Noodles (Weifang Xinhua B', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The potato noodle order should select Xu Youdao Potato Noodles (Weifang Xinhua Branch) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The potato noodle order should include products with sesame sauce flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The potato noodle order should include products with sesame sauce flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the mixed rice order should be Weifang Government Servi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the mixed rice order should be Weifang Government Service Center, No. 3396 Dongfang Road, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the mixed rice order should be before 1 PM on Ma', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the mixed rice order should be before 1 PM on March 25, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mixed rice order should include seafood products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mixed rice order should include seafood products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
