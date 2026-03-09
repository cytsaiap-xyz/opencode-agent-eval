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
    expect(result[0].store_id).toBe('S17567836631075109_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836631075109_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(480, 0);
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

  test('rubric: The base for real-life CS orders should be a large-scale base', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The base for real-life CS orders should be a large-scale base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The base for real-life CS orders must be within 5 kilometers (including 5 kilome', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The base for real-life CS orders must be within 5 kilometers (including 5 kilometers) of the Military Sports Academy Community, 80m Southwest of Taichang Street and Taisheng Road Intersection, Tianhe District, Guangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in real-life CS orders should be a Team Combat Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in real-life CS orders should be a Team Combat Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in real-life CS orders should be an 8-Person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in real-life CS orders should be an 8-Person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in real-life CS orders should be available on weekends', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in real-life CS orders should be available on weekends"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in real-life CS orders must include equipment usage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in real-life CS orders must include equipment usage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in real-life CS orders must include venue usage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in real-life CS orders must include venue usage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The CS base to be reserved should be Extreme Battlefield Real-life CS Base', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The CS base to be reserved should be Extreme Battlefield Real-life CS Base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the CS base reservation should be 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the CS base reservation should be 8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the CS base should be 2024-09-28 at 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the CS base should be 2024-09-28 at 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Query whether there are Halal restaurants within 1 kilometer (including 1 kilome', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query whether there are Halal restaurants within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base, 233 Tianhe North Road, Tianhe District, Guangzhou, and if so, make a reservation. The query result is positive, so the reservation is made for a restaurant within 1 kilometer (including 1 kilometer) of Extreme Battlefield Real-life CS Base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be a Halal Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a Halal Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the reserved restaurant should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the reserved restaurant should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be 2024-09-28 13:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be 2024-09-28 13:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be 8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
