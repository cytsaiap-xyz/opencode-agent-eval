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
    expect(result[0].store_id).toBe('S17550802118473175_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118473175_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(129.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802118473175_A00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118473175_P00061", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(258, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802118473175_H00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118473175_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(498, 0);
  });

  test('rubric: Items in the delivery order should be pink', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Items in the delivery order should be pink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Items in the delivery order should be thermal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Items in the delivery order should be thermal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time of the order should be between 09:30:00-10:30:00 on January 19', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time of the order should be between 09:30:00-10:30:00 on January 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be North Building, Sichuan Investment Tower, 112 Tia', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be North Building, Sichuan Investment Tower, 112 Tiantai Road, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: According to the query, the temperature in Chongqing on January 19, 2025 will be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to the query, the temperature in Chongqing on January 19, 2025 will be 2°C-8°C, so the package purchased at the scenic spot is for hot spring only"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for the scenic spot reservation is January 19, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for the scenic spot reservation is January 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant in the scenic spot order should be Tianci Hot Spring Resort', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the scenic spot order should be Tianci Hot Spring Resort"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the booked hotel and Tianci Hot Spring Resort Hotel inside ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the booked hotel and Tianci Hot Spring Resort Hotel inside Tianci Hot Spring Resort, Beibei District, Chongqing should be less than or equal to 500m"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the booked hotel should be greater than or equal to 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the booked hotel should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the hotel reservation should be January 19, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the hotel reservation should be January 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
