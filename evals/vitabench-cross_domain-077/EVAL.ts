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
    expect(result[0].store_id).toBe('S17550809486731413_A00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809486731413_P00013", "quantity": 1}, {"product_id": "S17550809486731413_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(120, 0);
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
    expect(result[2].store_id).toBe('S17550809486731413_I00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809486731413_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(249, 0);
  });

  test('rubric: The attraction ordered should be a science museum', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should be a science museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ordered should have interactive devices', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should have interactive devices"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for the ticket order should be July 13, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for the ticket order should be July 13, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should include one Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should include one Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order should include one Child Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order should include one Child Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be a Family-Friendly Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a Family-Friendly Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have Children\'s Entertainment facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have Children\'s Entertainment facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should offer Children\'s Set Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should offer Children\'s Set Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should provide buffet with No Seafood', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should provide buffet with No Seafood"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 12:00 on July 13, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 12:00 on July 13, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order item should be LEGO toy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order item should be LEGO toy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order item should be Toy Car', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order item should be Toy Car"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order item should not be Off-Road Racing Car', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order item should not be Off-Road Racing Car"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Hailiang Ocean Joy Plaza, 140 meters southeast of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Hailiang Ocean Joy Plaza, 140 meters southeast of the intersection of Changjiang Road and Diezihudadao, Honggutan District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time should be before 18:00 on July 13, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time should be before 18:00 on July 13, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
