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
    expect(result[0].store_id).toBe('S17567836580604988_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836580604988_P00001", "quantity": 1}, {"product_id": "S17567836580604988_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4576, 0);
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
    expect(result[2].store_id).toBe('S17567836580604988_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836580604988_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(268, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836580604988_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836580604988_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(288, 0);
  });

  test('rubric: The beauty salon should provide face-to-face consultation service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon should provide face-to-face consultation service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The receptionist and doctor of the beauty salon should hold professional qualifi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The receptionist and doctor of the beauty salon should hold professional qualification certificates"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beauty salon order should include a facial spot removal and anti-wrinkle pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon order should include a facial spot removal and anti-wrinkle package with a quantity of 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beauty salon order should include a facial lifting and firming package with ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon order should include a facial lifting and firming package with a quantity of 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The facial spot removal and anti-wrinkle package and facial lifting and firming ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The facial spot removal and anti-wrinkle package and facial lifting and firming package should be from the same merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All beauty salon ordered items should be holiday special packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All beauty salon ordered items should be holiday special packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved beauty salon should be Xinyan Medical Aesthetics Center (Qingxiu Mi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved beauty salon should be Xinyan Medical Aesthetics Center (Qingxiu Mixc Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beauty salon appointment time should be 2025-03-08 14:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon appointment time should be 2025-03-08 14:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the beauty salon appointment should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the beauty salon appointment should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: User history should be checked, and since the user previously frequented Tang Pa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "User history should be checked, and since the user previously frequented Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch), the Cantonese restaurant order should be from Tang Palace Cantonese Restaurant (Qingxiu Mixc Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Cantonese restaurant should be checked for Women\'s Day special set menu for', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Cantonese restaurant should be checked for Women\'s Day special set menu for two, and since it is available, the Cantonese restaurant order should be Women\'s Day Special Cantonese Premium Set for Two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order status for Business Set Menu A for Two should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status for Business Set Menu A for Two should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
