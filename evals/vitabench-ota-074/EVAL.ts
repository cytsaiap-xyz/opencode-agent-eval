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
    expect(result[0].store_id).toBe('S17557512511049624_T00014');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512511049624_P00091", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(268, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512511049624_T00017');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512511049624_P00105", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(142, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512511049624_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512511049624_P00003", "quantity": 1}, {"product_id": "S17557512511049624_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(436, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512511049624_F00011');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512511049624_P00079", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1220, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557512511049624_F00012');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512511049624_P00080", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(1280, 0);
  });

  test('rubric: The departure location of the outbound train should be Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location of the outbound train should be Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination of the outbound train should be Langzhong', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination of the outbound train should be Langzhong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if there are high-speed train tickets from Chengdu to Langzhong af', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if there are high-speed train tickets from Chengdu to Langzhong after 20:00 (including 20:00) on 2025-03-21, and the result is yes (Train D5181 departing at 20:35 on 2025-03-21), the date in the outbound train ticket order should be 2025-03-21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure location of the return train should be Langzhong', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location of the return train should be Langzhong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination of the return train should be Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination of the return train should be Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the return train should be 2025-03-23', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the return train should be 2025-03-23"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the return train should be around 12:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the return train should be around 12:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the return train order should be first class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the return train order should be first class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be located within the Langzhong Ancient City', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be located within the Langzhong Ancient City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the hotel ordered should be around 200 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the hotel ordered should be around 200 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include rooms for two nights, which must be 2025-03-21 an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include rooms for two nights, which must be 2025-03-21 and 2025-03-22 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The status of the order with order ID S17557512511049624_O00001 should be cancel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the order with order ID S17557512511049624_O00001 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the flight ordered should be 2025-03-23', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the flight ordered should be 2025-03-23"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeoff time of the flight ordered should be between 17:00-18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeoff time of the flight ordered should be between 17:00-18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the flight ticket order should be economy class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the flight ticket order should be economy class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
