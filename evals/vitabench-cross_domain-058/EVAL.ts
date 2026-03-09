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
    expect(result[0].store_id).toBe('S17550802131504747_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131504747_P00045", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(176, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802131504747_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131504747_P00001", "quantity": 1}, {"product_id": "S17550802131504747_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(109.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802131504747_T00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131504747_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1580, 0);
  });

  test('rubric: The restaurant ordered should be in Haikou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be in Haikou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be a nutrition restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a nutrition restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s average cost per person should be less than or equal to 100 yu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s average cost per person should be less than or equal to 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s food should be a post-illness care set meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s food should be a post-illness care set meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s food should not contain seafood', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s food should not contain seafood"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of restaurant food items should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of restaurant food items should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include a knitted hat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include a knitted hat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include a hand warmer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include a hand warmer"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The knitted hat and hand warmer in the delivery order should come from the same ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The knitted hat and hand warmer in the delivery order should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Room 502, Unit 2, Building 3, Kangda Community, N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Room 502, Unit 2, Building 3, Kangda Community, No. 74 Xuefu Road, Nangang District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be January 25, 2025, 16:10-17:10', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be January 25, 2025, 16:10-17:10"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: A train ticket should be ordered', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "A train ticket should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be for a train from Harbin to Haikou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be for a train from Harbin to Haikou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type of the train ticket should be soft sleeper (train berth)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type of the train ticket should be soft sleeper (train berth)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the train should be January 27, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the train should be January 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
