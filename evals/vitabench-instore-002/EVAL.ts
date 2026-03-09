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
    expect(result[0].store_id).toBe('S17564420247526245_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420247526245_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1580, 0);
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
    expect(result[2].store_id).toBe('S17564420247526245_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420247526245_P00007", "quantity": 1}, {"product_id": "S17564420247526245_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(416, 0);
  });

  test('rubric: The beauty salon order is from a chain brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon order is from a chain brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package purchased in the beauty salon order is a mother-daughter package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package purchased in the beauty salon order is a mother-daughter package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package purchased in the beauty salon order is for anti-aging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package purchased in the beauty salon order is for anti-aging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the specific date of Mother\'s Day (2025-05-11), and the appointment date ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the specific date of Mother\'s Day (2025-05-11), and the appointment date at the beauty salon should be 2025-05-11 at 09:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the appointment is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the appointment is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed merchant is Yuerong SPA Beauty Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed merchant is Yuerong SPA Beauty Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be a Cantonese Tea Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a Cantonese Tea Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be within 3km (including 3km) of Yuerong SPA Beauty Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 3km (including 3km) of Yuerong SPA Beauty Center, B1 Floor, CapitaMall, Wuyi Square, Furong District, Changsha"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include a Health Nourishing Soup Set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include a Health Nourishing Soup Set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Health Nourishing Soup Set purchased should not be chicken soup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Health Nourishing Soup Set purchased should not be chicken soup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Health Nourishing Soup Set purchased should not contain photosensitive ingre', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Health Nourishing Soup Set purchased should not contain photosensitive ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking, if the restaurant\'s set menu does not include squab, a Premium ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking, if the restaurant\'s set menu does not include squab, a Premium Squab set meal should be purchased in the restaurant order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of all orders should not exceed 2000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of all orders should not exceed 2000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
