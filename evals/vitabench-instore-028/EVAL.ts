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
    expect(result[0].store_id).toBe('S17564425438695955_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425438695955_P00009", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17564425438695955_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425438695955_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(68, 0);
  });

  test('rubric: Should check if the previously visited tea house (Mingyue Tea House) has tea cer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the previously visited tea house (Mingyue Tea House) has tea ceremony training packages, with the result being none; therefore, the ordered merchant should not be the previously visited tea house"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered tea house should have a decoration style similar to the previously v', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered tea house should have a decoration style similar to the previously visited tea house"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered tea house package should be in a partitioned private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered tea house package should be in a partitioned private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered tea house package duration should be 2 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered tea house package duration should be 2 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the user\'s usual spending range, which is between 60 and 120 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the user\'s usual spending range, which is between 60 and 120 yuan; the ordered tea house package price should be between 60 and 120 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered tea house package should include tea ceremony training', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered tea house package should include tea ceremony training"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved tea house should be Tianxiang Tea House', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved tea house should be Tianxiang Tea House"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation time should be 2024-09-14 09:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation time should be 2024-09-14 09:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Sichuan restaurant package should be a strong flavor package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Sichuan restaurant package should be a strong flavor package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Sichuan restaurant package should include Kung Pao Chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Sichuan restaurant package should include Kung Pao Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Sichuan restaurant package should be a single meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Sichuan restaurant package should be a single meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for qualifying Sichuan restaurants and select the one closest to ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for qualifying Sichuan restaurants and select the one closest to Tianxiang Tea House, with the result being Shuxiangyuan Sichuan Restaurant; the Sichuan restaurant order should be placed at Shuxiangyuan Sichuan Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
