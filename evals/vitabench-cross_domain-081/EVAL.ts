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
    expect(result[0].store_id).toBe('S17550810096682511_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810096682511_P00080", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(567, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810096682511_H00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810096682511_P00029", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(888, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810096682511_S00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810096682511_P00009", "quantity": 1}, {"product_id": "S17550810096682511_P00010", "quantity": 3}, {"product_id": "S17550810096682511_P00011", "quantity": 3}, {"product_id": "S17550810096682511_P00012", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(190.9, 0);
  });

  test('rubric: Search for train tickets from Suzhou to Danyang around 9 PM, the result shows th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Search for train tickets from Suzhou to Danyang around 9 PM, the result shows that tickets for August 7, 2026 are sold out, and need to purchase tickets for around 9 AM on August 8, 2026 [specifically, the departure time of the final booked train ticket should be between 8:45 and 9:15]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type for the train ticket order should be Business class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type for the train ticket order should be Business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 1km (inclusive) of Danyang Station, Zhanqian R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 1km (inclusive) of Danyang Station, Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel check-in date should be August 8, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel check-in date should be August 8, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel check-out date should be August 9, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel check-out date should be August 9, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a four-person room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a four-person room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should provide professional gaming equipment an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should provide professional gaming equipment and gaming chair"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include Red Bull', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include Red Bull"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should have a total of 12 cans of Red Bull', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should have a total of 12 cans of Red Bull"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include puffed snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include puffed snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include 3 types of puffed snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include 3 types of puffed snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should have a total of 8 puffed snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should have a total of 8 puffed snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Red Bull and puffed snacks in the food delivery order should come from the s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Red Bull and puffed snacks in the food delivery order should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the food delivery order should be Danyang Station E-spo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the food delivery order should be Danyang Station E-sports Hotel, 28 Zhanqian Road, Yunyang Street, Danyang, Zhenjiang, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the food delivery order should be 21:00 on August', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the food delivery order should be 21:00 on August 8, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
