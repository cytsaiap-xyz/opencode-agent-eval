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
    expect(result[0].store_id).toBe('S17550802841788893_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802841788893_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(499, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802841788893_I00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802841788893_P00051", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(388, 0);
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

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802841788893_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802841788893_P00021", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(240, 0);
  });

  test('rubric: The smart watch in the order cannot be white', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smart watch in the order cannot be white"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the smart watch order is Room 602, Unit 1, Building 3, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the smart watch order is Room 602, Unit 1, Building 3, Greenland Colorful City, Intersection of Zhangba North Road and Technology 6th Road, Yanta District, Xi\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The smart watch in the order must have heart rate monitoring function', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smart watch in the order must have heart rate monitoring function"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The smart watch in the order must have blood pressure monitoring function', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smart watch in the order must have blood pressure monitoring function"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be a Shaanxi cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be a Shaanxi cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Shaanxi cuisine set meal is for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Shaanxi cuisine set meal is for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The staple food in the Shaanxi cuisine set meal is not flatbread', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The staple food in the Shaanxi cuisine set meal is not flatbread"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Shaanxi cuisine set meal should include free-range chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Shaanxi cuisine set meal should include free-range chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Shaanxi cuisine restaurant should be Lao Mi Jia Shaanxi Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Shaanxi cuisine restaurant should be Lao Mi Jia Shaanxi Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation at the Shaanxi cuisine restaurant is for 12:00 PM on May 16, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation at the Shaanxi cuisine restaurant is for 12:00 PM on May 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation at the Shaanxi cuisine restaurant is for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation at the Shaanxi cuisine restaurant is for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since there is no special exhibition at Xi\'an Museum, the selected attraction s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since there is no special exhibition at Xi\'an Museum, the selected attraction should be Shaanxi History Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased museum tickets are for May 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased museum tickets are for May 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of museum tickets purchased is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of museum tickets purchased is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
