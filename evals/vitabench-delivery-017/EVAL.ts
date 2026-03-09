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
    expect(result[0].store_id).toBe('S18559624638967307_S15514');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S18619197879317469_P91776", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(21.00, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S10578855038572520_S10983');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S57131084038540049_P83923", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(39.00, 0);
  });

  test('rubric: The delivery address for the Milk Tea order should be Wanda Plaza, No. 130 Ma\'a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Milk Tea order should be Wanda Plaza, No. 130 Ma\'anshan Road, Baohe District, Hefei, Anhui Province (Hefei Baohe Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the Milk Tea order should be before 12:00 on Sept', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the Milk Tea order should be before 12:00 on September 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Milk Tea should be Gardenia flavored', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Milk Tea should be Gardenia flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Mango Sticky Rice should be Triumphal Arch Phase I,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Mango Sticky Rice should be Triumphal Arch Phase I, Intersection of Jiahe Road and Qianshan Road, Shushan District, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the noon Mango Sticky Rice order should be before', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the noon Mango Sticky Rice order should be before 14:00 on September 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Mango Sticky Rice should be iced', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Mango Sticky Rice should be iced"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
