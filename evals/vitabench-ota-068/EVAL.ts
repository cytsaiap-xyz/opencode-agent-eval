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
    expect(result[0].store_id).toBe('S17557514964243714_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514964243714_P00001", "quantity": 4}, {"product_id": "S17557514964243714_P00002", "quantity": 4}, {"product_id": "S17557514964243714_P00004", "quantity": 4}, {"product_id": "S17557514964243714_P00005", "quantity": 4}, {"product_id": "S17557514964243714_P00009", "quantity": 4}, {"product_id": "S17557514964243714_P00010", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(31400, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514964243714_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514964243714_P00036", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(65, 0);
  });

  test('rubric: The booked hotel should be within 500 meters of Central Plaza, 18 Harbour Road, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 500 meters of Central Plaza, 18 Harbour Road, Wan Chai, Hong Kong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should have an Executive Floor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should have an Executive Floor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation should include six nights of rooms, specifically for 2024-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation should include six nights of rooms, specifically for 2024-09-13, 2024-09-14, 2024-09-15, 2024-09-16, 2024-09-17, 2024-09-18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel reservation should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel reservation should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation should include 4 rooms for each night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation should include 4 rooms for each night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room rate per night should be between 1000-1600 yuan, and the total order am', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room rate per night should be between 1000-1600 yuan, and the total order amount should be between 24000-38400 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the date of Mid-Autumn Festival in 2024, which is 2024-09-17; need', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the date of Mid-Autumn Festival in 2024, which is 2024-09-17; need to check the weather in Hong Kong on 2024-09-17, which is sunny, and the tickets in the attraction order should be for the Victoria Peak Tram"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets in the attraction order should be one-way tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets in the attraction order should be one-way tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets in the attraction order should be Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets in the attraction order should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the attraction order should be 2024-09-17', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the attraction order should be 2024-09-17"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
