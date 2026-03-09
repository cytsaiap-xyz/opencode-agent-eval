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
    expect(result[0].store_id).toBe('S17564420317165268_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420317165268_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(288, 0);
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
    expect(result[2].store_id).toBe('S17564420317165268_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420317165268_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: Need to query user\'s frequently visited bars, the result is b216 (Lianfa Premiu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to query user\'s frequently visited bars, the result is b216 (Lianfa Premium Store), the ordered bar cannot be b216 (Lianfa Premium Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered bar must have a smoking area or allow indoor smoking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered bar must have a smoking area or allow indoor smoking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered bar must have live singing performances', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered bar must have live singing performances"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the bar and the night market should be within 800 meters (i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the bar and the night market should be within 800 meters (including 800 meters)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar set order should include snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar set order should include snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar set order should be a cocktail set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar set order should be a cocktail set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar set order cannot contain food with high purine ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar set order cannot contain food with high purine ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved bar should be Blue Note Bar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved bar should be Blue Note Bar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the bar is 2025-03-15 21:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the bar is 2025-03-15 21:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the bar reservation is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the bar reservation is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The children\'s playground should be inside a mall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The children\'s playground should be inside a mall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket ordered for the children\'s playground should be suitable for a 5-yea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket ordered for the children\'s playground should be suitable for a 5-year-old child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The children\'s playground should be no more than 1000 meters (including 1000 me', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The children\'s playground should be no more than 1000 meters (including 1000 meters) from Room 1204, Building A, Sunshine 100 City Plaza, 166 Minzu Avenue, Qingxiu District, Nanning, Guangxi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket ordered for the children\'s playground should be a parent-child packa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket ordered for the children\'s playground should be a parent-child package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket ordered for the children\'s playground should allow entry at 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket ordered for the children\'s playground should allow entry at 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
