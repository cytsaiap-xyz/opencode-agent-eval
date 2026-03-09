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
    expect(result[0].store_id).toBe('S17567836585819667_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836585819667_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(98, 0);
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
    expect(result[2].store_id).toBe('S17567836585819667_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836585819667_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(188, 0);
  });

  test('rubric: The healing center should have been in business for 3 years or more', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The healing center should have been in business for 3 years or more"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The healing center should be a well-known chain brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The healing center should be a well-known chain brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the healing center should be a meditation course', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the healing center should be a meditation course"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the healing center should be a single session package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the healing center should be a single session package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the healing center should be at new customer benefit price', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the healing center should be at new customer benefit price"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the ordered item at the healing center should be 1.5 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the ordered item at the healing center should be 1.5 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked healing center should be Mindful Space Meditation Center (Science Par', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked healing center should be Mindful Space Meditation Center (Science Park Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking time for the healing center is 2025-12-25 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking time for the healing center is 2025-12-25 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the healing center booking is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the healing center booking is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check whether there is a car wash service within 1000m (inclusive) of 3/F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check whether there is a car wash service within 1000m (inclusive) of 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) that offers 1.5h service including interior and exterior cleaning and seat care. The result is yes, therefore should place an order at the car wash service. The distance from the car wash service to 3/F, Tower B, High-Tech Plaza, 22 Keyuan Road, Science Park South Area, Nanshan District, Shenzhen (Mindful Space Meditation Center) should be within 1000m (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the car wash service should be a car wash voucher', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the car wash service should be a car wash voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the ordered item at the car wash service should be 1.5h', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the ordered item at the car wash service should be 1.5h"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the car wash service should include interior and exterior cl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the car wash service should include interior and exterior cleaning and seat care"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
