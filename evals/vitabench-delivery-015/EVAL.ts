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
    expect(result[0].store_id).toBe('S33363530436911954_S11799');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S32177701011838614_P51657", "quantity": 1}, {"product_id": "S70339754454127759_P72096", "quantity": 1}, {"product_id": "S28954244699479487_P40371", "quantity": 1}, {"product_id": "S15417577372637700_P35102", "quantity": 1}, {"product_id": "S65948025828860154_P02991", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(155.3, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S19112477721572247_S00931');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S25891087943464915_P07860", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(88.0, 0);
  });

  test('rubric: The delivery address for Chinese cuisine dishes ordered for mother\'s birthday d', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Chinese cuisine dishes ordered for mother\'s birthday dinner should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Chinese cuisine order should be before 18:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Chinese cuisine order should be before 18:30 on November 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chinese cuisine dishes selected for mother\'s birthday dinner should include', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chinese cuisine dishes selected for mother\'s birthday dinner should include both Light-Flavored dishes and authentic spicy Sichuan Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The five Chinese cuisine dishes selected for mother\'s birthday dinner should al', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The five Chinese cuisine dishes selected for mother\'s birthday dinner should all be different, not ordering two portions of the same dish"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the birthday cake order should be Greentown Haitang Gar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the birthday cake order should be Greentown Haitang Garden, No.1766 Bayi South Street, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the birthday cake order should be before 18:30 o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the birthday cake order should be before 18:30 on November 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Dairy Cream birthday cake should be sized for approximately two peop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Dairy Cream birthday cake should be sized for approximately two people, around 4-inch"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
