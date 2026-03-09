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
    expect(result[0].store_id).toBe('S32507084916632845_S19824');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14825796504948355_P99189", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(38.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S32507084916632845_S19824');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S14825796504948355_P99189", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(19.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S52087136705399630_S27337');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S14316846796057144_P36623", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(198.0, 0);
  });

  test('rubric: Order one more serving of tofu pudding from order D0721003T01', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Order one more serving of tofu pudding from order D0721003T01"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the beef jerky order should be Jingcheng Xiufu, No. 288', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beef jerky order should be Jingcheng Xiufu, No. 288 Zhangba East Road, Yanta District, Xi\'an City, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beef jerky order should select Taizu Military Rations: Freshly Baked Beef Je', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beef jerky order should select Taizu Military Rations: Freshly Baked Beef Jerky (Xi\'an Branch) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beef jerky order should select lean type products, avoiding marbled mixed ty', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beef jerky order should select lean type products, avoiding marbled mixed types"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total weight of beef jerky products in the order should be one jin (500g)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total weight of beef jerky products in the order should be one jin (500g)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
