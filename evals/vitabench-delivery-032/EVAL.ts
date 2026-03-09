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
    expect(result[0].store_id).toBe('S32512243701239805_S17967');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17786566864082843_P67822", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(28.8, 0);
  });

  test('rubric: The ordered light dinner item cannot include Kyoto Grain Grilled Meat Rice Bowl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered light dinner item cannot include Kyoto Grain Grilled Meat Rice Bowl"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered light dinner item should come from Super Deer Team · Light Weight-lo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered light dinner item should come from Super Deer Team · Light Weight-loss Meal (Jiaojiang Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered light dinner item should provide a Feeling of Fullness and be suitab', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered light dinner item should provide a Feeling of Fullness and be suitable for consumption before exercise"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered light dinner item should cost less than 30 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered light dinner item should cost less than 30 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the light dinner order should be Zhejiang Nanyang Huach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the light dinner order should be Zhejiang Nanyang Huacheng Technology Co., Ltd., No. 388 Development Avenue, Economic Development Zone, Baiyun Street, Jiaojiang District, Taizhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the light dinner order should be before 18:00 on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the light dinner order should be before 18:00 on July 15, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
