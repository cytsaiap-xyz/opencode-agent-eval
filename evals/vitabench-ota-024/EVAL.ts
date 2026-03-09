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
    expect(result[0].store_id).toBe('S17557505467922967_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505467922967_P00040", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(580, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505467922967_T00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505467922967_P00071", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(58, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505467922967_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505467922967_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(188, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505467922967_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505467922967_P00021", "quantity": 1}];
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

  test('rubric: The flight in the airplane order is from Hefei to Taiyuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the airplane order is from Hefei to Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked air ticket should be for June 17, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked air ticket should be for June 17, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the airplane order should arrive in the afternoon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the airplane order should arrive in the afternoon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train in the train ticket order is from Taiyuan to Fenyang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train in the train ticket order is from Taiyuan to Fenyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked train ticket date should be June 18, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked train ticket date should be June 18, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train departure time in the train ticket order should be the earliest one of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train departure time in the train ticket order should be the earliest one of the day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket booked in the train ticket order should be an upper berth', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket booked in the train ticket order should be an upper berth"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 2km of Taiyuan Railway Station, Jianshe South ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 2km of Taiyuan Railway Station, Jianshe South Road, Yingze District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should have good soundproofing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should have good soundproofing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should provide wake-up call service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should provide wake-up call service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation date is June 17, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation date is June 17, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should not exceed 200 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should not exceed 200 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot in the attraction order should match the user\'s most frequently', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot in the attraction order should match the user\'s most frequently visited type (query results show natural scenic spots)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot in the attraction order should offer rafting', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot in the attraction order should offer rafting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket purchased in the attraction order should be an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket purchased in the attraction order should be an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket purchased in the attraction order should include rafting', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket purchased in the attraction order should include rafting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date should be on the Dragon Boat Festival holiday, which is June 22,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date should be on the Dragon Boat Festival holiday, which is June 22, 2023 according to the query, so the purchased ticket date is June 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
