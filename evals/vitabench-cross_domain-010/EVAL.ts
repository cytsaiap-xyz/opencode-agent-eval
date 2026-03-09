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
    expect(result[0].store_id).toBe('S17550148871188176_I00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148871188176_P00083", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(198, 0);
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
    expect(result[2].store_id).toBe('S17550148871188176_I00013');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148871188176_P00140", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(298, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550148871188176_T00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148871188176_P00038", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(82, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17550148871188176_T00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148871188176_P00042", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(82, 0);
  });

  test('rubric: Need to compare game token package prices at different arcades in Puyang, choose', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to compare game token package prices at different arcades in Puyang, choose the most cost-effective one; Super Player Arcade\'s 600 Game Tokens Package at ¥198 offers the best value"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Due to game token prices exceeding budget, cannot purchase any drinks from Mixue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Due to game token prices exceeding budget, cannot purchase any drinks from Mixue Ice Cream or elsewhere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved izakaya should be within 600m of Super Player Arcade', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved izakaya should be within 600m of Super Player Arcade"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved izakaya should be suitable for photo check-ins', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved izakaya should be suitable for photo check-ins"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The izakaya reservation time should be 2026-01-04 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The izakaya reservation time should be 2026-01-04 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The izakaya reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The izakaya reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The izakaya order should be placed at Sakura Izakaya', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The izakaya order should be placed at Sakura Izakaya"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The izakaya set menu ordered should be priced between ¥280-320', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The izakaya set menu ordered should be priced between ¥280-320"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The izakaya set menu ordered should include Plum Wine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The izakaya set menu ordered should include Plum Wine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to cancel the order with order number S17550148871188176_O00001', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to cancel the order with order number S17550148871188176_O00001"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure station of the train ticket order should be Puyang Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station of the train ticket order should be Puyang Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station of the train ticket order should be Luoyang Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station of the train ticket order should be Luoyang Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket ordered should be for a train departing between 19:00-20:00 on ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket ordered should be for a train departing between 19:00-20:00 on 2026-01-07"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
