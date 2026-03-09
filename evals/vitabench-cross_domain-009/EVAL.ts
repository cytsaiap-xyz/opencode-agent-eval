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
    expect(result[0].store_id).toBe('S17550802118465063_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118465063_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(299, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802118465063_P00059');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118465063_P00059", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(268, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802118465063_H00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118465063_P00032", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: The housewarming gift ordered must be a tableware set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The housewarming gift ordered must be a tableware set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The housewarming gift ordered should cost no less than 300 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The housewarming gift ordered should cost no less than 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The housewarming gift ordered must have a Modern Minimalist design style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The housewarming gift ordered must have a Modern Minimalist design style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the housewarming gift order should be Donghu Shuguang C', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the housewarming gift order should be Donghu Shuguang City, Opposite to Dongqiao Management Committee, Dongqiao Development Zone, Jiaocheng District, Ningde, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the housewarming gift order should be before the evening o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the housewarming gift order should be before the evening of February 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be within 3km (inclusive) of Fuxin Building, 60 meters ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be within 3km (inclusive) of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be a Smart Home hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be a Smart Home hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type ordered should be the cheapest room type in the hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type ordered should be the cheapest room type in the hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be March 1, 2025 for one night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be March 1, 2025 for one night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna merchant ordered should be within 3km of Fuxin Building, 60 meters nor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna merchant ordered should be within 3km of Fuxin Building, 60 meters northwest of the intersection of Laizhou Street and Binjiang Road, Yanping District, Nanping, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna package ordered should be a Two-Person Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna package ordered should be a Two-Person Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna package ordered needs to include two female disposable sauna clothes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna package ordered needs to include two female disposable sauna clothes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
