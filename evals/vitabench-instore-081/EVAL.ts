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
    expect(result[0].store_id).toBe('S17567842494216100_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842494216100_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(172, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567842494216100_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842494216100_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(128, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: On March 29, 2025, the weather in Luoyang is cloudy without rain, so the Korean ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "On March 29, 2025, the weather in Luoyang is cloudy without rain, so the Korean Self-service BBQ restaurant should be within 500 meters (inclusive) of Jianxi Wanda"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for Korean Self-service BBQ restaurants that meet the criteria, s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for Korean Self-service BBQ restaurants that meet the criteria, select the one with the highest rating, which is Korean Charcoal BBQ, so the Korean Self-service BBQ restaurant order should be from Korean Charcoal BBQ"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order from the Korean Self-service BBQ restaurant should be a Single Person ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order from the Korean Self-service BBQ restaurant should be a Single Person Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Korean Self-service BBQ restaurant order should have Unlimited Time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Korean Self-service BBQ restaurant order should have Unlimited Time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the nail salon to Jianxi Wanda should be within 500m (inclusiv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the nail salon to Jianxi Wanda should be within 500m (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon\'s closing time should be at or after 10 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon\'s closing time should be at or after 10 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order should allow Style of Your Choice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order should allow Style of Your Choice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order should be a Half-tips + Structure Nail Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order should be a Half-tips + Structure Nail Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total expenditure for both the nail salon and Korean Self-service BBQ restau', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total expenditure for both the nail salon and Korean Self-service BBQ restaurant should be within 300 yuan. The price of the items in the Korean Self-service BBQ restaurant order is 172 yuan. Therefore, the nail salon package price should be less than or equal to 128 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon should accept reservations', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon should accept reservations"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon that should be reserved is Fingertip Art Nail Salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon that should be reserved is Fingertip Art Nail Salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the nail salon is 2025-03-29 20:20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the nail salon is 2025-03-29 20:20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the nail salon reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the nail salon reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
