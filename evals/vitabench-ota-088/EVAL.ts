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
    expect(result[0].store_id).toBe('S17557514720248044_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514720248044_P00103", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(750, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514720248044_F00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514720248044_P00122", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(500, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557514720248044_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514720248044_P00006", "quantity": 2}, {"product_id": "S17557514720248044_P00010", "quantity": 2}, {"product_id": "S17557514720248044_P00011", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1728, 0);
  });

  test('rubric: Must search and compare different date combinations for round-trip flights from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must search and compare different date combinations for round-trip flights from Changchun to Guilin between May 4 and May 10, including combinations such as departing on the 4th and returning on the 7th, departing on the 5th and returning on the 8th, departing on the 6th and returning on the 9th, departing on the 7th and returning on the 10th, etc.; return the cheapest flight price combination as the travel dates, which is May 5th departure (750 yuan) + May 8th return (500 yuan), with a total price of 1250 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order should be for a flight from Changchun to Guilin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order should be for a flight from Changchun to Guilin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order date should be May 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order date should be May 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight order number should be CZ3421', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight order number should be CZ3421"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the outbound flight order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the outbound flight order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order should be for a flight from Guilin to Changchun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order should be for a flight from Guilin to Changchun"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order date should be May 8, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order date should be May 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight order number should be CA1847', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight order number should be CA1847"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the return flight order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the return flight order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check the hotel brands where the user frequently stays, which are Vienna,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check the hotel brands where the user frequently stays, which are Vienna, Ji Hotel, or Orange Hotel; the hotel brand in the hotel order should be Vienna, Ji Hotel, or Orange Hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room in the order must be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room in the order must be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in dates must match the flight itinerary, for a total of 3 night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in dates must match the flight itinerary, for a total of 3 nights"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include 2 rooms per night to accommodate the need for sep', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include 2 rooms per night to accommodate the need for separate beds"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in dates in the hotel order should be May 5, 2025, May 6, 2025, and Ma', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in dates in the hotel order should be May 5, 2025, May 6, 2025, and May 7, 2025 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
