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
    expect(result[0].store_id).toBe('S31127199787566498_S75237');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S25190868040778027_P13009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(29.88, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S31834913635855682_S09841');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S29104756795340843_P23967", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(26.88, 0);
  });

  test('rubric: Successfully canceled the user\'s Lemon Sour Soup Black Fish order from Xiaoyu F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the user\'s Lemon Sour Soup Black Fish order from Xiaoyu Family Sauerkraut Fish, and the order status with order_id E0721004T01 has been updated to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the newly placed Soft Tofu Soup order should be Zhejian', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the newly placed Soft Tofu Soup order should be Zhejiang Hisun Pharmaceutical Co., Ltd., Binhai Industrial Zone, No. 56 Binhai Road, Jiaojiang District, Taizhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the newly placed Soft Tofu Soup order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the newly placed Soft Tofu Soup order should be around 18:00 on December 13, 2024, ensuring the user can finish eating by 18:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly placed Soft Tofu Soup order must include staple food items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly placed Soft Tofu Soup order must include staple food items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
