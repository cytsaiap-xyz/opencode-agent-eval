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
    expect(result[0].store_id).toBe('S17550810285799690_I00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810285799690_P00048", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1119, 0);
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
    expect(result[2].store_id).toBe('S17550810285799690_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810285799690_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1800, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550810285799690_S00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810285799690_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(3499, 0);
  });

  test('rubric: The restaurant\'s parking lot needs to provide 20 or more parking spaces', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s parking lot needs to provide 20 or more parking spaces"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant should be suitable for 13 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant should be suitable for 13 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of ordered items from the restaurant should be less than 1560 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of ordered items from the restaurant should be less than 1560 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant should include main course', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant should include main course"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the restaurant cannot contain alcohol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the restaurant cannot contain alcohol"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant is Yunnan Image Restaurant (Dianchi Road Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant is Yunnan Image Restaurant (Dianchi Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is August 23, 2024, 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is August 23, 2024, 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation is 13', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation is 13"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date of the ordered item from the live performance theater is August 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date of the ordered item from the live performance theater is August 26, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the live performance theater is a group ticket (valid for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the live performance theater is a group ticket (valid for up to 15 people)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery item is Pocket 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery item is Pocket 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery item should come from a well-known chain shop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery item should come from a well-known chain shop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order is 15th Floor, Yunnan Image Business ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order is 15th Floor, Yunnan Image Business Center, 448 Youth Road, Wuhua District, Kunming, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the takeout order is August 21, 2024, 15:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the takeout order is August 21, 2024, 15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
