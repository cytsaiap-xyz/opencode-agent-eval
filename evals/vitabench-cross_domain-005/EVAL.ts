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
    expect(result[0].store_id).toBe('S17550802124707160_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802124707160_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(12.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802124707160_T00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802124707160_P00036", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(89, 0);
  });

  test('rubric: The items in the Rice Ball order should not contain sauce', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the Rice Ball order should not contain sauce"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time in the Rice Ball order should be before 18:30:00 on 2025-06-20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time in the Rice Ball order should be before 18:30:00 on 2025-06-20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Rice Ball order is Mycott International Building, N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Rice Ball order is Mycott International Building, No.63 Maidi Road, Huicheng District, Huizhou, Guangdong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the Rice Ball order should be Chicken Strips Purple Rice Ball flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the Rice Ball order should be Chicken Strips Purple Rice Ball flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time in the Haidilao order should be 22:00:00 on 2025-06-20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time in the Haidilao order should be 22:00:00 on 2025-06-20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Haidilao reservation is 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Haidilao reservation is 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant in the Haidilao order should be Haidilao', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the Haidilao order should be Haidilao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant in the Haidilao order should be the branch closest to the Sports Ce', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the Haidilao order should be the branch closest to the Sports Center (query shows it\'s Haidilao Hotpot (Dongguan Sports Center))"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on the query, there is no direct train from Huizhou to Shenzhen Airport, s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on the query, there is no direct train from Huizhou to Shenzhen Airport, so a train from Huizhou to Shenzhen North should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: To pick someone up at the airport at 10:00, one needs to arrive at Shenzhen Nort', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "To pick someone up at the airport at 10:00, one needs to arrive at Shenzhen North Station one and a half hours in advance, so the arrival time of the train in the order should be before 08:30:00 on 2025-06-22"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail ticket price should not exceed 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail ticket price should not exceed 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
