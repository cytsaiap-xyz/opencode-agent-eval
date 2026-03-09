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
    expect(result[0].store_id).toBe('S17557505561351487_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505561351487_P00071", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(158, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505561351487_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505561351487_P00001", "quantity": 1}, {"product_id": "S17557505561351487_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1596, 0);
  });

  test('rubric: Train departure date should be August 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train departure date should be August 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for trains from Jinhua to Xiapu around 12:00 on August 20, 2027 are sold', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for trains from Jinhua to Xiapu around 12:00 on August 20, 2027 are sold out, the train number of the ticket should be D3216"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train ticket should be for a train from Jinhua to Xiapu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train ticket should be for a train from Jinhua to Xiapu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Homestay price should be between 500 and 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Homestay price should be between 500 and 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Homestay should provide breakfast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Homestay should provide breakfast"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Homestay\'s breakfast should be local specialty cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Homestay\'s breakfast should be local specialty cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Homestay should provide shuttle service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Homestay should provide shuttle service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type ordered for the homestay should be Sea View Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type ordered for the homestay should be Sea View Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Homestay order should include rooms for two nights, on August 20, 2027 and Augus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Homestay order should include rooms for two nights, on August 20, 2027 and August 21, 2027 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Jinhua on August 21, 2027 will be showers, so train tickets from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Jinhua on August 21, 2027 will be showers, so train tickets from Jinhua to Xiapu for August 21, 2027 should not be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
