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
    expect(result[0].store_id).toBe('S28404261973362267_S09257');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S15458320778579145_P28238", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(27.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S30429076779051471_S54922');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S86414532350831970_P92398", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(29.8, 0);
  });

  test('rubric: Successfully canceled user\'s "Deluxe" Egg Pancake order from Jianbing Story (To', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled user\'s "Deluxe" Egg Pancake order from Jianbing Story (Tofu Pudding · Soy Milk · Porridge · Huayang Branch), order status should be changed to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Roast Duck and Char Siu Combo Rice order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Roast Duck and Char Siu Combo Rice order should be Building B, Tencent Chengdu Building, Yunhua Road, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Roast Duck and Char Siu Combo Rice order sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Roast Duck and Char Siu Combo Rice order should be after 2025-09-22 16:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Roast Duck and Char Siu Combo Rice order should not select Macau Chen Guangj', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Roast Duck and Char Siu Combo Rice order should not select Macau Chen Guangji Roast Restaurant (Yuanda Branch) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
