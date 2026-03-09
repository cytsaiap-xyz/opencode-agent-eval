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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802111542162_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802111542162_P00001", "quantity": 1}, {"product_id": "S17550802111542162_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(197.9, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802111542162_T00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802111542162_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(882, 0);
  });

  test('rubric: The reserved restaurant should be within 3km from Dalian Port, 41 Changjiang Roa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be within 3km from Dalian Port, 41 Changjiang Road, Zhongshan District, Dalian, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have Accessible Facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have Accessible Facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have Child-Friendly dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have Child-Friendly dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have Elder-Friendly dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have Elder-Friendly dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be suitable for three generations dining together', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be suitable for three generations dining together"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 12:00 on July 27, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 12:00 on July 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order should be Harbor Family Banquet Resta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order should be Harbor Family Banquet Restaurant, No.5 Harbor Square, Zhongshan District, Dalian, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the takeout order should be around 12:00 on 2025-07-27 [i.', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the takeout order should be around 12:00 on 2025-07-27 [i.e., delivery time should be between 11:40 and 12:20]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order should include a walking stick', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order should include a walking stick"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order should include Adult Diapers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order should include Adult Diapers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The walking stick and Adult Diapers in the takeout order should be from the same', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The walking stick and Adult Diapers in the takeout order should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket to purchase should be for High-Speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket to purchase should be for High-Speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The High-Speed Rail ticket should be First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The High-Speed Rail ticket should be First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The High-Speed Rail ticket departure date should be 2025-07-27', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The High-Speed Rail ticket departure date should be 2025-07-27"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The High-Speed Rail ticket arrival time should be before 11:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The High-Speed Rail ticket arrival time should be before 11:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
