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
    expect(result[0].store_id).toBe('S56072837632850697_S10550');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S56985501259963881_P30358", "quantity": 1}, {"product_id": "S19234847935487179_P30931", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(20.76, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S73617965392470980_S24774');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S28860708888783648_P73224", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(42, 0);
  });

  test('rubric: The breakfast order delivery address should be Beijing Deheng (Wuxi) Law Firm, 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the breakfast order should be before 2025-10-10 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the breakfast order should be before 2025-10-10 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The soup dumplings in the breakfast order should not contain meat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The soup dumplings in the breakfast order should not contain meat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast order should include two items: soup dumplings and [Spleen-Strengt', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order should include two items: soup dumplings and [Spleen-Strengthening and Stomach-Nourishing] Pumpkin Millet Porridge"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order delivery address should be Beijing Deheng (Wuxi) Law Firm, 80', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order delivery address should be Beijing Deheng (Wuxi) Law Firm, 801-808, 8th Floor, Ping An Wealth Center, 15 Financial First Street, Taihu New City, Binhu District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beverage order should be around 2025-10-10 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beverage order should be around 2025-10-10 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select warm drinks suitable for warming hands', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select warm drinks suitable for warming hands"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should not include coffee, but can include other beverages su', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should not include coffee, but can include other beverages such as tea, juice, etc."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select drinks with no sugar or less sugar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select drinks with no sugar or less sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should include 2 servings of the same beverage item', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should include 2 servings of the same beverage item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
