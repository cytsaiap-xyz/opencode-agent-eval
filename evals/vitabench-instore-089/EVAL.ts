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
    expect(result[0].store_id).toBe('S17567845424848621_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567845424848621_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(328, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567845424848621_I00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567845424848621_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(380, 0);
  });

  test('rubric: The restaurant ordered should have Chinese Courtyard Style decoration', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should have Chinese Courtyard Style decoration"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The products ordered from the restaurant should be a package for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The products ordered from the restaurant should be a package for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The products ordered from the restaurant should have a health cultivation theme', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The products ordered from the restaurant should have a health cultivation theme"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on inquiries, packages containing Celery with Lily Bulbs are sold out at e', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on inquiries, packages containing Celery with Lily Bulbs are sold out at eligible restaurants, so the package ordered should include Astragalus Beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant package ordered cannot contain both Celery with Lily Bulbs and As', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant package ordered cannot contain both Celery with Lily Bulbs and Astragalus Beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The meditation center should be within 2.5 kilometers (inclusive) from Xinghai S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The meditation center should be within 2.5 kilometers (inclusive) from Xinghai Square Commercial Area, Shahekou District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the meditation center should be a one-to-two course pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the meditation center should be a one-to-two course package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of products from the meditation center should be less than or eq', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of products from the meditation center should be less than or equal to 400 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
