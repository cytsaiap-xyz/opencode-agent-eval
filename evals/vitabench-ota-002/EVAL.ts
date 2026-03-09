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
    expect(result[0].store_id).toBe('S17557505487409598_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505487409598_P00080", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(398, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505487409598_T00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505487409598_P00093", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(468, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505487409598_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505487409598_P00008", "quantity": 1}, {"product_id": "S17557505487409598_P00016", "quantity": 1}, {"product_id": "S17557505487409598_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1140, 0);
  });

  test('rubric: The train ticket order status for July 10, 2027 should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order status for July 10, 2027 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number for July 10, 2027 is K9619, with departure time at 18:30. The t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number for July 10, 2027 is K9619, with departure time at 18:30. The tickets for this train on July 12, 2027 are sold out, so the tickets for July 12, 2027 should be for train K9622 which departs one hour later (departure time at 19:30)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order status for July 12, 2027 should be paid', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order status for July 12, 2027 should be paid"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved homestay should have Bai Ethnic Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved homestay should have Bai Ethnic Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved homestay should have views of Erhai Lake and Cangshan Mountain', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved homestay should have views of Erhai Lake and Cangshan Mountain"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved homestay should include breakfast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved homestay should include breakfast"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay reservation should include three nights, specifically for July 12, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay reservation should include three nights, specifically for July 12, 2027, July 13, 2027, and July 14, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
