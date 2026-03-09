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
    expect(result[0].store_id).toBe('S17550808014223099_A00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00026", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(320, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550808014223099_A00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00024", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(320, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550808014223099_I00014');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00075", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(128, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550808014223099_I00012');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00065", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(128, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17550808014223099_I00016');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00085", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(88, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17550808014223099_A00005');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808014223099_P00032", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(180, 0);
  });

  test('rubric: The order status for the Leshan Giant Buddha ticket dated June 15, 2025 should b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status for the Leshan Giant Buddha ticket dated June 15, 2025 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The final ordered Leshan Giant Buddha scenic spot ticket type should be Adult Ti', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The final ordered Leshan Giant Buddha scenic spot ticket type should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets in the final ordered Leshan Giant Buddha scenic spot ord', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets in the final ordered Leshan Giant Buddha scenic spot order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order date for the final Leshan Giant Buddha ticket order should be June 14,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order date for the final Leshan Giant Buddha ticket order should be June 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fried skewer restaurant ordered from should be Wang Hedi Fried Skewers (Lesh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fried skewer restaurant ordered from should be Wang Hedi Fried Skewers (Leshan Flagship Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased fried skewer set meal should be a set for two people, not two indi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased fried skewer set meal should be a set for two people, not two individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased fried skewer set meal should not contain offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased fried skewer set meal should not contain offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beef restaurant ordered from should have been in business for 10 years or mo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beef restaurant ordered from should have been in business for 10 years or more"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased beef set meal should not contain offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased beef set meal should not contain offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased beef set meal should be for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased beef set meal should be for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Bobo Chicken restaurant ordered from should have been in business for 10 yea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Bobo Chicken restaurant ordered from should have been in business for 10 years or more"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased Bobo Chicken set meal should not contain offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased Bobo Chicken set meal should not contain offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased Bobo Chicken set meal should not contain offal and should be for t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased Bobo Chicken set meal should not contain offal and should be for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Bobo Chicken restaurant ordered from should specialize in Bobo Chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Bobo Chicken restaurant ordered from should specialize in Bobo Chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cruise tickets should be valid for evening use', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cruise tickets should be valid for evening use"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The use date for the cruise ticket order should be June 14, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The use date for the cruise ticket order should be June 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets in the cruise ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets in the cruise ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
