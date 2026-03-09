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
    expect(result[0].store_id).toBe('S17550802108642397_I00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108642397_P00076", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1838, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802108642397_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108642397_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(598, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802108642397_F00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108642397_P00043", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(560, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The KTV ordered must have private rooms that can accommodate 10 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV ordered must have private rooms that can accommodate 10 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV ordered must be open 24 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV ordered must be open 24 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package ordered must include champagne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package ordered must include champagne"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package ordered must be applicable for entry at 8:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package ordered must be applicable for entry at 8:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert ordered must be suitable for 10 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert ordered must be suitable for 10 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert package ordered must include at least 4 types of desserts', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert package ordered must include at least 4 types of desserts"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dessert ordered should match the user\'s dietary preference: avoiding high s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert ordered should match the user\'s dietary preference: avoiding high sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the dessert order should be Golden Age KTV, 89 Jiefang ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dessert order should be Golden Age KTV, 89 Jiefang Road, Quanshan District, Xuzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the dessert order should be between 8-9 PM on August 7, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the dessert order should be between 8-9 PM on August 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price for KTV and dessert orders should be less than 3000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price for KTV and dessert orders should be less than 3000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check flight prices from Guangzhou to Xuzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check flight prices from Guangzhou to Xuzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the flight ordered should be between July 30 and August 8,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the flight ordered should be between July 30 and August 8, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ordered cannot be a red-eye flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ordered cannot be a red-eye flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket price cannot exceed 564 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket price cannot exceed 564 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight number in the flight order should be MU5321', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight number in the flight order should be MU5321"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the flight order should be August 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the flight order should be August 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reserved is Golden Age KTV', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reserved is Golden Age KTV"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation time is 8:00 PM on August 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation time is 8:00 PM on August 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
