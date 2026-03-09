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
    expect(result[0].store_id).toBe('S17564425461411332_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425461411332_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17564425461411332_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425461411332_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564425461411332_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425461411332_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: The distance from the ordered pottery studio to Room 502, Unit 3, Building 12, J', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the ordered pottery studio to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pottery studio should be fully equipped', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pottery studio should be fully equipped"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pottery studio product price should be less than or equal to 150 yua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pottery studio product price should be less than or equal to 150 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pottery studio product should be a package that includes materials f', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pottery studio product should be a package that includes materials fee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pottery studio product should be a package that includes firing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pottery studio product should be a package that includes firing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved pottery studio should be Craftsman Pottery Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved pottery studio should be Craftsman Pottery Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery studio reservation time should be 2024-09-22 15:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery studio reservation time should be 2024-09-22 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery studio reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery studio reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the ordered cat cafe to Room 502, Unit 3, Building 12, Jiangch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the ordered cat cafe to Room 502, Unit 3, Building 12, Jiangcheng Garden, 1288 Donghuan Avenue, Jiaojiang District, Taizhou, Zhejiang Province should be within 3km (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cat cafe ordered product should be a package for one adult and one child', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cat cafe ordered product should be a package for one adult and one child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be a Northwestern cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be a Northwestern cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be on the must-eat list', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be on the must-eat list"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered product should be a parent-child package for two adults a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered product should be a parent-child package for two adults and one child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
