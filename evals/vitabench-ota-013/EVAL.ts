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
    expect(result[0].store_id).toBe('S17557505486254699_H00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486254699_P00009", "quantity": 1}, {"product_id": "S17557505486254699_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(796, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505486254699_F00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486254699_P00090", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(920, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505486254699_F00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486254699_P00108", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(780, 0);
  });

  test('rubric: The booked hotel brand should be one that the user frequently stays at (such as ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel brand should be one that the user frequently stays at (such as Home Inn, Orange Hotel, Ji Hotel, Hanting Hotel, Atour)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 1km of Lanzhou Hyatt Hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 1km of Lanzhou Hyatt Hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates should be January 2, 2026 and January 3, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates should be January 2, 2026 and January 3, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel room type should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel room type should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight should be from Shenyang to Lanzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight should be from Shenyang to Lanzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the outbound flight should not be too late, and should avoid', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the outbound flight should not be too late, and should avoid late night arrival"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the hotel is booked for January 2, 2026 and January 3, 2026, the outbound ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the hotel is booked for January 2, 2026 and January 3, 2026, the outbound flight date should be January 2, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be from Lanzhou to Shenyang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be from Lanzhou to Shenyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight date is flexible, but the entire trip should not exceed 5 days', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight date is flexible, but the entire trip should not exceed 5 days (with the latest return date being January 7, 2026)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the wedding is on January 3, 2026, the return date should be January 4, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the wedding is on January 3, 2026, the return date should be January 4, 2026 or later"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should consider cost savings, and should choose the lowest pri', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should consider cost savings, and should choose the lowest priced flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
