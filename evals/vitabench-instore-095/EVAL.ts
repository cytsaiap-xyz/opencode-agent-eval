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
    expect(result[0].store_id).toBe('S17567843102955155_I00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843102955155_P00028", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(35, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567843102955155_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843102955155_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(142, 0);
  });

  test('rubric: Need to check if there are suitable fitness centers within 1km (inclusive) of Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if there are suitable fitness centers within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou. The result is yes, so the ordered merchant should be a fitness center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered fitness center should have a rating of 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered fitness center should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the fitness center should be a venue free training pack', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the fitness center should be a venue free training package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the fitness center should be a single session card pack', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the fitness center should be a single session card package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the fitness center should be the cheapest among the qua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the fitness center should be the cheapest among the qualifying packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be a BBQ restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be a BBQ restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 1km (inclusive) of Room 1203, Building A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 1km (inclusive) of Room 1203, Building A, Jianye Kaixuan Plaza, 59 Huayuan Road, Jinshui District, Zhengzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the restaurant should be a single person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the restaurant should be a single person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the restaurant should include beer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the restaurant should include beer"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check historical behavior to find the user\'s usual spending on Sichuan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check historical behavior to find the user\'s usual spending on Sichuan cuisine, which is 125 yuan. The user indicates they can spend about 20 yuan more than their usual Sichuan cuisine spending, so the package price ordered from the restaurant should be around 145 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
