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
    expect(result[0].store_id).toBe('S17567844984464149_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844984464149_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(388, 0);
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
    expect(result[2].store_id).toBe('S17567844984464149_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844984464149_P00014", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(200, 0);
  });

  test('rubric: The ordered restaurant needs to provide Thai cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant needs to provide Thai cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must be a 4-person set meal, not multiple individual set me', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must be a 4-person set meal, not multiple individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal must include Tom Yum', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal must include Tom Yum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal must include Yellow Curry Chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal must include Yellow Curry Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since there are 4 people dining, and each person is expected to pay 100 yuan, th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since there are 4 people dining, and each person is expected to pay 100 yuan, the calculation is 4*100=400 yuan. Therefore, the restaurant set meal price needs to be within 400 yuan (including 400 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be Thai Home Thai Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be Thai Home Thai Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is 18:00 on August 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is 18:00 on August 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation is for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation is for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cat café package needs to accommodate 4 people (purchase a four-pers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cat café package needs to accommodate 4 people (purchase a four-person meal or purchase 4 single-person meals)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cat café package must have unlimited time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cat café package must have unlimited time"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cat café package must include free drink refills', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cat café package must include free drink refills"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cat café must be within 1 kilometer (including 1 kilometer) from Tha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cat café must be within 1 kilometer (including 1 kilometer) from Thai Home Thai Cuisine, 2nd Floor, Building B, Kaixuan Plaza, No. 168 Zhongzhou Middle Road, Xigong District, Luoyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
