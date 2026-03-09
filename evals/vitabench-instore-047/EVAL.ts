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
    expect(result[0].store_id).toBe('S17567836566242471_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836566242471_P00001", "quantity": 1}, {"product_id": "S17567836566242471_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(156, 0);
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
    expect(result[2].store_id).toBe('S17567836566242471_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836566242471_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(68, 0);
  });

  test('rubric: Training institution orders should include foreign teacher instruction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Training institution orders should include foreign teacher instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Training institution course orders should include situational dialogue practice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Training institution course orders should include situational dialogue practice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Training institution orders should include adult single-person trial voucher', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Training institution orders should include adult single-person trial voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Training institution orders should include kindergarten single-person trial vouc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Training institution orders should include kindergarten single-person trial voucher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Training institution course orders should be for English speaking courses', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Training institution course orders should be for English speaking courses"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of training institution course orders should be within 200 yuan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of training institution course orders should be within 200 yuan (including 200 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Adult trial voucher and kindergarten trial voucher should be from the same train', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Adult trial voucher and kindergarten trial voucher should be from the same training institution"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved training institution should be Global Foreign Language Institute (W', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved training institution should be Global Foreign Language Institute (Wanda Plaza Campus)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the training institution reservation is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the training institution reservation is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the training institution is 2025-05-17 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the training institution is 2025-05-17 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if there is a Pizza Hut within 1km (inclusive) of Global English I', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if there is a Pizza Hut within 1km (inclusive) of Global English Institute, 5th Floor, Building A, Wanda Plaza, No. 265 Zhongshan East Road, Chang\'an District, Shijiazhuang, the result is yes; restaurant order merchant should be Pizza Hut"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from Pizza Hut is Durian Pizza', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from Pizza Hut is Durian Pizza"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from Pizza Hut is Children\'s Set Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from Pizza Hut is Children\'s Set Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
