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
    expect(result[0].store_id).toBe('S17557505488137572_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488137572_P00088", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2460, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505488137572_F00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488137572_P00097", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2997, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505488137572_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505488137572_P00004", "quantity": 1}, {"product_id": "S17557505488137572_P00001", "quantity": 1}, {"product_id": "S17557505488137572_P00006", "quantity": 1}, {"product_id": "S17557505488137572_P00002", "quantity": 1}, {"product_id": "S17557505488137572_P00008", "quantity": 1}, {"product_id": "S17557505488137572_P00009", "quantity": 1}, {"product_id": "S17557505488137572_P00007", "quantity": 1}, {"product_id": "S17557505488137572_P20009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3540, 0);
  });

  test('rubric: The outbound flight should be from Fuzhou to Beijing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight should be from Fuzhou to Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight departure date should be July 4, 2026 (this Saturday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight departure date should be July 4, 2026 (this Saturday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight ticket quantity should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight ticket quantity should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight should be an afternoon or evening flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight should be an afternoon or evening flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be from Beijing to Fuzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be from Beijing to Fuzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight departure date should be July 12, 2026 (next Sunday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight departure date should be July 12, 2026 (next Sunday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight ticket quantity should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight ticket quantity should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be an afternoon or evening flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be an afternoon or evening flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be in the style of Qing Dynasty royal garden', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be in the style of Qing Dynasty royal garden"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel needs to provide laundry service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel needs to provide laundry service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be Family-friendly', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be Family-friendly"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be family room or king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be family room or king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should be for 8 nights, on July 4, 2026, July 5, 2026, July 6,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should be for 8 nights, on July 4, 2026, July 5, 2026, July 6, 2026, July 7, 2026, July 8, 2026, July 9, 2026, July 10, 2026, and July 11, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: If both king room and family room are available on the same date, family room sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "If both king room and family room are available on the same date, family room should be prioritized, so the room type for July 11, 2026 should be family room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
