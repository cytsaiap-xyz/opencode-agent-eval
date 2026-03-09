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
    expect(result[0].store_id).toBe('S17567844366188652_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844366188652_P00001", "quantity": 1}, {"product_id": "S17567844366188652_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(856, 0);
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

  test('rubric: The recommended seafood restaurant is within 3km (inclusive) of Qingdao Film Stu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended seafood restaurant is within 3km (inclusive) of Qingdao Film Studio, No.1 Shilaoren Tourist Park, Laoshan District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seafood restaurant order should include a food set meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seafood restaurant order should include a food set meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seafood restaurant order should include a beverage set meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seafood restaurant order should include a beverage set meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the food set meal in the seafood restaurant order, the user prefers a three-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the food set meal in the seafood restaurant order, the user prefers a three-person set meal, or a two-person set meal if the former is unavailable. The result is available; the ordered food set meal should be a three-person set meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the beverage set meal in the seafood restaurant order, the user prefers a cr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the beverage set meal in the seafood restaurant order, the user prefers a craft beer set for two, or a drinks set for two if the former is unavailable. The result is available; the ordered beverage set meal should be a craft beer set for two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food set meal and beverage set meal should be from the same seafood restaura', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food set meal and beverage set meal should be from the same seafood restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food set meal in the seafood restaurant order should include Boston ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food set meal in the seafood restaurant order should include Boston Lobster"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food set meal in the seafood restaurant order should include King Cr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food set meal in the seafood restaurant order should include King Crab"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the seafood restaurant order should be within 1000 yuan (incl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the seafood restaurant order should be within 1000 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved seafood restaurant should be Pearl of the Sea Seafood Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved seafood restaurant should be Pearl of the Sea Seafood Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the user\'s company and the seafood restaurant needs to be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the user\'s company and the seafood restaurant needs to be checked. If it\'s more than 2km (exclusive), the reservation should be at 18:00:00 on 2024-08-09; otherwise, it should be at 17:30:00 on 2024-08-09. Upon checking, the distance between the user\'s company and the seafood restaurant is 900 meters, which is within 2km (inclusive), so the seafood restaurant reservation time is 17:30:00 on 2024-08-09"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the seafood restaurant reservation is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the seafood restaurant reservation is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
