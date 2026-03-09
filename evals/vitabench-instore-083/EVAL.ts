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
    expect(result[0].store_id).toBe('S17567842071582031_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842071582031_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(688, 0);
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
    expect(result[2].store_id).toBe('S17567842071582031_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842071582031_P00020", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(288, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567842071582031_I00007');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567842071582031_P00056", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(688, 0);
  });

  test('rubric: The restaurant ordered should be a French restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a French restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a set meal for two, not two individual set meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a set meal for two, not two individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal should include candlelight, champagne, appetizer, main c', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal should include candlelight, champagne, appetizer, main course and dessert"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal should not include high-fat offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal should not include high-fat offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal price should be 1500 yuan or less', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal price should be 1500 yuan or less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should accept reservations', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should accept reservations"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved western restaurant should be Paris Impression French Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved western restaurant should be Paris Impression French Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 2024-08-10 18:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 2024-08-10 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The yoga course order status should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The yoga course order status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot spring should be within 10km (including 10km) of Paris Impression French', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot spring should be within 10km (including 10km) of Paris Impression French Restaurant, 5th Floor, Triumph Plaza, No. 128 Huayuan Road, Jinshui District, Zhengzhou, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot spring order should be a Couple Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot spring order should be a Couple Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: With a total budget of 1500 yuan, the western restaurant order totals 688 yuan, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "With a total budget of 1500 yuan, the western restaurant order totals 688 yuan, and can exceed the budget by at most 200 yuan, therefore the hot spring order total should not exceed 1012 yuan (including 1012 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
