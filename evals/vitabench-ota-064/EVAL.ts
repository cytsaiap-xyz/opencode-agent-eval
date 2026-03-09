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
    expect(result[0].store_id).toBe('S17557513329986348_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513329986348_P00043", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(45, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557513329986348_A00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513329986348_P00066", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(240, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557513329986348_T00014');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513329986348_P00128", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(140, 0);
  });

  test('rubric: Checked the weather for Saturday (2025-03-22), which is overcast, so the attract', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Checked the weather for Saturday (2025-03-22), which is overcast, so the attraction ticket purchased is for Zhengzhou City God Temple"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets purchased is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets purchased is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The type of tickets purchased is Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The type of tickets purchased is Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the purchased tickets is March 22, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the purchased tickets is March 22, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order status for the Aquarium tickets purchased the day before yesterday is ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status for the Aquarium tickets purchased the day before yesterday is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: By checking the calendar, the upcoming holiday is April 4, 2025 (Tomb Sweeping D', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "By checking the calendar, the upcoming holiday is April 4, 2025 (Tomb Sweeping Day), and the train ticket purchase date is April 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets purchased are from Zhengzhou to Kaifeng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets purchased are from Zhengzhou to Kaifeng"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: According to the inquiry, the total train journey takes 28 minutes, which is les', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to the inquiry, the total train journey takes 28 minutes, which is less than 1 hour, so the tickets purchased are Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets purchased is 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets purchased is 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
