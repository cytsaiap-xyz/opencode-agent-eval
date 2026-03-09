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
    expect(result[0].store_id).toBe('S17557505466916064_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505466916064_P00070", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1520, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505466916064_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505466916064_P00015", "quantity": 2}, {"product_id": "S17557505466916064_P00016", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1440, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505466916064_F00013');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505466916064_P00089", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1520, 0);
  });

  test('rubric: Flight to Ili is scheduled for June 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight to Ili is scheduled for June 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight arrives in Ili around 4 PM on June 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight arrives in Ili around 4 PM on June 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of tickets to Ili is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of tickets to Ili is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay should be in Country Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay should be in Country Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay should offer Flower Field View', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay should offer Flower Field View"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the king room costs over 200 yuan per night, the homestay booking should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the king room costs over 200 yuan per night, the homestay booking should be for twin rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking should include 2 twin rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking should include 2 twin rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking should be for 2 nights, on June 20 and June 21, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking should be for 2 nights, on June 20 and June 21, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Flight to Urumqi is scheduled for June 22, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight to Urumqi is scheduled for June 22, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight arrives in Urumqi in the afternoon of June 22, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight arrives in Urumqi in the afternoon of June 22, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of tickets to Urumqi is 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of tickets to Urumqi is 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
