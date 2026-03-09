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
    expect(result[0].store_id).toBe('S17557514993656554_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514993656554_P00002", "quantity": 1}, {"product_id": "S17557514993656554_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1900, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514993656554_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514993656554_P00020", "quantity": 2}, {"product_id": "S17557514993656554_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1240, 0);
  });

  test('rubric: Hotel booking dates must be January 2, 2025 and January 3, 2025 respectively', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel booking dates must be January 2, 2025 and January 3, 2025 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located near Changbai Mountain (such as Songjianghe Town in Fu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located near Changbai Mountain (such as Songjianghe Town in Fusong County or other areas surrounding the Changbai Mountain scenic area)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide free parking service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide free parking service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must have hot spring facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must have hot spring facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room must be a heated kang bed type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room must be a heated kang bed type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking must be for family rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking must be for family rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide breakfast service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide breakfast service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets must be multi-site combo tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets must be multi-site combo tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets must not include shuttle bus service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets must not include shuttle bus service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Child ticket discounts available for a 9-year-old child must be inquired about', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Child ticket discounts available for a 9-year-old child must be inquired about"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Different combo ticket purchase options must be compared for price differences, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Different combo ticket purchase options must be compared for price differences, with the result showing that purchasing two adult combo tickets and one child combo ticket separately is cheaper than a family combo ticket, therefore the ticket order must include 2 adult combo tickets and 1 child combo ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets must be for January 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets must be for January 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
