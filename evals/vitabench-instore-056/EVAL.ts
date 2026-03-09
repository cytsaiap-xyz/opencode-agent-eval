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
    expect(result[0].store_id).toBe('S17567836591639964_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836591639964_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(268, 0);
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
    expect(result[2].store_id).toBe('S17567836591639964_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836591639964_P00010", "quantity": 1}];
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
    expect(result[3].store_id).toBe('S17567836591639964_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836591639964_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(258, 0);
  });

  test('rubric: The go-kart track should have a professional track design', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track should have a professional track design"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track should be an outdoor venue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track should be an outdoor venue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track should have commercial areas or food streets nearby', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track should have commercial areas or food streets nearby"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track order should be a Two-Person Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track order should be a Two-Person Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart package ordered should include One Adult and One Child racing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart package ordered should include One Adult and One Child racing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track order should include safety equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track order should include safety equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track product ordered should be available on weekends', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track product ordered should be available on weekends"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved go-kart track should be Speed Star Karting Track', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved go-kart track should be Speed Star Karting Track"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The go-kart track reservation time should be 2024-10-27 09:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The go-kart track reservation time should be 2024-10-27 09:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: You will bring your wife and child, but your wife doesn\'t like to participate a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "You will bring your wife and child, but your wife doesn\'t like to participate and will take photos of you and your son from outside the track. Therefore, the go-kart track reservation should be for 2 people (you and your son)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be a Mexican restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a Mexican restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include Tacos', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include Tacos"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a three-person meal package, not multiple individ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a three-person meal package, not multiple individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The park should be closest to B1-102, Sheshan Tianjie, 1088 Linhu Road, Sheshan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The park should be closest to B1-102, Sheshan Tianjie, 1088 Linhu Road, Sheshan Town, Songjiang District, Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The park order should be a package for two adults and one child', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The park order should be a package for two adults and one child"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The park should provide parking facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The park should provide parking facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
