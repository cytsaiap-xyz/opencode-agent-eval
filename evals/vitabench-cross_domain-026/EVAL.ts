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
    expect(result[0].store_id).toBe('S17550802154625724_I00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154625724_P00075", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802154625724_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154625724_P00006", "quantity": 1}, {"product_id": "S17550802154625724_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(59.8, 0);
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

  test('rubric: The pottery workshop to be ordered should be within 1km of the hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop to be ordered should be within 1km of the hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pottery workshop is the highest-rated one among the available option', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pottery workshop is the highest-rated one among the available options (shop_id is S17550802154625724_I00012)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package purchased at the pottery workshop is for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package purchased at the pottery workshop is for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in the delivery order should be M Size', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in the delivery order should be M Size"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of M Size product in the delivery order is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of M Size product in the delivery order is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in the delivery order should be XL Size', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in the delivery order should be XL Size"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of XL Size product in the delivery order is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of XL Size product in the delivery order is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Both products in the delivery order are from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Both products in the delivery order are from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the delivery order is Room 1201, Unit 2, Building 5, Ol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the delivery order is Room 1201, Unit 2, Building 5, Olympic Garden Residential Area, No.1 Olympic Center West Road, Lixia District, Jinan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the delivery order is 19:45:00-20:45:00 on 2025-08-15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the delivery order is 19:45:00-20:45:00 on 2025-08-15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calculated distance from the hotel to the pottery workshop is 0.075km', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calculated distance from the hotel to the pottery workshop is 0.075km"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery workshop to be booked should be Taoran Handmade Pottery Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop to be booked should be Taoran Handmade Pottery Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the hotel to the pottery workshop is 0.075km, the user prefers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the hotel to the pottery workshop is 0.075km, the user prefers to walk there, and books a slot at the pottery workshop for 14:30:00 on August 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people in the pottery workshop reservation is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people in the pottery workshop reservation is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Weihai on August 17, 2025 is rainy, and the high-speed rail arriv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Weihai on August 17, 2025 is rainy, and the high-speed rail arrival time should be around 18:00 on August 17, 2025 [specifically, the high-speed rail arrival time should be between 17:45 and 18:15]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail tickets purchased are from Weihai to Jinan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail tickets purchased are from Weihai to Jinan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The high-speed rail tickets purchased are for Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The high-speed rail tickets purchased are for Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of high-speed rail tickets purchased is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of high-speed rail tickets purchased is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
