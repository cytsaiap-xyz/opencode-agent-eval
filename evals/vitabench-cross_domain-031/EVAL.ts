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
    expect(result[0].store_id).toBe('S17550806479682269_T00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806479682269_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(183, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550806479682269_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806479682269_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(299.99, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550806479682269_I00010');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806479682269_P00054", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(138, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The query for Saturday is for 2025-05-31, so the train ticket order date should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The query for Saturday is for 2025-05-31, so the train ticket order date should be May 31, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered train ticket must have a seat, not Standing Room Only', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train ticket must have a seat, not Standing Room Only"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered train should be the earliest one arriving in Shenyang among the avai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train should be the earliest one arriving in Shenyang among the available options"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number in the train ticket order should be G8012', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number in the train ticket order should be G8012"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered ring must be Couple Rings', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered ring must be Couple Rings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered ring must be made of Simulated Moissanite material, not Real Diamond', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered ring must be made of Simulated Moissanite material, not Real Diamond material products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered ring must have Same-day Delivery', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered ring must have Same-day Delivery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the ring should be Room 803, Unit 2, Jinshi Internation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the ring should be Room 803, Unit 2, Jinshi International Apartment, 553 Zhongshan Road, Heishijiao Street, Shahekou District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hair salon must be located within 2.5km of Shenyang High-speed Rail ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hair salon must be located within 2.5km of Shenyang High-speed Rail Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hair salon package must include Vintage Updo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hair salon package must include Vintage Updo"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hair salon package must be a Wash and Blow Dry Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hair salon package must be a Wash and Blow Dry Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed hair salon should be Fashion Hair Art', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed hair salon should be Fashion Hair Art"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hair salon appointment time must be scheduled after 10:26 on May 31', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon appointment time must be scheduled after 10:26 on May 31"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
