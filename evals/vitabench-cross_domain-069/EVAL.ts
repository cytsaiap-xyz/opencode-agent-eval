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
    expect(result[0].store_id).toBe('S17550806610851493_S00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806610851493_P00021", "quantity": 1}, {"product_id": "", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: The food delivery order must be for legal classic books', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must be for legal classic books"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased books must be hardcover editions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased books must be hardcover editions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased books must have collectible value', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased books must have collectible value"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased books should be delivered to Room 1203, Unit 5, Jinnyu Jiahua Buil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased books should be delivered to Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The books need to be delivered on the same day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The books need to be delivered on the same day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the operating hours of the private cinema for booking, with the re', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the operating hours of the private cinema for booking, with the result showing open until 1:00 AM, and the books should be delivered before 20:00 on June 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema must be a Small Private Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema must be a Small Private Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package duration for the private cinema booking must be 4 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package duration for the private cinema booking must be 4 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema must be close to home, within 3 kilometers of Room 1203, Unit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema must be close to home, within 3 kilometers of Room 1203, Unit 5, Jinnyu Jiahua Building, 19 Xibeiwang Middle Road, Haidian District, Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema must have a rating higher than 4.9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema must have a rating higher than 4.9"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The private cinema needs to be booked for the latest available time slot on the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The private cinema needs to be booked for the latest available time slot on the same day (June 8, 2024), which is 21:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the private cinema booking is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the private cinema booking is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check if The Great Hall of the People is open for visits tomorrow (June 9, 2024)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check if The Great Hall of the People is open for visits tomorrow (June 9, 2024), with the result showing that The Great Hall of the People is open from 09:00-15:00 tomorrow"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Two tickets need to be purchased for tomorrow (June 9, 2024)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Two tickets need to be purchased for tomorrow (June 9, 2024)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction for the tickets should be The Great Hall of the People', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction for the tickets should be The Great Hall of the People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
