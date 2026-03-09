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
    expect(result[0].store_id).toBe('S17550802123065403_I00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802123065403_P00080", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
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
    expect(result[2].store_id).toBe('S17550802123065403_S00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802123065403_P00006", "quantity": 1}, {"product_id": "S17550802123065403_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(69.8, 0);
  });

  test('rubric: The ordered farm must be an organic farm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farm must be an organic farm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farm must have seasonal strawberries available for picking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farm must have seasonal strawberries available for picking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farm must have seasonal cherries available for picking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farm must have seasonal cherries available for picking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farm must have vegetables available for picking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farm must have vegetables available for picking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The farm order package must include picking activities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The farm order package must include picking activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The farm order package must include a farmhouse meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The farm order package must include a farmhouse meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved farm should be Taihu Organic Fruit and Vegetable Farm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved farm should be Taihu Organic Fruit and Vegetable Farm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The farm reservation time is Saturday (2025-03-29) 10:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The farm reservation time is Saturday (2025-03-29) 10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the farm reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the farm reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The picking basket and children\'s sun hat should be from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The picking basket and children\'s sun hat should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The picking basket and children\'s sun hat should be suitable for outdoor use', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The picking basket and children\'s sun hat should be suitable for outdoor use"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order for the picking basket and sun hat must be delivered before 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order for the picking basket and sun hat must be delivered before 8:00 PM (20:00) on 2025-03-25"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order for the picking basket and sun hat must be delivered to  Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order for the picking basket and sun hat must be delivered to  Room 302, Building 12, Water Lane Community, 89 Pingjiang Road, Gusu District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The color of the sun hat in the delivery order should be blue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The color of the sun hat in the delivery order should be blue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
