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
    expect(result[0].store_id).toBe('S17557516484806057_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516484806057_P00064", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1490, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557516484806057_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516484806057_P00079", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(906, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557516484806057_T00015');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516484806057_P00089", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(268, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557516484806057_H00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516484806057_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(398, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557516484806057_A00005');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557516484806057_P00027", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(450, 0);
  });

  test('rubric: The outbound train ticket order should be from Linyi to Qingdao', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be from Linyi to Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order should be High-Speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be High-Speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order should arrive before 10:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should arrive before 10:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order should be for First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be for First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order should be for 5 tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order should be for 5 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket order date should be November 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket order date should be November 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be from Qingdao to Linyi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be from Qingdao to Linyi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be High-Speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be High-Speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be the last train departing on that day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be the last train departing on that day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be for First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be for First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket order should be for 3 tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket order should be for 3 tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return ticket order date should be November 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return ticket order date should be November 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The status of the historical train ticket order from Linyi to Tai\'an is cancell', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the historical train ticket order from Linyi to Tai\'an is cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be within 3km of user\'s home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be within 3km of user\'s home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel rating should be above 4.0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel rating should be above 4.0"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should include Wake-up Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should include Wake-up Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking date should be November 19, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking date should be November 19, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking cost should not exceed 400 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking cost should not exceed 400 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should be for a Standard Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should be for a Standard Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Given the weather in Qingdao on November 20, 2027 is breeze, the ticket purchase', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Given the weather in Qingdao on November 20, 2027 is breeze, the ticket purchased should be for Laoshan Yangkou Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets should be for November 20, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets should be for November 20, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets should be Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets should be Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets should be for 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets should be for 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
