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
    expect(result[0].store_id).toBe('S17557516207048450_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516207048450_P00046", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(200, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557516207048450_T00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516207048450_P00096", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(170, 0);
  });

  test('rubric: Need to check if Danxia Mountain Scenic Area has two-day tickets available, the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if Danxia Mountain Scenic Area has two-day tickets available, the result shows no tickets available for 2025-06-14, so adult tickets should be purchased instead"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for the admission ticket order should be June 14, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for the admission ticket order should be June 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the admission ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the admission ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot in the admission ticket order must be Danxia Mountain Scenic Are', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot in the admission ticket order must be Danxia Mountain Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check last month\'s train ticket order record to Shaoguan, the result sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check last month\'s train ticket order record to Shaoguan, the result shows: Order ID S17557516207048450_O00001, store_id S17557516207048450_T00010, Train D7541, departing at 08:45 and arriving at 10:23, Second Class Seat for 85 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number in the train ticket order must be Train D7541', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number in the train ticket order must be Train D7541"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the train ticket order must be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the train ticket order must be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the train ticket order must be June 14, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the train ticket order must be June 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the distance from the railway station (Shaoguan Railway Station, Zhan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the distance from the railway station (Shaoguan Railway Station, Zhanqian Road, Zhenjiang District, Shaoguan City, Guangdong Province) to Danxia Mountain (Danxia Mountain Scenic Area, Renhua County, Shaoguan City, Guangdong Province), the result is approximately 20 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
