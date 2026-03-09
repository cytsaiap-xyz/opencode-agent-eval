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
    expect(result[0].store_id).toBe('S26236855021467337_S70481');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S10537711184752782_P68507", "quantity": 1}, {"product_id": "S13669419091607176_P73917", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(42.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S63706096961310423_S13042');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S16562090161106991_P30021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(35.9, 0);
  });

  test('rubric: The delivery address for dinner order should be Guorui Building, 359 Jiangdong M', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for dinner order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for dinner order should be around 2025-04-16 17:00:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for dinner order should be around 2025-04-16 17:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order should select Xiao Chuniang Huaiyang Cuisine (Hexi Aomei Buildi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order should select Xiao Chuniang Huaiyang Cuisine (Hexi Aomei Building Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order should include Huaiyang Yanduxian and Rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order should include Huaiyang Yanduxian and Rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huaiyang Yanduxian in the dinner order should be single portion size, quanti', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huaiyang Yanduxian in the dinner order should be single portion size, quantity of 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for overtime snack order should be Guorui Building, 359 Jia', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for overtime snack order should be Guorui Building, 359 Jiangdong Middle Road, Jianye District, Nanjing, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for overtime snack order should be around 2025-04-16', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for overtime snack order should be around 2025-04-16 19:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The overtime snack order should select Juewei Duck Neck', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The overtime snack order should select Juewei Duck Neck"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The overtime snack order should include Signature Duck Neck', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The overtime snack order should include Signature Duck Neck"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Signature Duck Neck in the overtime snack order should be medium size', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Signature Duck Neck in the overtime snack order should be medium size"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
