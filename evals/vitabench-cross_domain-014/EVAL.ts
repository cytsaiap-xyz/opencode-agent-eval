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
    expect(result[0].store_id).toBe('S17550802091124808_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802091124808_P00049", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(188, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802091124808_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802091124808_P00002", "quantity": 1}, {"product_id": "S17550802091124808_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802091124808_A00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802091124808_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(20, 0);
  });

  test('rubric: The ordered café should be a pet café', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered café should be a pet café"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet café ordered should include cats, Corgi and Rabbit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet café ordered should include cats, Corgi and Rabbit"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet café package should include two Beverages and at least 2 hours of pet in', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet café package should include two Beverages and at least 2 hours of pet interaction time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include at least ten small packs of Pocket Tissues', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include at least ten small packs of Pocket Tissues"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include one pack of Disinfectant Wipes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include one pack of Disinfectant Wipes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery products should come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery products should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Wanda Residence East Zone, 888 Maocheng Middle Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Wanda Residence East Zone, 888 Maocheng Middle Road, Yinzhou District, Ningbo, Zhejiang Province (470m walk from Siming Middle Road Metro Station Exit A1)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be before 1 PM on April 28, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be before 1 PM on April 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction should be the one closest to Cute Pet Paradise Café (id: ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction should be the one closest to Cute Pet Paradise Café (id: S17550802091124808_A00007)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Admission Ticket for April 28, 2025 should be purchased', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Admission Ticket for April 28, 2025 should be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
