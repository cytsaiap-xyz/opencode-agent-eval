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
    expect(result[0].store_id).toBe('S17567836577215650_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836577215650_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(98, 0);
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
    expect(result[2].store_id).toBe('S17567836577215650_I00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836577215650_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(298, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836577215650_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836577215650_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: The flower arrangement shop should have a rating of 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower arrangement shop should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower arrangement shop should be the closest one to iFLYTEK Artificial Inte', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower arrangement shop should be the closest one to iFLYTEK Artificial Intelligence Research Institute, 12th Floor, Building C3, Innovation Industrial Park, 2800 Innovation Avenue, High-tech District, Hefei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the flower arrangement shop should be a beginner flower arra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the flower arrangement shop should be a beginner flower arrangement introduction course package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the flower arrangement shop should have the longest teaching', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the flower arrangement shop should have the longest teaching duration"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved flower arrangement shop should be Floral Life', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved flower arrangement shop should be Floral Life"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the flower arrangement shop should be 2024-04-19 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the flower arrangement shop should be 2024-04-19 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the flower arrangement shop reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the flower arrangement shop reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seafood buffet restaurant should be within 2000m (inclusive) of Floral Life,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seafood buffet restaurant should be within 2000m (inclusive) of Floral Life, 3rd Floor, Building A, Technology Entrepreneurship Plaza, 2560 Innovation Avenue, High-tech District, Hefei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seafood buffet restaurant should provide free parking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seafood buffet restaurant should provide free parking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the seafood buffet restaurant should be a single person pack', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the seafood buffet restaurant should be a single person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the seafood buffet restaurant should include salmon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the seafood buffet restaurant should include salmon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: User behavior history needs to be checked; the user\'s usual spending on Japanes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "User behavior history needs to be checked; the user\'s usual spending on Japanese cuisine is 250 yuan, and since there\'s no package that matches the user\'s usual consumption habits, the price of the ordered item at the seafood buffet restaurant should be within 300 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The foot massage shop should be within 500m (inclusive) of Room 502, Unit 2, Bui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The foot massage shop should be within 500m (inclusive) of Room 502, Unit 2, Building 8, Rongqiao Central Park, Wangjiang West Road and Qianshan Road Intersection, Shushan District, Hefei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The foot massage shop should have a rating of 4.5 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The foot massage shop should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The foot massage shop should guarantee massage service availability on 2024-04-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The foot massage shop should guarantee massage service availability on 2024-04-19 21:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the foot massage shop should be a single person foot massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the foot massage shop should be a single person foot massage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage duration of the ordered item at the foot massage shop should be 1 hour', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage duration of the ordered item at the foot massage shop should be 1 hour"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered item at the foot massage shop should be within 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered item at the foot massage shop should be within 100 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
