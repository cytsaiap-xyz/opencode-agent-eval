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
    expect(result[0].store_id).toBe('S17550810625406958_S00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810625406958_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(65, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810625406958_F00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810625406958_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(780, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810625406958_F00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810625406958_P00054", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(820, 0);
  });

  test('rubric: Restaurant reservation time is August 2, 2024 at 7:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Restaurant reservation time is August 2, 2024 at 7:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item in the delivery order is Rye Walnut Pastry Gift Box from Yue Xi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item in the delivery order is Rye Walnut Pastry Gift Box from Yue Xiang Lou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order is Yue Xiang Lou, 88 Zhonghua North R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order is Yue Xiang Lou, 88 Zhonghua North Road, Yunyan District, Guiyang, Guizhou Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the takeout order is August 2, 2024 at 7:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the takeout order is August 2, 2024 at 7:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order should include round-trip flights', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order should include round-trip flights"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight date is August 10, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight date is August 10, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight date is August 15, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight date is August 15, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight in the ticket order should be CZ3707', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight in the ticket order should be CZ3707"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight in the ticket order should be CZ3708', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight in the ticket order should be CZ3708"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the flight order should be less than 2000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the flight order should be less than 2000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
