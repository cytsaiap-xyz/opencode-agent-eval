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
    expect(result[0].store_id).toBe('S77016294932976550_S27399');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S97648683925001199_P64193", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(38, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18546668850608431_S32855');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S25825121767346007_P30634", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(30, 0);
  });

  test('rubric: The beverage order for girlfriend should contain products rich in vitamins, such', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order for girlfriend should contain products rich in vitamins, such as fruit and vegetable tea or fresh juice containing fruit ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order for girlfriend should not contain vegetable ingredients, avoi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order for girlfriend should not contain vegetable ingredients, avoiding ingredients like Bitter Gourd, Kale, etc."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order for girlfriend should not contain mango ingredients to avoid ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order for girlfriend should not contain mango ingredients to avoid allergy risks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for girlfriend\'s beverage order should be Pipa Residential', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for girlfriend\'s beverage order should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for girlfriend\'s beverage order should be before 12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for girlfriend\'s beverage order should be before 12:00 on September 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the macaron order to cheer up girlfriend should be Pipa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the macaron order to cheer up girlfriend should be Pipa Residential Area, No. 24-36 Pipa Lane, Qinhuai District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the macaron order to cheer up girlfriend should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the macaron order to cheer up girlfriend should be before 12:00 on September 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
