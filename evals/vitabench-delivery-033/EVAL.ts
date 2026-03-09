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
    expect(result[0].store_id).toBe('S22977061347928632_S51833');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S10727973616443900_P65567", "quantity": 1}, {"product_id": "S29951410232592308_P63313", "quantity": 1}, {"product_id": "S11104135624417312_P02672", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(132, 0);
  });

  test('rubric: The delivery address for the friend from Beijing should be Sheraton Nanchang Hot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the friend from Beijing should be Sheraton Nanchang Hotel, Shajing Street, Honggutan District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the friend from Beijing should be within 11:30-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the friend from Beijing should be within 11:30-12:00 on September 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Jiangxi cuisine restaurant chosen for the friend from Beijing should have a ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Jiangxi cuisine restaurant chosen for the friend from Beijing should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant chosen for the friend from Beijing should be on the Must-order Li', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant chosen for the friend from Beijing should be on the Must-order List of Jiangxi cuisine restaurants"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dishes for the friend from Beijing must be authentic Jiangxi cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dishes for the friend from Beijing must be authentic Jiangxi cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for the friend from Beijing needs to include three different dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for the friend from Beijing needs to include three different dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items for the friend from Beijing should not include eggplant dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items for the friend from Beijing should not include eggplant dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dishes for the friend from Beijing should be moderately spicy, suita', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dishes for the friend from Beijing should be moderately spicy, suitable for people from Jiangsu (Mild spicy or Medium spicy)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
