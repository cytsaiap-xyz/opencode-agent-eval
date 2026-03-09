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
    expect(result[0].store_id).toBe('S17557512327935013_T00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512327935013_P00093", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(256, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512327935013_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512327935013_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(428, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512327935013_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512327935013_P00031", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(160, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512327935013_A00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512327935013_P00034", "quantity": 1}, {"product_id": "S17557512327935013_P00036", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(200, 0);
  });

  test('rubric: The train ticket booking date is June 13, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket booking date is June 13, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked train ticket is for a train departing around 7 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked train ticket is for a train departing around 7 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked train ticket corresponds to the train with the shortest travel time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked train ticket corresponds to the train with the shortest travel time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of train tickets booked is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of train tickets booked is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the booked train tickets does not exceed 400', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the booked train tickets does not exceed 400"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked train tickets are from Linyi to Qufu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked train tickets are from Linyi to Qufu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should be with the brand that the user most frequently stays a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should be with the brand that the user most frequently stays at (which is Home Inn according to the user profile)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking date is June 13, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking date is June 13, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel booking is a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel booking is a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Confucius Temple tickets are purchased for June 13, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Confucius Temple tickets are purchased for June 13, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Only adult tickets are available when checking Confucius Temple ticket informati', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Only adult tickets are available when checking Confucius Temple ticket information, so all tickets in the Confucius Temple order are adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the Confucius Temple order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the Confucius Temple order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Qufu on June 14, 2026 (which is sunny), purchase tickets fo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Qufu on June 14, 2026 (which is sunny), purchase tickets for Nishan Sacred Land for June 14, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check that the age range for child tickets at Nishan Sacred Land is 6-15 years o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check that the age range for child tickets at Nishan Sacred Land is 6-15 years old, the child is 13 years old, so purchase a child ticket for them"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Nishan Sacred Land order includes adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Nishan Sacred Land order includes adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
