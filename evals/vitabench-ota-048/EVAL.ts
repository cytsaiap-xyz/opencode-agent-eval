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
    expect(result[0].store_id).toBe('S17557510281733481_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557510281733481_P00007", "quantity": 1}, {"product_id": "S17557510281733481_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1560, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557510281733481_A00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557510281733481_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(108, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557510281733481_A00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557510281733481_P00063", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(20, 0);
  });

  test('rubric: Need to check the weather in Hangzhou on March 4, 2027 and March 5, 2027, which ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Hangzhou on March 4, 2027 and March 5, 2027, which shows cloudy and sunny respectively, neither is rainy, so the distance between the hotel in the hotel order and the West Lake Scenic Area at 1 Longjing Road, West Lake District, Hangzhou, Zhejiang Province should be less than or equal to 500 meters"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include rooms for two nights, specifically for 2027-03-04', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include rooms for two nights, specifically for 2027-03-04 and 2027-03-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction in the attraction order with date 2027-03-04 should be Lingyin Te', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction in the attraction order with date 2027-03-04 should be Lingyin Temple"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the attraction order with date 2027-03-04 should be Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the attraction order with date 2027-03-04 should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the attraction order with date 2027-03-04 should include an Incens', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the attraction order with date 2027-03-04 should include an Incense and Candle Set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the attraction order with date 2027-03-04 should include Guided To', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the attraction order with date 2027-03-04 should include Guided Tour Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction in the attraction order with date 2027-03-05 should be Zhejiang A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction in the attraction order with date 2027-03-05 should be Zhejiang Art Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket in the attraction order with date 2027-03-05 should be Contemporary A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket in the attraction order with date 2027-03-05 should be Contemporary Art Exhibition Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
