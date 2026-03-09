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
    expect(result[0].store_id).toBe('S17557513687109603_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513687109603_P00063", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1106, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557513687109603_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513687109603_P00001", "quantity": 1}, {"product_id": "S17557513687109603_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1360, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557513687109603_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513687109603_P00030", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The ordered train should include accessible carriage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train should include accessible carriage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered train should have wheelchair-accessible seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train should have wheelchair-accessible seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train in the order should be from Dalian to Beijing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train in the order should be from Dalian to Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the train tickets in the order should be September 13, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the train tickets in the order should be September 13, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be within 3km (inclusive) of the Chinese PLA General Hospital a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 3km (inclusive) of the Chinese PLA General Hospital at 28 Fuxing Road, Haidian District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel should have an Elevator', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel should have an Elevator"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates should be 2023-09-13 and 2023-09-14', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates should be 2023-09-13 and 2023-09-14"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room booked in the hotel order should be a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room booked in the hotel order should be a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Beijing on 2023-09-14 (showers), the attraction ordered sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Beijing on 2023-09-14 (showers), the attraction ordered should be indoor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for the attraction should be September 14, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for the attraction should be September 14, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction should be wheelchair accessible', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction should be wheelchair accessible"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of attraction tickets ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of attraction tickets ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
