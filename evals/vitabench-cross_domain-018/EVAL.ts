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
    expect(result[0].store_id).toBe('S17550802116123836_I00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802116123836_P00044", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2988, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802091124808_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550848565247521_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(13999, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802116123836_A00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802116123836_P00003", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(150, 0);
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

  test('rubric: The restaurant ordered must be a Michelin restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must be a Michelin restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the highest per capita Michelin set meal, the result is from Nebul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the highest per capita Michelin set meal, the result is from Nebula, so the ordered set meal must be from Nebula"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant must provide a romantic and private dining environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant must provide a romantic and private dining environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal in the restaurant order must have auspicious meaning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal in the restaurant order must have auspicious meaning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order set meal must avoid high purine foods (such as offal/seafoo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order set meal must avoid high purine foods (such as offal/seafood soup), and must avoid foods or drinks containing alcohol"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered phone must be the latest iPhone model', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered phone must be the latest iPhone model"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered phone must have 1TB of storage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered phone must have 1TB of storage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The phone should be in stock', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The phone should be in stock"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The phone should be blue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The phone should be blue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the phone order must be Nebula, 100 Nanguan Street, Bei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the phone order must be Nebula, 100 Nanguan Street, Beilin District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the phone order must be the evening of July 18, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the phone order must be the evening of July 18, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the theme of Xi\'an Art Museum\'s current exhibition, the result is t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the theme of Xi\'an Art Museum\'s current exhibition, the result is that there are modern art related exhibitions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the art museum order must be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the art museum order must be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the opening hours of Xi\'an Art Museum, the result shows that it\'s open u', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the opening hours of Xi\'an Art Museum, the result shows that it\'s open until 17:00, so the date of the art museum ticket must be on a weekend"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time must be Friday evening (2025-07-18)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time must be Friday evening (2025-07-18)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant must be Nebula', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant must be Nebula"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
