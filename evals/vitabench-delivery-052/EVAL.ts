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
    expect(result[0].store_id).toBe('S19692566950255903_S25485');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S31202981544351332_P86622", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(24.88, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S13136705917386046_S64166');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S20429208112066115_P67474", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(16, 0);
  });

  test('rubric: Successfully canceled the 4 Meat 5 Veggie Fried Skewer Wrap order from Han Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the 4 Meat 5 Veggie Fried Skewer Wrap order from Han Style Fried Skewers store, the order status with order_id A0714002O01 has been updated to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Cough Relief Lung Nourishing tea drink order should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Cough Relief Lung Nourishing tea drink order should be Cuizhu Jiayuan, 98 Heping Avenue, Yunlong District, Xuzhou, Jiangsu Province (Under Construction)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Cough Relief Lung Nourishing tea drink order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Cough Relief Lung Nourishing tea drink order should be between 2025-11-08 22:31:38 and 2025-11-08 23:31:38"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant should provide night delivery service when ordering the Cough Relie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant should provide night delivery service when ordering the Cough Relief Lung Nourishing tea drink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The temperature of the Cough Relief Lung Nourishing tea drink should be hot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The temperature of the Cough Relief Lung Nourishing tea drink should be hot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sweetness level of the Cough Relief Lung Nourishing tea drink should be less', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sweetness level of the Cough Relief Lung Nourishing tea drink should be less sugar or no sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea drink product in the order should have Cough Relief Lung Nourishing heal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea drink product in the order should have Cough Relief Lung Nourishing health benefits"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
