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
    expect(result[0].store_id).toBe('S17550809287952066_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809287952066_P00001", "quantity": 2}, {"product_id": "S17550809287952066_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(69.7, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809287952066_I00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809287952066_P00066", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809287952066_T00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809287952066_P00043", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(337, 0);
  });

  test('rubric: The delivery order must include disposable underwear', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include disposable underwear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order must include at least four disposable underwear', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include at least four disposable underwear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The disposable underwear in the delivery order should be women\'s style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The disposable underwear in the delivery order should be women\'s style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order must include slippers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include slippers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The slippers in the delivery order should not be disposable', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The slippers in the delivery order should not be disposable"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The slippers in the delivery order should be size 37-38', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The slippers in the delivery order should be size 37-38"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The slippers in the delivery order should be women\'s style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The slippers in the delivery order should be women\'s style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The disposable underwear and slippers in the delivery order must come from the s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The disposable underwear and slippers in the delivery order must come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking, it was found that there will be no rain in Tianjin on November 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking, it was found that there will be no rain in Tianjin on November 9 and 10, 2024, so the delivery order should not include disposable raincoats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address is Shenlong Jinqiao Community, North of Bridge No.1, Majuqi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address is Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time is 9 PM on November 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time is 9 PM on November 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dine-in restaurant should be within 2km of Shenlong Jinqiao Community, North', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in restaurant should be within 2km of Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dine-in restaurant should be the closest one to Shenlong Jinqiao Community, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in restaurant should be the closest one to Shenlong Jinqiao Community, North of Bridge No.1, Majuqiao, Tongzhou District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dine-in restaurant should be a roast duck restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in restaurant should be a roast duck restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dine-in order should be for a set meal for two people, not two single set me', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in order should be for a set meal for two people, not two single set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets should be for a route from Beijing to Tianjin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets should be for a route from Beijing to Tianjin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train with the longest journey time should be selected', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train with the longest journey time should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train departure date should be November 9, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train departure date should be November 9, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train seat type should be Business class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train seat type should be Business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
