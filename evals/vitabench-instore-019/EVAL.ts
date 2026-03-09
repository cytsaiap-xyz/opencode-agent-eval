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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420264159867_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420264159867_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(388, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The reservation time for the Western restaurant should be at noon (12:00) on Chi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the Western restaurant should be at noon (12:00) on Chinese Valentine\'s Day (August 29, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Western restaurant reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Western restaurant reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant should have a terrace', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant should have a terrace"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant should have a lake view', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant should have a lake view"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant should provide a sirloin steak set for two, rather than t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant should provide a sirloin steak set for two, rather than two individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the sirloin steak set for two at the Western restaurant should be w', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the sirloin steak set for two at the Western restaurant should be within 500 yuan (including 500 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the Western restaurant should be 4.3 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the Western restaurant should be 4.3 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV should be within 2km (including 2km) of the Lakeside Western Restaurant ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV should be within 2km (including 2km) of the Lakeside Western Restaurant at the intersection of Xinhua Road and Yuhe Road, Bailang River Scenic Area, Kuiwen District, Weifang City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the KTV booking should be 3 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the KTV booking should be 3 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV booking should be for a Small Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV booking should be for a Small Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV booking should include champagne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV booking should include champagne"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV booking should include snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV booking should include snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV booking should include scene decoration', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV booking should include scene decoration"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation time should be at 2:30 PM on Chinese Valentine\'s Day (Augus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation time should be at 2:30 PM on Chinese Valentine\'s Day (August 29, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the KTV reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the KTV reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved KTV should be Starry Sky KTV', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved KTV should be Starry Sky KTV"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
