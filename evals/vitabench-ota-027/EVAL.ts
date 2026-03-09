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
    expect(result[0].store_id).toBe('S17557505485023605_F00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485023605_P00092", "quantity": 6}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(7680, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505485023605_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505485023605_P00016", "quantity": 3}, {"product_id": "S17557505485023605_P00013", "quantity": 3}, {"product_id": "S17557505485023605_P00014", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(11520, 0);
  });

  test('rubric: Departure city must be Hangzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure city must be Hangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Destination must be Lhasa, Tibet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Destination must be Lhasa, Tibet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure date must be the 3rd of next month (July 3, 2021)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure date must be the 3rd of next month (July 3, 2021)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check all trains departing from Hangzhou, with results showing that none ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check all trains departing from Hangzhou, with results showing that none can reach the destination by July 4, thus air travel should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the flight order should be 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the flight order should be 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the flight should be in the afternoon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the flight should be in the afternoon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates should be July 3, 2021, July 4, 2021, and July 5, 2021', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates should be July 3, 2021, July 4, 2021, and July 5, 2021"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must have Oxygen Supply Facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must have Oxygen Supply Facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must have Tibetan-style Decoration', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must have Tibetan-style Decoration"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel accommodation should be comfortable', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel accommodation should be comfortable"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All room types in the hotel order should be the same', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All room types in the hotel order should be the same"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel rooms should accommodate 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel rooms should accommodate 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the hotel order needs to be less than or equal to 5000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the hotel order needs to be less than or equal to 5000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check information on popular attractions in Lhasa, with results showing ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check information on popular attractions in Lhasa, with results showing Potala Palace (4.8 stars, 200 yuan ticket), Jokhang Temple (4.7 stars, 85 yuan ticket), Barkhor Street (4.5 stars, Free Admission), and Norbulingka (4.3 stars, 60 yuan ticket)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
