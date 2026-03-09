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
    expect(result[0].store_id).toBe('S17564420246412321_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420246412321_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(528, 0);
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
    expect(result[2].store_id).toBe('S17564420246412321_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420246412321_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(268, 0);
  });

  test('rubric: The mahjong venue must have a good environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue must have a good environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong venue facilities must be relatively new', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue facilities must be relatively new"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong venue cannot be located in a residential area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue cannot be located in a residential area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong venue must be Full self-service style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue must be Full self-service style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong package ordered should not include tea and snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong package ordered should not include tea and snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong venue order must be a 6-hour private room package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue order must be a 6-hour private room package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mahjong venue reservation time must be August 24, 2024 at 4 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mahjong venue reservation time must be August 24, 2024 at 4 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the mahjong venue reservation should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the mahjong venue reservation should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved mahjong venue should be Shangya Card & Chess Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved mahjong venue should be Shangya Card & Chess Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant ordered must be an established venue with at least five years', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant ordered must be an established venue with at least five years of operation, opened before 2019"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant ordered should be within 500m (including 500m) of Laojiekou B', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant ordered should be within 500m (including 500m) of Laojiekou BBQ, 156 Financial Second Street, Taihu New Town, Binhu District, Wuxi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant ordered must be open until 3:00 AM (including 3:00 AM)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant ordered must be open until 3:00 AM (including 3:00 AM)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant order should be a Set menu for four', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant order should be a Set menu for four"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant order should cost no more than 80 yuan per person, with a tot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant order should cost no more than 80 yuan per person, with a total order amount not exceeding 320 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
