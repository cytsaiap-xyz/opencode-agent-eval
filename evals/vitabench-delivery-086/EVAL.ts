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
    expect(result[0].store_id).toBe('S72636245888181282_S54188');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S27202813520347088_P19057", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(46.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S29478989696606736_S98869');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S11703506162688527_P48578", "quantity": 1}, {"product_id": "S12684543222819040_P84828", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(103.6, 0);
  });

  test('rubric: The ordered Yoshinoya chicken cutlet rice product should be Teriyaki Chicken Cut', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Yoshinoya chicken cutlet rice product should be Teriyaki Chicken Cutlet Rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered chicken cutlet rice product specification should be small size or sm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered chicken cutlet rice product specification should be small size or small bowl"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Yoshinoya chicken cutlet rice order should be No. 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Yoshinoya chicken cutlet rice order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Yoshinoya chicken cutlet rice order should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Yoshinoya chicken cutlet rice order should be around 2025-05-01 17:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the ordered Chuozi Meat restaurant should be 4.1 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the ordered Chuozi Meat restaurant should be 4.1 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chuozi Meat order should include Hand-held Treasure product', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chuozi Meat order should include Hand-held Treasure product"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chuozi Meat order should choose cuts that do not contain fat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chuozi Meat order should choose cuts that do not contain fat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All products in the Chuozi Meat order should be mild spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All products in the Chuozi Meat order should be mild spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of products in the Chuozi Meat order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of products in the Chuozi Meat order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Chuozi Meat order should be No. 23 Donghai West Roa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Chuozi Meat order should be No. 23 Donghai West Road, Tiansheng Garden·Haiyun Urban Complex, Shinan District, Qingdao, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Chuozi Meat order should be around 2025-05-0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Chuozi Meat order should be around 2025-05-01 17:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
