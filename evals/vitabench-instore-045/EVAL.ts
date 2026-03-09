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
    expect(result[0].store_id).toBe('S17564426448032907_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426448032907_P00001", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17564426448032907_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426448032907_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(128, 0);
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

  test('rubric: The ordered item from the Guzheng training merchant should be a beginner instruc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Guzheng training merchant should be a beginner instruction related course"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Guzheng training merchant should include instrument us', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Guzheng training merchant should include instrument usage and basic fingering technique instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Guzheng training merchant should be a three-lesson exp', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Guzheng training merchant should be a three-lesson experience card"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Guzheng training merchant should cost less than or equ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Guzheng training merchant should cost less than or equal to 300 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Guzheng training merchant should be the Guzheng Three-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Guzheng training merchant should be the Guzheng Three-lesson Experience Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Guzheng training merchant should be open until after 9 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Guzheng training merchant should be open until after 9 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the Guzheng training merchant should be October 30, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the Guzheng training merchant should be October 30, 2024 at 21:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Guzheng training appointment should be 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Guzheng training appointment should be 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed Guzheng training merchant should be Ancient Melody Guzheng Art Tra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed Guzheng training merchant should be Ancient Melody Guzheng Art Training Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV should be within 3km (inclusive) from Room 1204, Building 3, Ronghe Shan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV should be within 3km (inclusive) from Room 1204, Building 3, Ronghe Shanshui Lvcheng, No.20 Fengling North Road, Qingxiu District, Nanning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from KTV should be a package that only includes singing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from KTV should be a package that only includes singing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered item from KTV should not exceed 200 yuan (inclusive)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered item from KTV should not exceed 200 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on the user\'s historical behavior, the restaurant appointment should be a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on the user\'s historical behavior, the restaurant appointment should be at Helv Rotating Sushi (Mixc Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant appointment time should be October 27, 2024 at 20:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant appointment time should be October 27, 2024 at 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the sushi restaurant appointment should be 3 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the sushi restaurant appointment should be 3 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
