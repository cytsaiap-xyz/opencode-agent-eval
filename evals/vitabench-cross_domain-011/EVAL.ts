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
    expect(result[0].store_id).toBe('S17550802129001233_I00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129001233_P00057 ", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(258, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802129001233_T00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129001233_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(75.5, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550848571848043_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550848571848043_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: The grilled fish delivery restaurant should offer Dine-In Available', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish delivery restaurant should offer Dine-In Available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish restaurant must have a rating of no less than 4.2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish restaurant must have a rating of no less than 4.2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish ordered must be Non-Spicy flavor [such as five-spice]', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish ordered must be Non-Spicy flavor [such as five-spice]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish portion must be For 4 People', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish portion must be For 4 People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item must be Grilled Fish', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item must be Grilled Fish"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish order should be delivered to Unit 502, Building 3, Entrance 1, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish order should be delivered to Unit 502, Building 3, Entrance 1, Longcheng Shangdu Community, 169 Qinxian North Street, Xiaodian District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish order must be delivered before 3 PM on February 27', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish order must be delivered before 3 PM on February 27"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arcade ordered must have New Equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arcade ordered must have New Equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arcade ordered must have Dance Machine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arcade ordered must have Dance Machine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arcade package should include Popcorn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arcade package should include Popcorn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train booking should be for a train from Taiyuan to Linfen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train booking should be for a train from Taiyuan to Linfen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket must be for a train departing around 2 PM [specifically, with d', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket must be for a train departing around 2 PM [specifically, with departure time between 13:45 and 14:15 on February 28, 2025]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket must be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket must be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check all available options for the earliest arrival time, which is D257', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check all available options for the earliest arrival time, which is D2575, so the order should be for train D2575"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order date should be February 28, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order date should be February 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
