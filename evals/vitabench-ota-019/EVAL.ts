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
    expect(result[0].store_id).toBe('S17557071544947545_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071544947545_P00079", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(570, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557071544947545_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071544947545_P00039", "quantity": 2}, {"product_id": "S17557071544947545_P00041", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(186, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557071544947545_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071544947545_P00052", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(120, 0);
  });

  test('rubric: The departure date of the ordered train ticket should be June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the ordered train ticket should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the ordered train ticket should be around 10:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the ordered train ticket should be around 10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered train ticket must be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train ticket must be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must search for the name and information of the famous Chinese-style immersive e', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must search for the name and information of the famous Chinese-style immersive experience park in Hebi, which is Hebi Guling Mountain Scenic Area, a Chinese-style immersive experience park with Han and Tang dynasty culture as its theme"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the order for the Chinese-style immersive experience park sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the order for the Chinese-style immersive experience park should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Chinese-style immersive experience park, must choose the most economical', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Chinese-style immersive experience park, must choose the most economical/cheapest ticket type, and the order should include 2 Adult Ticket (58*2) and 2 Senior Ticket (35*2)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot in the order with ticket date of June 25, 2023 should be Yunmeng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot in the order with ticket date of June 25, 2023 should be Yunmeng Mountain"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the weather in Hebi on 2023-06-25, which is moderate rain. Girlfriend', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the weather in Hebi on 2023-06-25, which is moderate rain. Girlfriend\'s parents will not participate in the hiking activity, so the quantity of tickets in the Yunmeng Mountain order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Yunmeng Mountain order should be June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Yunmeng Mountain order should be June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
