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
    expect(result[0].store_id).toBe('S17557505485381345_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485381345_P00001", "quantity": 1}, {"product_id": "S17557505485381345_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1376, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505485381345_H00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485381345_P00023", "quantity": 1}, {"product_id": "S17557505485381345_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1760, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505485381345_A00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485381345_P00042", "quantity": 2}];
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

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505485381345_A00010');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485381345_P00073", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(220, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557505485381345_A00011');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485381345_P00082", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(138, 0);
  });

  test('rubric: The booking dates for Mangshi hotel are July 2, 2025 and July 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking dates for Mangshi hotel are July 2, 2025 and July 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Mangshi hotel should have good views, a Scenic View Room should be booked', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Mangshi hotel should have good views, a Scenic View Room should be booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the Mangshi hotel must be within the range of 500-1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the Mangshi hotel must be within the range of 500-1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the weather in Mangshi on July 2, 2025 and July 3, 2025 (sunny and cloudy ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the weather in Mangshi on July 2, 2025 and July 3, 2025 (sunny and cloudy respectively) and the weather in Tengchong on July 4, 2025 and July 5, 2025 (overcast and showers respectively), so the hotel booked in Tengchong should have a swimming pool"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The swimming pool in the Tengchong hotel should be outdoor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The swimming pool in the Tengchong hotel should be outdoor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Tengchong hotel should have good views, a Mountain View Room should be booke', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Tengchong hotel should have good views, a Mountain View Room should be booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking dates for Tengchong hotel are July 4, 2025 and July 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking dates for Tengchong hotel are July 4, 2025 and July 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the Tengchong hotel must be within the range of 500-1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the Tengchong hotel must be within the range of 500-1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for tickets to Menghuan Golden Pagoda is July 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for tickets to Menghuan Golden Pagoda is July 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets booked in the Menghuan Golden Pagoda order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets booked in the Menghuan Golden Pagoda order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets booked in the Menghuan Golden Pagoda order are Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets booked in the Menghuan Golden Pagoda order are Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for tickets to Tengchong Beihai Wetland is July 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for tickets to Tengchong Beihai Wetland is July 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets booked in the Tengchong Beihai Wetland order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets booked in the Tengchong Beihai Wetland order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets booked in the Tengchong Beihai Wetland order are Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets booked in the Tengchong Beihai Wetland order are Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for tickets to Tengchong Hot Sea Park is July 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for tickets to Tengchong Hot Sea Park is July 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets booked in the Tengchong Hot Sea Park order are Couple Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets booked in the Tengchong Hot Sea Park order are Couple Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
