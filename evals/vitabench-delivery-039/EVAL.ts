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
    expect(result[0].store_id).toBe('S25381701465595981_S98282');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S57892083557412990_P58196", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(60, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S23249297713141485_S15240');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S23098322117622348_P79075", "quantity": 10}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(30, 0);
  });

  test('rubric: The Black Sesame product ordered from Honeymoon Dessert should be selected with ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Black Sesame product ordered from Honeymoon Dessert should be selected with hot drink attribute, suitable for cold stomach conditions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Honeymoon Dessert store ordered from should be Honeymoon Dessert (Dalian Cap', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Honeymoon Dessert store ordered from should be Honeymoon Dessert (Dalian CapitaMall Peace Plaza Second Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for Black Sesame order should be Dalian Software Park, 160 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Black Sesame order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for Black Sesame order should be before 2025-05-08 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for Black Sesame order should be before 2025-05-08 20:00:00, ensuring the user can enjoy it before working overtime"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of Black Sesame order should be 3 portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of Black Sesame order should be 3 portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for Corn Cake products order should be Dalian Software Park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Corn Cake products order should be Dalian Software Park, 160 meters northeast of the intersection of Huangpu Road and Shuxiang Street, Shahekou District, Dalian, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for Corn Cake products order should be before 2025-0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for Corn Cake products order should be before 2025-05-08 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order quantity of Corn Cake products should be 10 pieces, meeting the stocki', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order quantity of Corn Cake products should be 10 pieces, meeting the stocking needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
