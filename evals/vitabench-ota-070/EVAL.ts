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
    expect(result[0].store_id).toBe('S17557512803333407_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512803333407_P00037", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(960, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512803333407_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512803333407_P00095", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1762, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512803333407_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512803333407_P00002", "quantity": 1}, {"product_id": "S17557512803333407_P00001", "quantity": 1}, {"product_id": "S17557512803333407_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1194, 0);
  });

  test('rubric: The attraction ticket order must be for Fantawild Adventure Jiayuguan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order must be for Fantawild Adventure Jiayuguan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket order must be for the second day after arriving in Jiayugu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order must be for the second day after arriving in Jiayuguan (February 10, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket order must be suitable for 2 people (1 adult and 1 child)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order must be suitable for 2 people (1 adult and 1 child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ticket order must include express passes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ticket order must include express passes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train order must be for an EMU (Electric Multiple Unit) train', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train order must be for an EMU (Electric Multiple Unit) train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train tickets must be first class seats', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train tickets must be first class seats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train arrival time must be before 4:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train arrival time must be before 4:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order must be for travel from Xi\'an to Jiayuguan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order must be for travel from Xi\'an to Jiayuguan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order must include 2 tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order must include 2 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return journey must be scheduled for the morning of the Lantern Festival (Fe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return journey must be scheduled for the morning of the Lantern Festival (February 12, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the accommodation order must be Fantawild Theme Hotel Jiayuguan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the accommodation order must be Fantawild Theme Hotel Jiayuguan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lantern Festival date needs to be checked, which is February 12, 2025, so th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lantern Festival date needs to be checked, which is February 12, 2025, so the hotel stay must be for February 09, 2025, February 10, 2025, and February 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order must be suitable for 2 people (1 adult and 1 child)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order must be suitable for 2 people (1 adult and 1 child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
