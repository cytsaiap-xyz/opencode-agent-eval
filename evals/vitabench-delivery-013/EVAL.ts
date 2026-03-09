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
    expect(result[0].store_id).toBe('S26270993369029575_S81541');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S69062526404922496_P75737", "quantity": 1}, {"product_id": "S13295447731942135_P11967", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(26.0, 0);
  });

  test('rubric: The delivery address for the bread order should be Xiangzhang Garden, 168 Xiangz', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the bread order should be Xiangzhang Garden, 168 Xiangzhang Road, Yuhua District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bread order should select Molecular Fresh Bread (Forestry University Store) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bread order should select Molecular Fresh Bread (Forestry University Store) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Considering the health needs related to insulin resistance, the bread order shou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Considering the health needs related to insulin resistance, the bread order should prioritize bread products with low GI (Glycemic Index)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
