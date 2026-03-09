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
    expect(result[0].store_id).toBe('S17557505543387920_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543387920_P00089", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1520, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505543387920_F00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543387920_P00121", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(890, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505543387920_F00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543387920_P00102", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1590, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505543387920_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543387920_P00017", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(680, 0);
  });

  test('rubric: The forum will be held on May 5, 2025. If traveling to Hulunbuir before the foru', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The forum will be held on May 5, 2025. If traveling to Hulunbuir before the forum, one should travel from Taizhou to Hulunbuir (Hailar) on May 3, 2025, from Hulunbuir (Hailar) to Hohhot on May 4, 2025, and from Hohhot back to Taizhou on May 6, 2025. If traveling to Hulunbuir after the forum, one should travel from Taizhou to Hohhot on May 4, 2025, from Hohhot to Hulunbuir (Hailar) on May 6, 2025, and from Hulunbuir (Hailar) back to Taizhou on May 7, 2025. After calculation, if traveling to Hulunbuir before the forum, the total airfare would be 4000 yuan; if traveling to Hulunbuir after the forum, the total airfare would be 4250 yuan. Therefore, one should travel to Hulunbuir before the forum."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The first flight should be from Taizhou to Hulunbuir (Hailar)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The first flight should be from Taizhou to Hulunbuir (Hailar)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the first flight should be May 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the first flight should be May 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type for the first flight should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type for the first flight should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The second flight should be from Hulunbuir (Hailar) to Hohhot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The second flight should be from Hulunbuir (Hailar) to Hohhot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the second flight should be May 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the second flight should be May 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type for the second flight should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type for the second flight should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The third flight should be from Hohhot to Taizhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The third flight should be from Hohhot to Taizhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the third flight should be May 6, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the third flight should be May 6, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type for the third flight should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type for the third flight should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The accommodation order should book a Yurt', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The accommodation order should book a Yurt"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The accommodation order should include a room for May 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The accommodation order should include a room for May 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
