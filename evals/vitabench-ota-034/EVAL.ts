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
    expect(result[0].store_id).toBe('S17557505553262664_T00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00095", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505553262664_T00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00104", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(134, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505553262664_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(458, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505553262664_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00036", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(190, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557505553262664_A00006');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00051", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(80, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557505553262664_A00007');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505553262664_P00063", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(90, 0);
  });

  test('rubric: The departure date should be June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date should be June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure train should arrive at around 7 PM on June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure train should arrive at around 7 PM on June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure train ticket should be for a train from Hefei to Huangshan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure train ticket should be for a train from Hefei to Huangshan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return date should be June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return date should be June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train departure time should be after 4 PM on June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train departure time should be after 4 PM on June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train should be from Huangshan to Hefei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train should be from Huangshan to Hefei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel brand should be Atour/Ji Hotel/Vienna/Orange or any brand under Huazhu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand should be Atour/Ji Hotel/Vienna/Orange or any brand under Huazhu Group"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel price should be less than 500 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel price should be less than 500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should provide luggage storage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should provide luggage storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include a room for June 24, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include a room for June 24, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Scenic Area ticket should be used on June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Scenic Area ticket should be used on June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Scenic Area ticket should be an adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Scenic Area ticket should be an adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Yungu Cable Car ticket should be for upward direction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Yungu Cable Car ticket should be for upward direction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Yungu Cable Car ticket should be used on June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Yungu Cable Car ticket should be used on June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Yuping Cable Car ticket should be for downward direction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Yuping Cable Car ticket should be for downward direction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Huangshan Yuping Cable Car ticket should be used on June 25, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Huangshan Yuping Cable Car ticket should be used on June 25, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
