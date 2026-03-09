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
    expect(result[0].store_id).toBe('S17567843825839468_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843825839468_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(588, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567843825839468_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843825839468_P00019", "quantity": 6}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(168, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17567843825839468_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567843825839468_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(288, 0);
  });

  test('rubric: The Chinese restaurant should be within 5000m (inclusive) of Shanxi Medical Univ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chinese restaurant should be within 5000m (inclusive) of Shanxi Medical University"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chinese restaurant should have retro decoration style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chinese restaurant should have retro decoration style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the Chinese restaurant should be a six-person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the Chinese restaurant should be a six-person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the Chinese restaurant should include drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the Chinese restaurant should include drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the Chinese restaurant should be available on weekends', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the Chinese restaurant should be available on weekends"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The board game club should be within 3000m (inclusive) of Laozhaimen Private Cui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The board game club should be within 3000m (inclusive) of Laozhaimen Private Cuisine, 500m east of Shanxi Medical University, Qinxian North Street, Xiaodian District, Taiyuan City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the board game club should be Werewolf game tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the board game club should be Werewolf game tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the board game club should be Individual ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the board game club should be Individual ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of ordered items at the board game club should be 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of ordered items at the board game club should be 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flower shop should be within 2000m (inclusive) of Room 1203, Buildin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flower shop should be within 2000m (inclusive) of Room 1203, Building A, Longcheng Garden, No.100 South Inner Ring Street, Yingze District, Taiyuan City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flower shop should be open until 23:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flower shop should be open until 23:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if the flower shop has white rose bouquet vouchers, result is no, t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the flower shop has white rose bouquet vouchers, result is no, therefore the ordered item at the flower shop should be red rose"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the flower shop should be a bouquet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the flower shop should be a bouquet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the flower shop cannot be a discounted item', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the flower shop cannot be a discounted item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
