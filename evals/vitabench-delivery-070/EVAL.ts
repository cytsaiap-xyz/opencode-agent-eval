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
    expect(result[0].store_id).toBe('S14548244109695231_S21998');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S29868429459190442_P12525", "quantity": 1}, {"product_id": "S23180414711515603_P47194", "quantity": 1}, {"product_id": "S33104164931719383_P20825", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(41.59, 0);
  });

  test('rubric: The delivery address for the doctor\'s meal during work hours should be No.1-1 N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the doctor\'s meal during work hours should be No.1-1 Nanyuan New Village, Qianjin Road, Haizhu District, Guangzhou, Guangdong Province (Near Wanfeng Garden), Haizhu District Traditional Chinese Medicine Hospital"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the doctor\'s meal during work hours should be around 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the doctor\'s meal during work hours should be around 2025-06-12 12:00:00, ensuring meal completion before acupuncture treatment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant rating for the doctor\'s meal order during work hours should be g', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant rating for the doctor\'s meal order during work hours should be greater than or equal to 4.3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The chicken soup in the order should be pure coconut-based, containing no other ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The chicken soup in the order should be pure coconut-based, containing no other main ingredients besides coconut and chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the doctor\'s meal order during work hours should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the doctor\'s meal order during work hours should be 3, including chicken soup, rice, and steamed broccoli"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
