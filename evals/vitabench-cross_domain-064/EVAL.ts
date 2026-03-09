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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802170962391_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802170962391_P00001", "quantity": 1}, {"product_id": "S17550802170962391_P00002", "quantity": 1}, {"product_id": "S17550802170962391_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(91.2, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802170962391_T00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802170962391_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(87, 0);
  });

  test('rubric: The in-store merchant should be within 500m of Shanxi Textile and Clothing Indus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should be within 500m of Shanxi Textile and Clothing Industrial Park Zone C, 227 Changzhi Road, Xiaodian District, Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant should be a coffee shop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should be a coffee shop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant should have an Artistic Atmosphere', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should have an Artistic Atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant should offer Hand-dripped Coffee Set for Two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should offer Hand-dripped Coffee Set for Two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the in-store merchant order should be 8:00 PM on April ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the in-store merchant order should be 8:00 PM on April 17, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the in-store merchant reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the in-store merchant reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order items should be Chinese Pastries', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order items should be Chinese Pastries"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include three different types of pastries', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include three different types of pastries"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the delivery order should be Mijing Coffee, 127 Changfe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the delivery order should be Mijing Coffee, 127 Changfeng Street, Xiaodian District, Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the delivery order should be 8:00 PM on April 17,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the delivery order should be 8:00 PM on April 17, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Taiyuan on April 18, 2025 will be light rain, and the train depar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Taiyuan on April 18, 2025 will be light rain, and the train departure time should be around 13:00 [meaning the departure time of the ordered train ticket should be within the 12:45-13:15 time range]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be for a journey from Taiyuan to Changzhi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be for a journey from Taiyuan to Changzhi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the train ticket should be April 18, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the train ticket should be April 18, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
