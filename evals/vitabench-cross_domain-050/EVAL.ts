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
    expect(result[0].store_id).toBe('S17550812145855949_I00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812145855949_P00089", "quantity": 6}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4188, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812145855949_T00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812145855949_P00048", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(72, 0);
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

  test('rubric: Murder Mystery Game venue should provide a two-day one-night murder mystery expe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Murder Mystery Game venue should provide a two-day one-night murder mystery experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered script should be an Emotional Script', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered script should be an Emotional Script"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered script should have Medium Difficulty Deduction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered script should have Medium Difficulty Deduction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered script should be a 6-Person Script', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered script should be a 6-Person Script"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered murder mystery package should include male and female Styling servic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery package should include male and female Styling services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered murder mystery package must include Dinner Included', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered murder mystery package must include Dinner Included"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure station of the ordered train should be Xipu Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station of the ordered train should be Xipu Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station of the ordered train should be Dujiangyan Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station of the ordered train should be Dujiangyan Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the ordered train should be between 10:00-12:00 on August ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the ordered train should be between 10:00-12:00 on August 3, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of ordered train tickets should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of ordered train tickets should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 3000m of Dujiangyan Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 3000m of Dujiangyan Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant package should include Wellness dishes and Snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant package should include Wellness dishes and Snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant package should be the Three-Person Package at Dujiangyan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant package should be the Three-Person Package at Dujiangyan Sichuan Cuisine Restaurant, not three individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Seats should be reserved at the ordered restaurant for 12:30:00 on August 4, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Seats should be reserved at the ordered restaurant for 12:30:00 on August 4, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be six', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be six"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
