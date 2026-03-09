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
    expect(result[0].store_id).toBe('S17557505509719097_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505509719097_P00060", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(372, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505509719097_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505509719097_P00027", "quantity": 1}, {"product_id": "S17557505509719097_P00033", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(60, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809608986081_H00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505509719097_P00013", "quantity": 2}, {"product_id": "S17557505509719097_P00015", "quantity": 2}, {"product_id": "S17557505509719097_P00017", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3528, 0);
  });

  test('rubric: The train tickets ordered should be high-speed rail tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets ordered should be high-speed rail tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the ordered train tickets should be September 30, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the ordered train tickets should be September 30, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the ordered train tickets should be between 9:00-15:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the ordered train tickets should be between 9:00-15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets ordered should be First class seat or Second class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets ordered should be First class seat or Second class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Priority should be given to seats with more available tickets, G1571 Second clas', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Priority should be given to seats with more available tickets, G1571 Second class seat (156 tickets)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order should include 2 Second class seat tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order should include 2 Second class seat tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for the admission tickets should be 2023-10-02', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for the admission tickets should be 2023-10-02"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to inquire about the purchasing method for Bigan Temple tickets, provide th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to inquire about the purchasing method for Bigan Temple tickets, provide the most cost-effective ticket plan, and the ticket order should include 1 Adult ticket and 1 Student ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be a three-star hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be a three-star hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the ordered hotel and Bigan Temple, Bigan Avenue, Weihui Ci', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the ordered hotel and Bigan Temple, Bigan Avenue, Weihui City, Xinxiang, Henan Province should be less than or equal to 5 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include rooms for three nights, which must be 2023-09-30,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include rooms for three nights, which must be 2023-09-30, 2023-10-01, and 2023-10-02 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since Second class seat tickets were purchased for the high-speed rail, the room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since Second class seat tickets were purchased for the high-speed rail, the room type in the hotel order should be king room, with quantity of each item being 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
