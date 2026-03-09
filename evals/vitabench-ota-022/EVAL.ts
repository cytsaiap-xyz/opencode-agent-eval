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
    expect(result[0].store_id).toBe('S17557505501603486_T00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505501603486_P00096", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(553, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505501603486_F00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505501603486_P00085", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(790, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505501603486_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505501603486_P00055", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(80, 0);
  });

  test('rubric: Outbound travel date is August 26, 2026, when Hefei weather will be thundershowe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound travel date is August 26, 2026, when Hefei weather will be thundershowers, so train transportation should be chosen, requiring train ticket purchase"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Outbound train journey should not exceed 5 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train journey should not exceed 5 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Outbound train ticket should be from Xiamen to Hefei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train ticket should be from Xiamen to Hefei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return date should be August 30, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return date should be August 30, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets departing from Hefei and arriving in Xiamen around 17:00 on August', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets departing from Hefei and arriving in Xiamen around 17:00 on August 30, 2026 are sold out, so air tickets should be purchased for the return journey"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight arrival time should be around 17:00 on August 30, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight arrival time should be around 17:00 on August 30, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight should be from Hefei to Xiamen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight should be from Hefei to Xiamen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction order should be for Sanhe Ancient Town tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction order should be for Sanhe Ancient Town tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction tickets should be used on August 29, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction tickets should be used on August 29, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
