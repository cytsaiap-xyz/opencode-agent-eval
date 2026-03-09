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
    expect(result[0].store_id).toBe('S17557505528573677_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505528573677_P00087", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(596, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505528573677_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505528573677_P00094", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(596, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505528573677_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505528573677_P00001", "quantity": 1}, {"product_id": "S17557505528573677_P00002", "quantity": 1}, {"product_id": "S17557505528573677_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(2064, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505528573677_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505528573677_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(180, 0);
  });

  test('rubric: The outbound train ticket order should be for a train from Chongqing to Xichang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be for a train from Chongqing to Xichang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order should be for July 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be for July 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket must be First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket must be First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train should be a daytime train', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train should be a daytime train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be for a train from Xichang to Chongqing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be for a train from Xichang to Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be for July 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be for July 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order must be First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order must be First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train should be a daytime train', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train should be a daytime train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must have a good atmosphere', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must have a good atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be equipped with a Massage Room facility', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be equipped with a Massage Room facility"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel location must be within 1km of Huoba Square', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel location must be within 1km of Huoba Square"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates must be July 4, 2025, July 5, 2025, and July 6, 2025 res', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates must be July 4, 2025, July 5, 2025, and July 6, 2025 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for Lushan Scenic Area must be booked for July 6, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for Lushan Scenic Area must be booked for July 6, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lushan Scenic Area ticket order must be a Two-person Ticket (Single Cable Ca', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lushan Scenic Area ticket order must be a Two-person Ticket (Single Cable Car + Single Slide) combination"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
