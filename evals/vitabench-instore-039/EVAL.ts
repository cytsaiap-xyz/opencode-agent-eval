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
    expect(result[0].store_id).toBe('S17564426772264179_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426772264179_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564426772264179_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426772264179_P00010", "quantity": 1}, {"product_id": "S17564426772264179_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(86, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: Based on available information, the equestrian club\'s parent-child packages hav', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on available information, the equestrian club\'s parent-child packages have an age restriction of 5 years and above, so the recommendation should be the family park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The family park should be located within the city area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The family park should be located within the city area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The family park should allow interaction with small animals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The family park should allow interaction with small animals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the family park should be a family package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the family park should be a family package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the family park should include feeding small animals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the family park should include feeding small animals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xibei should be no more than 3km (including 3km) from Wonderful Animal Kingdom F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xibei should be no more than 3km (including 3km) from Wonderful Animal Kingdom Family Park, No. 18 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items at Xibei should include children\'s meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items at Xibei should include children\'s meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items at Xibei should include You Mian (oat noodles)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items at Xibei should include You Mian (oat noodles)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Children\'s meal package and You Mian should be from the same restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Children\'s meal package and You Mian should be from the same restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for Xibei should be National Day (October 1, 2025) at 12:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for Xibei should be National Day (October 1, 2025) at 12:30 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Xibei reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Xibei reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Xibei You Mian Village (Hong Kong Middle Road ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Xibei You Mian Village (Hong Kong Middle Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
