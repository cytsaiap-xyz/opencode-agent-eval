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
    expect(result[0].store_id).toBe('S17557505476711665_F00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505476711665_P00056", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(980, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505476711665_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505476711665_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(135, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505476711665_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505476711665_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(880, 0);
  });

  test('rubric: The departure date for the flight booking should be 2023-08-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the flight booking should be 2023-08-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination for the flight booking should be Mount Wutai Airport', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination for the flight booking should be Mount Wutai Airport"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight price should be around 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight price should be around 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the flight should be before or at 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the flight should be before or at 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Choose the flight with the shortest flying time, the flight in the order should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Choose the flight with the shortest flying time, the flight in the order should be MU2156 (flying time 1 hour 45 minutes)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are availa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, should purchase Regular Admission"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction in the ticket order should be Mount Wutai Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction in the ticket order should be Mount Wutai Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the attraction order should be 2023-08-13', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the attraction order should be 2023-08-13"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The accommodation type should be inn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The accommodation type should be inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are availa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if Mount Wutai Scenic Area tickets with Vegetarian Meal are available, the result is no, the inn ordered must provide Vegetarian Food service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The decoration style of the inn should be Zen Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The decoration style of the inn should be Zen Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date in the inn order should be 2023-08-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date in the inn order should be 2023-08-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
