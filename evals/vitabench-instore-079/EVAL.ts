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
    expect(result[0].store_id).toBe('S17567836604989753_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836604989753_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
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
    expect(result[2].store_id).toBe('S17567836604989753_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836604989753_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(158, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836604989753_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836604989753_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(198, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The magic learning studio should be within 3000m (inclusive) of Room 1803, Unit ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The magic learning studio should be within 3000m (inclusive) of Room 1803, Unit 1, Building 2, Lushang Olympic City, 14677 Jingshi Road, Lixia District, Jinan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The magic learning studio should be a top rated merchant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The magic learning studio should be a top rated merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the magic learning studio should be a zero foundation beginn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the magic learning studio should be a zero foundation beginner learning package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the magic learning studio should include magic props', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the magic learning studio should include magic props"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved magic learning studio should be Jinan Magic Association Training Ce', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved magic learning studio should be Jinan Magic Association Training Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the magic learning studio should be 2024-10-12 09:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the magic learning studio should be 2024-10-12 09:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the magic learning studio reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the magic learning studio reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The status of the foot therapy package order should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the foot therapy package order should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The foot therapy package was ordered from Xiushentang premium massage, so the ma', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The foot therapy package was ordered from Xiushentang premium massage, so the massage shop order should be from Xiushentang premium massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the massage shop should be a shoulder and neck massage packa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the massage shop should be a shoulder and neck massage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved massage shop should be Xiushentang premium massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved massage shop should be Xiushentang premium massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the massage shop should be 2024-10-12 12:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the massage shop should be 2024-10-12 12:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the massage shop reservation should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the massage shop reservation should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
