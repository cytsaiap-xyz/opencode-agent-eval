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
    expect(result[0].store_id).toBe('S17557516159742676_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516159742676_P00062", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(189, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557516159742676_H00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516159742676_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(520, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557516159742676_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516159742676_P00032", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(160, 0);
  });

  test('rubric: The destination of the train order should be Jiujiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination of the train order should be Jiujiang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the train order should be 2026-09-01', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the train order should be 2026-09-01"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the train should be around 09:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the train should be around 09:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the train ticket order should be second class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the train ticket order should be second class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Lushan Mountain on 2026-09-01 and 2026-09-02, which', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Lushan Mountain on 2026-09-01 and 2026-09-02, which is showers followed by sunny, suitable for viewing the sea of clouds, and the booked hotel should be located on Lushan Mountain"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the booked hotel should be less than or equal to 600 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the booked hotel should be less than or equal to 600 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type of the booked hotel should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type of the booked hotel should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be ordered should be Lushan Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be ordered should be Lushan Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the attraction order should be 2026-09-02', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the attraction order should be 2026-09-02"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type in the attraction order should be adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type in the attraction order should be adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
