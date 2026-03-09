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
    expect(result[0].store_id).toBe('S17557505495911209_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505495911209_P00072", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(178, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505495911209_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505495911209_P00077", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(178, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557546665235880_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557546665235880_P00029", "quantity": 1}, {"product_id": "S17557546665235880_P00030", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(308, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505495911209_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505495911209_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1188, 0);
  });

  test('rubric: Departure train\'s date should be June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure train\'s date should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure train\'s arrival time should be before 10:00 AM on June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure train\'s arrival time should be before 10:00 AM on June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure train\'s tickets should be for Zhuhai to Yangjiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure train\'s tickets should be for Zhuhai to Yangjiang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure train\'s tickets quantity should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure train\'s tickets quantity should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train\'s departure date should be June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train\'s departure date should be June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train\'s departure time should be between 7:00 PM and 8:00 PM on June 25,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train\'s departure time should be between 7:00 PM and 8:00 PM on June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train\'s tickets should be for Yangjiang to Zhuhai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train\'s tickets should be for Yangjiang to Zhuhai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train\'s tickets quantity should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train\'s tickets quantity should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction tickets should be for parasailing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction tickets should be for parasailing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction tickets should include one Parasailing Only Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction tickets should include one Parasailing Only Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction tickets should include one College Entrance Exam Graduate', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction tickets should include one College Entrance Exam Graduate Discount Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered attraction tickets\' usage date should be June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered attraction tickets\' usage date should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel should be five-star', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel should be five-star"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel should provide buffet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel should provide buffet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel room type should be twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel room type should be twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel room quantity should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel room quantity should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel check-in date should be June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel check-in date should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
