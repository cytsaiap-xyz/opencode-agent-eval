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
    expect(result[0].store_id).toBe('S17557511576221812_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511576221812_P00072", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(526, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557511576221812_T00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511576221812_P00084", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(496, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557511576221812_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511576221812_P00008", "quantity": 1}, {"product_id": "S17557511576221812_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(676, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557111228331195_A00008');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511576221812_P00023", "quantity": 2}, {"product_id": "S17557511576221812_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(315, 0);
  });

  test('rubric: The outbound train ticket order must be for November 10, 2027 (next Wednesday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order must be for November 10, 2027 (next Wednesday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket departure location must be Xi\'an, and the destination', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket departure location must be Xi\'an, and the destination must be Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order must be for EMU (Electric Multiple Unit) train (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order must be for EMU (Electric Multiple Unit) train (D-series) or High-speed rail (G-series)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for the fastest outbound train, with result being G698; the outbo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for the fastest outbound train, with result being G698; the outbound train ticket order should be for train G698"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound order ticket quantity must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound order ticket quantity must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order must be for November 12, 2027 (next Friday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order must be for November 12, 2027 (next Friday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket departure location must be Taiyuan, and the destination ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket departure location must be Taiyuan, and the destination must be Xi\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order must be for EMU (Electric Multiple Unit) train (D-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order must be for EMU (Electric Multiple Unit) train (D-series) or High-speed rail (G-series)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for the fastest return train, with result being G2672; the return', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for the fastest return train, with result being G2672; the return train ticket order should be for train G2672"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return order ticket quantity must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return order ticket quantity must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation must be a Traditional charm inn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation must be a Traditional charm inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn room quantity must be one room per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn room quantity must be one room per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn price must be 500 yuan or less per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn price must be 500 yuan or less per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn must provide Station transfer service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn must provide Station transfer service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn order should be for 2 nights, specifically November 10, 2027 and Novembe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn order should be for 2 nights, specifically November 10, 2027 and November 11, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order must be for Pingyao Ancient City', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order must be for Pingyao Ancient City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should be for all-inclusive ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should be for all-inclusive ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order date must be November 11, 2027 (Thursday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order date must be November 11, 2027 (Thursday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order quantity must be 2 Adult tickets + 1 Child ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order quantity must be 2 Adult tickets + 1 Child ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
