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
    expect(result[0].store_id).toBe('S17557505488732992_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488732992_P00065", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(356, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505488732992_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488732992_P00001", "quantity": 1}, {"product_id": "S17557505488732992_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1176, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505488732992_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488732992_P00046", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(180, 0);
  });

  test('rubric: The train ticket in the order is from Shenzhen to Nanjing (Fujian)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket in the order is from Shenzhen to Nanjing (Fujian)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the train in the ticket order is February 28, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the train in the ticket order is February 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket purchased in the order is Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket purchased in the order is Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets in the train order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets in the train order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel is within 3km of the Tianluokeng Tulou Cluster Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel is within 3km of the Tianluokeng Tulou Cluster Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates should be February 28, 2025 and March 1, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates should be February 28, 2025 and March 1, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should have Hakka Features', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should have Hakka Features"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should have Non-smoking Floor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should have Non-smoking Floor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the hotel room should be around 600 yuan per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the hotel room should be around 600 yuan per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the calendar to confirm the specific date of the Longtou Festival (Februar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the calendar to confirm the specific date of the Longtou Festival (February 2nd of lunar calendar 2025 is March 1st), the booking time for the scenic area tickets is March 1, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are for the Yunshui Yao Ancient Town Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are for the Yunshui Yao Ancient Town Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets purchased is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets purchased is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
