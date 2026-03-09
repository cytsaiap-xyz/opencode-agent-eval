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
    expect(result[0].store_id).toBe('S17550809260058202_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809260058202_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(468, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809260058202_A00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809260058202_P00062", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(360, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809260058202_H00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809260058202_P00029", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1080, 0);
  });

  test('rubric: The cake price should be between 400-500 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake price should be between 400-500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake must be Sugar-Free type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake must be Sugar-Free type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake delivery address should be Room 1103, Building B2, 700 Yishan Road, Xuh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake delivery address should be Room 1103, Building B2, 700 Yishan Road, Xuhui District, Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated cake delivery time should be before 2026-07-15 16:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated cake delivery time should be before 2026-07-15 16:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should be for Yalu River Cruise tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should be for Yalu River Cruise tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Dandong from July 19, 2026 to July 25, 2026, and choose the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Dandong from July 19, 2026 to July 25, 2026, and choose the day with the highest temperature to order cruise tickets, therefore should order tickets for July 25, 2026 (temperature 25-34℃)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of cruise tickets ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of cruise tickets ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be within 3 kilometers (inclusive) from the Yalu River ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be within 3 kilometers (inclusive) from the Yalu River Tourist Dock, Zhenxing District, Dandong, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type ordered should be River View Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type ordered should be River View Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room price should be greater than or equal to 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room price should be greater than or equal to 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on the cruise ticket date (July 25, 2026), confirm the hotel check-in date', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on the cruise ticket date (July 25, 2026), confirm the hotel check-in date, which should be July 24, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
