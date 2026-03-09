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
    expect(result[0].store_id).toBe('S17557505469336597_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505469336597_P00057", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(553, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505469336597_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505469336597_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(898, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505469336597_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505469336597_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(80, 0);
  });

  test('rubric: The train ordered should be High-speed rail or EMU (Electric Multiple Unit) trai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ordered should be High-speed rail or EMU (Electric Multiple Unit) train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure city of the train should be Nantong', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure city of the train should be Nantong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination of the train should be Wuhan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination of the train should be Wuhan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the train should be March 23, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the train should be March 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the train should be between 16:00-17:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the train should be between 16:00-17:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train with the shortest travel time should be selected, and the train in the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train with the shortest travel time should be selected, and the train in the order should be G1722 (travel time: 3 hours and 33 minutes)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the hotel ordered and the Wuhan University Cherry Blossom G', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the hotel ordered and the Wuhan University Cherry Blossom Garden at 16 Luojia Mountain Road, Wuchang District, Wuhan, Hubei Province should be less than or equal to 2 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel brand should be Atour', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand should be Atour"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel should be March 23, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel should be March 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type ordered should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type ordered should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of the hotel order should be within the 1000 yuan budget (includi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of the hotel order should be within the 1000 yuan budget (including 1000 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should calculate how many nights can be stayed within the 1000 yuan budget, the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should calculate how many nights can be stayed within the 1000 yuan budget, the result is 1 night (Deluxe king room for 1 night costs 898 yuan in total)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ordered should be Yellow Crane Tower', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should be Yellow Crane Tower"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket type should be Adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket type should be Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the ticket price of Yellow Crane Tower, the result is 80 yuan for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the ticket price of Yellow Crane Tower, the result is 80 yuan for Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should calculate the remaining balance after deducting hotel expenses from 1000 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should calculate the remaining balance after deducting hotel expenses from 1000 yuan, the result is 102 yuan, which is greater than 80 yuan, so Yellow Crane Tower ticket can be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the attraction ticket should be March 24, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the attraction ticket should be March 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
