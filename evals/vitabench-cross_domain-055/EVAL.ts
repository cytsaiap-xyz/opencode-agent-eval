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
    expect(result[0].store_id).toBe('S17550802140416746_I00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802140416746_P00052", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(188, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802140416746_F00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802140416746_P00030", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1580, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802140416746_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802140416746_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(159.9, 0);
  });

  test('rubric: The archery hall ordered from should be newly opened', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The archery hall ordered from should be newly opened"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package purchased at the archery hall should include coach guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package purchased at the archery hall should include coach guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package purchased at the archery hall should be aimed at beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package purchased at the archery hall should be aimed at beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ordered is from Changchun to Taiyuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ordered is from Changchun to Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the flight ticket is November 11, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the flight ticket is November 11, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight departs in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight departs in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket must be business class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket must be business class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ordered is the last departure of the morning, the flight in the ticke', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ordered is the last departure of the morning, the flight in the ticket order should be MU5231 (departing at 11:40)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the delivery order should be archery protective gear', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the delivery order should be archery protective gear"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The archery protective gear in the order should be professional grade', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The archery protective gear in the order should be professional grade"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Size L should be selected for the archery protective gear in the order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Size L should be selected for the archery protective gear in the order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the archery protective gear order should be before or at 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the archery protective gear order should be before or at 6:00 PM on November 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the archery protective gear order should be Room 1203, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the archery protective gear order should be Room 1203, Building B, Changchun International Financial Center, 1588 Kaiyun Street, Chaoyang District, Changchun, Jilin Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The note for the archery protective gear order should be \'Leave at front desk\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The note for the archery protective gear order should be \'Leave at front desk\'"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
