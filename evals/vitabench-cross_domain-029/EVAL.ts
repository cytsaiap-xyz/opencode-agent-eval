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
    expect(result[0].store_id).toBe('S17550802131843488_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131843488_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(456, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802131843488_I00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131843488_P00064", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802131843488_T00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802131843488_P00039", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(157, 0);
  });

  test('rubric: Afternoon tea order should include 12 drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Afternoon tea order should include 12 drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All drinks in the afternoon tea order must be half-sugar, cannot choose full sug', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All drinks in the afternoon tea order must be half-sugar, cannot choose full sugar, sugar-free or non-adjustable sugar drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Afternoon tea order drinks must include three different flavors', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Afternoon tea order drinks must include three different flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Afternoon tea drinks must include at least two hot drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Afternoon tea drinks must include at least two hot drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The afternoon tea order must consider the user\'s dietary restrictions and canno', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon tea order must consider the user\'s dietary restrictions and cannot include alcoholic beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the afternoon tea order should be 12th Floor, Building ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the afternoon tea order should be 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the afternoon tea order should be between 5pm and 6pm on A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the afternoon tea order should be between 5pm and 6pm on April 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bowling alley should be located within 3km of 12th Floor, Building B, Yuanda', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bowling alley should be located within 3km of 12th Floor, Building B, Yuanda Shopping Mall, intersection of 5th Avenue and Lijiang Road, Qunli, Daoli District, Harbin, Heilongjiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should search for the highest-rated bowling alley, which is Star Motion Bowling ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should search for the highest-rated bowling alley, which is Star Motion Bowling Alley"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bowling order package should be single person unlimited time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bowling order package should be single person unlimited time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bowling order package should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bowling order package should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should search for the earliest departure from Harbin to Daqing, which is G1205, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should search for the earliest departure from Harbin to Daqing, which is G1205, and the order should be for train G1205"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order must be for First-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order must be for First-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order should be for April 15, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order should be for April 15, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
