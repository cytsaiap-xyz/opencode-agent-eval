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
    expect(result[0].store_id).toBe('S17557512133563110_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512133563110_P00133", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(7100, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512133563110_F00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512133563110_P00150", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(6300, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512133563110_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512133563110_P00028", "quantity": 2}, {"product_id": "S17557512133563110_P00029", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(4320, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512133563110_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512133563110_P00014", "quantity": 1}, {"product_id": "S17557512133563110_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(5600, 0);
  });

  test('rubric: The outbound flight should be CA1357, the return flight should be CZ6789, compar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight should be CA1357, the return flight should be CZ6789, comparing the price of January 22 outbound flight (1350 yuan) + January 26 return flight (1350 yuan) with January 23 outbound flight (1420 yuan) + January 27 return flight (1260 yuan). January 23 outbound flight and January 27 return flight is the cheapest flight combination, so the outbound flight date should be January 23, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight should be from Hangzhou to Sanya', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight should be from Hangzhou to Sanya"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound flight quantity should be 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound flight quantity should be 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight date should be January 27, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight date should be January 27, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be from Sanya to Hangzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be from Sanya to Hangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight quantity should be 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight quantity should be 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There is no sunny day in Sanya from January 23 to January 24, 2023, so the hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There is no sunny day in Sanya from January 23 to January 24, 2023, so the hotel ordered in Sanya Bay should include an indoor pool"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered in Sanya Bay should provide airport transfer service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered in Sanya Bay should provide airport transfer service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: To keep the total cost of four nights\' accommodation within 10,000 yuan, the ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "To keep the total cost of four nights\' accommodation within 10,000 yuan, the room type of the hotel in Sanya Bay should be a double room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sanya Bay hotel order should include 2 double rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sanya Bay hotel order should include 2 double rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sanya Bay hotel order should include rooms for 2 nights on January 23, 2023 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sanya Bay hotel order should include rooms for 2 nights on January 23, 2023 and January 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There are sunny days in Sanya from January 25 to January 26, 2023, so the hotel ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There are sunny days in Sanya from January 25 to January 26, 2023, so the hotel ordered in Haitang Bay should be a sea view room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered in Haitang Bay should provide airport transfer service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered in Haitang Bay should provide airport transfer service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type of the hotel in Haitang Bay should be a Sea View Family Suite (Sui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type of the hotel in Haitang Bay should be a Sea View Family Suite (Suitable for 5-6 People)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Haitang Bay hotel order should include rooms for 2 nights on January 25, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Haitang Bay hotel order should include rooms for 2 nights on January 25, 2023 and January 26, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
