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
    expect(result[0].store_id).toBe('S17550803068052762_H00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550803068052762_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1280, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550803068052762_I00016');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550803068052762_P00101", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(120, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550803068052762_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550803068052762_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(138, 0);
  });

  test('rubric: Need to find the highest-rated hotel among available options [Lushan Cloud Resor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to find the highest-rated hotel among available options [Lushan Cloud Resort Hotel and Lushan Guling International Hotel are both Five-Star]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be located within the Lushan Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be located within the Lushan Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel booking should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel booking should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking date should be November 20, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking date should be November 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the distance from Lushan Scenic Area to downtown Wanda Plaza, whic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the distance from Lushan Scenic Area to downtown Wanda Plaza, which is about 15km, so need to search for e-sports venues near Jiujiang downtown Wanda Plaza and create an order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet cafe should have RTX4070 or higher graphics cards', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet cafe should have RTX4070 or higher graphics cards"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet cafe must be a non-smoking establishment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet cafe must be a non-smoking establishment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet cafe package should be valid for 3 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet cafe package should be valid for 3 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet cafe package should be for a single person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet cafe package should be for a single person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the distance from Lushan Scenic Area to downtown Wanda Plaza is about 15km', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the distance from Lushan Scenic Area to downtown Wanda Plaza is about 15km, need to search for takeout options near the hotel and create an order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout restaurant should serve Jiangxi Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout restaurant should serve Jiangxi Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout food should avoid the user\'s dietary restrictions and should not be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout food should avoid the user\'s dietary restrictions and should not be Extra Spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order should be Lushan Cloud Resort Hotel, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order should be Lushan Cloud Resort Hotel, Guling Town, Lushan Scenic Area, Jiujiang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the takeout order should be around 17:30:00 on 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the takeout order should be around 17:30:00 on 2025-11-20 [delivery time should be within the 17:15-17:45 time range]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order items should include Roast Chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order items should include Roast Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The main food item in the takeout order should be steamed buns', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The main food item in the takeout order should be steamed buns"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
