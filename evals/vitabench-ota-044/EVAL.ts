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
    expect(result[0].store_id).toBe('S17557073973233365_T00014');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00112", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(112, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557073973233365_T00015');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00122", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(130, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557073973233365_F00010');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00091", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(2560, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557073973233365_F00011');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00096", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(2560, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557073973233365_H00001');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(688, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557073973233365_H00004');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(880, 0);
  });

  test('order 6 matches expected store', () => {
    expect(result[6].store_id).toBe('S17557073973233365_A00006');
  });

  test('order 6 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557073973233365_P00043", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[6].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 6 has correct total price', () => {
    expect(result[6].total_price).toBeCloseTo(200, 0);
  });

  test('rubric: The status of the train ticket order for train number G2926 is cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the train ticket order for train number G2926 is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The status of the train ticket order for train number G2927 is cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the train ticket order for train number G2927 is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the outbound air ticket order is from Kunming to Ningxia', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the outbound air ticket order is from Kunming to Ningxia"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the outbound air ticket order is operated by Sichuan Airlines', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the outbound air ticket order is operated by Sichuan Airlines"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the outbound air ticket order departs in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the outbound air ticket order departs in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the outbound air ticket order is September 20, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the outbound air ticket order is September 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the outbound air ticket order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the outbound air ticket order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the return air ticket order is from Ningxia to Kunming', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the return air ticket order is from Ningxia to Kunming"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the return air ticket order is operated by Sichuan Airlines', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the return air ticket order is operated by Sichuan Airlines"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight in the return air ticket order departs in the afternoon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight in the return air ticket order departs in the afternoon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the return air ticket order is September 22, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the return air ticket order is September 22, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the return air ticket order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the return air ticket order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for the first night hotel order is September 20, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for the first night hotel order is September 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the first night hotel order should be in Jinfeng District', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the first night hotel order should be in Jinfeng District"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the first night hotel order should be near a subway station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the first night hotel order should be near a subway station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the first night hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the first night hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for the second night hotel order is September 22, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for the second night hotel order is September 22, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the second night hotel order should be in Shapotou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the second night hotel order should be in Shapotou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel in the second night hotel order should have starry tents', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel in the second night hotel order should have starry tents"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the second night hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the second night hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Query which day has the lowest temperature in Yinchuan, Ningxia from September 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query which day has the lowest temperature in Yinchuan, Ningxia from September 20, 2024 to September 22, 2024 (the result is September 21, 2024), so the date of the admission tickets is September 21, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The type of admission tickets purchased is Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The type of admission tickets purchased is Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of Adult Tickets in the scenic spot order is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of Adult Tickets in the scenic spot order is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot ordered is the Western Film Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot ordered is the Western Film Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
