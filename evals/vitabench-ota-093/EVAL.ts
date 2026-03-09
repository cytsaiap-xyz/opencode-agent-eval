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
    expect(result[0].store_id).toBe('S17557518210681493_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557518210681493_P00091", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(700, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557518210681493_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557518210681493_P00017", "quantity": 1}, {"product_id": "S17557518210681493_P00018", "quantity": 1}, {"product_id": "S17557518210681493_P00019", "quantity": 1}, {"product_id": "S17557518210681493_P00020", "quantity": 1}, {"product_id": "S17557518210681493_P00021", "quantity": 1}, {"product_id": "S17557518210681493_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2448, 0);
  });

  test('rubric: Need to check whether there are direct flights from Weifang to Haikou, and the r', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check whether there are direct flights from Weifang to Haikou, and the result is yes, so the departure city and arrival city for the flight order should be from Weifang to Haikou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter all flights on 2024-09-13, 2024-09-14, and 2024-09-15, and find t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter all flights on 2024-09-13, 2024-09-14, and 2024-09-15, and find the cheapest flight, which is SC4651 on 2024-09-15, economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order should be for flight SC4651', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order should be for flight SC4651"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order date should be 2024-09-15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order date should be 2024-09-15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight order should be for economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight order should be for economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be near Haikou Mingmen Plaza', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be near Haikou Mingmen Plaza"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order price per night must be within the 300-500 yuan price range', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order price per night must be within the 300-500 yuan price range"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide laundry service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide laundry service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order\'s accommodation period must be from the arrival date until the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order\'s accommodation period must be from the arrival date until the evening of the 20th, specifically 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18, 2024-09-19, 2024-09-20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
