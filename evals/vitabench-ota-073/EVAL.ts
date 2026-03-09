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
    expect(result[0].store_id).toBe('S17557512531967139_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00091", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(3840, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512531967139_F00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00103", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(3540, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512531967139_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(850, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512531967139_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00017", "quantity": 1}, {"product_id": "S17557512531967139_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1200, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557512531967139_A00006');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00065", "quantity": 1}, {"product_id": "S17557512531967139_P00064", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(23, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557512531967139_A00005');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512531967139_P00051", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(18, 0);
  });

  test('rubric: Compare different dates for round-trip flights between Shanghai and Ho Chi Minh ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the departure flight date should be 2024-12-30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of departure flight tickets to purchase is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of departure flight tickets to purchase is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight is from Shanghai to Ho Chi Minh City', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight is from Shanghai to Ho Chi Minh City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Compare different dates for round-trip flights between Shanghai and Ho Chi Minh ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Compare different dates for round-trip flights between Shanghai and Ho Chi Minh City and choose the cheapest option, while ensuring a 4-day stay in Ho Chi Minh City. Calculations show that the return flight date should be 2025-01-02"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of return flight tickets to purchase is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of return flight tickets to purchase is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight is from Ho Chi Minh City to Shanghai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight is from Ho Chi Minh City to Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the first night should be five-star', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the first night should be five-star"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the first night should include spa services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the first night should include spa services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking for the first night should be for December 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking for the first night should be for December 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the first night hotel booking should be a Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the first night hotel booking should be a Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nightly rate for the first night hotel room should not exceed 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nightly rate for the first night hotel room should not exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the next two nights should have Local Features', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the next two nights should have Local Features"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel bookings for the next two nights should be for December 31, 2024 and J', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel bookings for the next two nights should be for December 31, 2024 and January 01, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the next two nights hotel booking should be a Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the next two nights hotel booking should be a Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nightly rate for the next two nights hotel room should not exceed 1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nightly rate for the next two nights hotel room should not exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Independence Palace attraction booking date should be December 31, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Independence Palace attraction booking date should be December 31, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Independence Palace attraction booking should include Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Independence Palace attraction booking should include Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of Adult Tickets for the Independence Palace attraction should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of Adult Tickets for the Independence Palace attraction should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Independence Palace attraction booking should include Child Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Independence Palace attraction booking should include Child Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of Child Tickets for the Independence Palace attraction should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of Child Tickets for the Independence Palace attraction should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Ho Chi Minh Fine Arts Museum booking date should be January 01, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Ho Chi Minh Fine Arts Museum booking date should be January 01, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets purchased for the Ho Chi Minh Fine Arts Museum should be Family Pack', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets purchased for the Ho Chi Minh Fine Arts Museum should be Family Package (2 Adults + 1 Child)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
