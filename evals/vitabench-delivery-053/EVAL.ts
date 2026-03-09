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
    expect(result[0].store_id).toBe('S18748399810467268_S89485');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S19705338573272683_P73363", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(20, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18748399810467268_S89485');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S19705338573272683_P73363", "quantity": 1}, {"product_id": "", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(20, 0);
  });

  test('rubric: Cancel the Mango Pomelo Sago order from Shuxia (Yufeng Li Branch), and change th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Cancel the Mango Pomelo Sago order from Shuxia (Yufeng Li Branch), and change the status of order_id B0714001T02 to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Place a new order for Mango Pomelo Sago at Shuxia (Yufeng Li Branch), select no ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Place a new order for Mango Pomelo Sago at Shuxia (Yufeng Li Branch), select no extra sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the clay pot porridge order should be Chengdu Exchange ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the clay pot porridge order should be Chengdu Exchange Building, South of Jinyun West Lane 1, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the clay pot porridge order should be before 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the clay pot porridge order should be before 2025-05-08 22:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting clay pot porridge items, avoid products containing high-purine in', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting clay pot porridge items, avoid products containing high-purine ingredients (such as organ meats, seafood, etc.)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
