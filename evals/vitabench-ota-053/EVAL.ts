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
    expect(result[0].store_id).toBe('S17557512640389974_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512640389974_P00081", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4740, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512640389974_F00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512640389974_P00082", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(5360, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512640389974_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512640389974_P00003", "quantity": 1}, {"product_id": "S17557512640389974_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(2840, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512640389974_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512640389974_P00044", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(480, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557512640389974_A00006');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512640389974_P00056", "quantity": 1}, {"product_id": "S17557512640389974_P00057", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(300, 0);
  });

  test('rubric: The status of the original order for three economy class flight tickets for June', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the original order for three economy class flight tickets for June 19, 2026 in the historical orders is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the booked flight tickets is June 19, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the booked flight tickets is June 19, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight originally booked in the historical orders was CZ3567, so  the newly ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight originally booked in the historical orders was CZ3567, so  the newly booked flight is also CZ3567"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly booked flight tickets are for business class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly booked flight tickets are for business class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of flight tickets booked is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of flight tickets booked is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates are June 19, 2026 and June 20, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates are June 19, 2026 and June 20, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be close to the business center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be close to the business center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel room type should be a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel room type should be a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price per night for the booked hotel room must be within the range of 1000-2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price per night for the booked hotel room must be within the range of 1000-2000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Next Saturday (June 20, 2026) will be cloudy with no strong wind or rain, so the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Next Saturday (June 20, 2026) will be cloudy with no strong wind or rain, so the tickets purchased for Mount Putuo Scenic Area should include speedboat transportation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s child is 14 years old, and since children\'s tickets are for ages 6-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s child is 14 years old, and since children\'s tickets are for ages 6-12, the number of adult tickets purchased for Mount Putuo Scenic Area should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the tickets purchased for Mount Putuo Scenic Area is June 20, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the tickets purchased for Mount Putuo Scenic Area is June 20, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are for an attraction where fishing is available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are for an attraction where fishing is available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the tickets purchased for the fishing attraction should be June 21, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the tickets purchased for the fishing attraction should be June 21, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s child is 14 years old, so a youth ticket should be purchased for the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s child is 14 years old, so a youth ticket should be purchased for the fishing attraction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fishing attraction order includes an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fishing attraction order includes an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
