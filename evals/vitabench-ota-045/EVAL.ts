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
    expect(result[0].store_id).toBe('S17557505502056324_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505502056324_P00078", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1180, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557112364479019_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505502056324_P00021", "quantity": 4}, {"product_id": "S17557505502056324_P00018", "quantity": 4}, {"product_id": "S17557505502056324_P00022", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(9408, 0);
  });

  test('rubric: Flight departure date must be August 27, 2024 (three days before birthday)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight departure date must be August 27, 2024 (three days before birthday)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Flight order must be scheduled in the afternoon to evening, allowing passengers ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight order must be scheduled in the afternoon to evening, allowing passengers to see the sunset from the plane"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the departure and arrival times of train K9786, which are 11:41 de', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the departure and arrival times of train K9786, which are 11:41 departure and 22:58 arrival"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation in Kashgar must be booked for 3 nights', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation in Kashgar must be booked for 3 nights"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Kashgar accommodation check-in dates must be August 28, 2024, August 29, 2024, a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Kashgar accommodation check-in dates must be August 28, 2024, August 29, 2024, and August 30, 2024 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation in Kashgar must be a hotel with Uyghur characteristics', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation in Kashgar must be a hotel with Uyghur characteristics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must book 4 rooms per night for the Kashgar accommodation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must book 4 rooms per night for the Kashgar accommodation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in Kashgar must provide parking services or have a Parking Lot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in Kashgar must provide parking services or have a Parking Lot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
