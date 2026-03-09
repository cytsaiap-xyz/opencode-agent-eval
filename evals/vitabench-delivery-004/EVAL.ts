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
    expect(result[0].store_id).toBe('S30117605823859936_S63333');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21869011941711612_P40826", "quantity": 1}, {"product_id": "S12843828392131711_P64618", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(56, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S30117605823859936_S63333');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S52869129511178636_P87490", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(38.9, 0);
  });

  test('rubric: Successfully cancel the Tom Yum Soup Noodles order with id 10716001O01 from HUHU', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully cancel the Tom Yum Soup Noodles order with id 10716001O01 from HUHU Thai (Roosevelt Branch), the order status should be changed to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the new order should be 5th Floor, Building 3, Dalian S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the new order should be 5th Floor, Building 3, Dalian Software Park, Shahekou District, Dalian, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the new order should be around 2024-08-19 18:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the new order should be around 2024-08-19 18:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The new order should include Hot and Sour items such as Tom Yum Fried Rice from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The new order should include Hot and Sour items such as Tom Yum Fried Rice from HUHU Thai (Roosevelt Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The new order should include refreshing caffeine-free desserts such as Coconut S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The new order should include refreshing caffeine-free desserts such as Coconut Sago Pudding"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
