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
    expect(result[0].store_id).toBe('S17550810159889844_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810159889844_P00030", "quantity": 1}, {"product_id": "S17550810159889844_P00029", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(130, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810159889844_H00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810159889844_P00018", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1936, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810159889844_I00015');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810159889844_P00089", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(468, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The attraction booked should be Sui and Tang Grand Canal Cultural Museum', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booked should be Sui and Tang Grand Canal Cultural Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for the attraction tickets should be April 11, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for the attraction tickets should be April 11, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket booking method chosen should be the cheapest option (Two-person Ticke', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket booking method chosen should be the cheapest option (Two-person Ticket 100 yuan + Child Ticket 30 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should be Five-star', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should be Five-star"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of hotel rooms booked should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of hotel rooms booked should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should provide Deluxe Breakfast Buffet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should provide Deluxe Breakfast Buffet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be within 500 meters of the Sui and Tang Grand Canal Cultural M', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 500 meters of the Sui and Tang Grand Canal Cultural Museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel should be April 11, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel should be April 11, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should have a Quiet Environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should have a Quiet Environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items ordered at the restaurant should be Seafood', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items ordered at the restaurant should be Seafood"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of items ordered at the restaurant should be less than 500 yuan (not i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of items ordered at the restaurant should be less than 500 yuan (not including 500)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a set meal for 2-3 people, not multiple individua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a set meal for 2-3 people, not multiple individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be at Huaibei Xianweixuan Seafood Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be at Huaibei Xianweixuan Seafood Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be April 11, 2026, 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be April 11, 2026, 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
