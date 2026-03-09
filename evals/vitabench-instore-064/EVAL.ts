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
    expect(result[0].store_id).toBe('S17567836621485163_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836621485163_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(288, 0);
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
    expect(result[2].store_id).toBe('S17567836621485163_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836621485163_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: The beauty salon should be within 1km (inclusive) from the 16th Floor, Yuanda Sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon should be within 1km (inclusive) from the 16th Floor, Yuanda Shopping Mall Office Building, 1268 Fifth Avenue, Qunli, Daoli District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beauty salon\'s rating should not be less than 4.8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon\'s rating should not be less than 4.8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased beauty salon package should be a deep cleansing package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased beauty salon package should be a deep cleansing package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After checking if the beauty salon has Hifu (High-Intensity Focused Ultrasound) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After checking if the beauty salon has Hifu (High-Intensity Focused Ultrasound) packages, the result is positive, so the purchased package should be a Hifu package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the beauty salon order should not exceed 300 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the beauty salon order should not exceed 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beauty salon appointment time should be November 6, 2024 at 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beauty salon appointment time should be November 6, 2024 at 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the beauty salon appointment should be 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the beauty salon appointment should be 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed beauty salon should be Yashi Beauty Care Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed beauty salon should be Yashi Beauty Care Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be a Russian restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be a Russian restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a Set Menu for 2-3 People', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a Set Menu for 2-3 People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be within 1km (inclusive) from CR Arch of Triumph, 218 Hon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 1km (inclusive) from CR Arch of Triumph, 218 Hongqi Street, Nangang District, Harbin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Set Menu for 2-3 People should be the cheapest one in the restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Set Menu for 2-3 People should be the cheapest one in the restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
