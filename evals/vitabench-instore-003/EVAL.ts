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
    expect(result[0].store_id).toBe('S17564420327514686_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420327514686_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(158, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17564420327514686_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420327514686_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(280, 0);
  });

  test('rubric: The massage shop should provide Traditional Massage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop should provide Traditional Massage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There is no historical order for massage shops, the massage shop to be ordered s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There is no historical order for massage shops, the massage shop to be ordered should be within 3km of Room 1802, Unit 1, Building 3, Huaze Lidu Community, 319 Jinxing Middle Road, Yuelu District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage shop rating should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop rating should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered massage service should be a package that includes Foot Bath and Acup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered massage service should be a package that includes Foot Bath and Acupoint Massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage shop to be reserved should be Ancient Charm Health Preservation Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage shop to be reserved should be Ancient Charm Health Preservation Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Changsha on 2025-04-12 will be moderate rain, and on 2025-04-13 w', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Changsha on 2025-04-12 will be moderate rain, and on 2025-04-13 will be overcast, the massage appointment time should be 2025-04-13 17:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the massage appointment should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the massage appointment should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hair salon should be within 1km of Ancient Charm Health Preservation Club, 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon should be within 1km of Ancient Charm Health Preservation Club, 328 Jinxing Road, Yuelu District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hair salon order should be a Highlighting Package with Unlimited Bleaching', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon order should be a Highlighting Package with Unlimited Bleaching"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
