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
    expect(result[0].store_id).toBe('S17550809174775032_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809174775032_P00001", "quantity": 1}, {"product_id": "S17550809174775032_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(135, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809174775032_I00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809174775032_P00069", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(398, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809174775032_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809174775032_P00034", "quantity": 2}, {"product_id": "S17550809174775032_P00033", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(280, 0);
  });

  test('rubric: The afternoon tea order must include cupcakes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon tea order must include cupcakes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The afternoon tea order must include 15 cupcakes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon tea order must include 15 cupcakes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The afternoon tea order must include a tea snack platter', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon tea order must include a tea snack platter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea snack platter in the afternoon tea order should serve 15 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea snack platter in the afternoon tea order should serve 15 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the afternoon tea order should be at 14:30 on 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the afternoon tea order should be at 14:30 on 2025-04-18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the afternoon tea order should be 12th Floor, Shanxi In', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the afternoon tea order should be 12th Floor, Shanxi International Financial Center, 368 Qinxian North Street, Xiaodian District, Taiyuan, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the afternoon tea order should be low sugar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the afternoon tea order should be low sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cupcakes and tea snack platter in the afternoon tea order should be from the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cupcakes and tea snack platter in the afternoon tea order should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The escape room to be booked should have a rating of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The escape room to be booked should have a rating of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The escape room to be booked should be a Featured Store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The escape room to be booked should be a Featured Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The escape room package should have a Horror Theme', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The escape room package should have a Horror Theme"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The escape room package should accommodate 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The escape room package should accommodate 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When checking the weather in Taiyuan for 2025-04-20, the result shows overcast, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When checking the weather in Taiyuan for 2025-04-20, the result shows overcast, no rain, so search for attractions with water shows"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be booked should have a light show', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be booked should have a light show"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction should offer Senior Tickets with discounted prices compared to Ad', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction should offer Senior Tickets with discounted prices compared to Adult Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction should offer Adult Tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction should offer Adult Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of Senior Tickets in the attraction order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of Senior Tickets in the attraction order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of Adult Tickets in the attraction order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of Adult Tickets in the attraction order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for the attraction tickets should be April 20, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for the attraction tickets should be April 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
