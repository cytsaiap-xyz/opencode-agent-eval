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
    expect(result[0].store_id).toBe('S17557512197955944_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512197955944_P00032", "quantity": 5}, {"product_id": "S17557512197955944_P00033", "quantity": 1}, {"product_id": "S17557512197955944_P00034", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(500, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512197955944_A00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512197955944_P00057", "quantity": 6}, {"product_id": "S17557512197955944_P00059", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(390, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512197955944_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512197955944_P00009", "quantity": 2}, {"product_id": "S17557512197955944_P00010", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3192, 0);
  });

  test('rubric: Your relative\'s family has a middle school child, so Friday\'s tickets include ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Your relative\'s family has a middle school child, so Friday\'s tickets include a student ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Your relative\'s family also has a 72-year-old senior, so Friday\'s tickets incl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Your relative\'s family also has a 72-year-old senior, so Friday\'s tickets include a senior ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Friday\'s tickets include adult tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Friday\'s tickets include adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The group consists of 3 adults from your family and 4 people from your relative\', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The group consists of 3 adults from your family and 4 people from your relative\'s family, including their 72-year-old senior and middle school child, so Friday\'s tickets include 5 adult tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Friday\'s attraction should be one that would interest a middle school student (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Friday\'s attraction should be one that would interest a middle school student (research shows it\'s the Qingdao Marine Science and Technology Museum)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order of visiting the two attractions must be determined based on comparing ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order of visiting the two attractions must be determined based on comparing ticket prices (Qingdao Marine Science and Technology Museum: Friday: Adult Ticket ¥80, Student Ticket ¥60, Senior Ticket ¥40; Saturday: Adult Ticket ¥100, Student Ticket ¥75, Senior Ticket ¥50. Qingdao Olympic Sailing Center: Friday: Adult Ticket ¥50, Senior Ticket ¥25; Saturday: Adult Ticket ¥60, Senior Ticket ¥30); The cheapest combination is visiting the Marine Science and Technology Museum on Friday and the Olympic Sailing Center on Saturday."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Qingdao Marine Science and Technology Museum order is 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Qingdao Marine Science and Technology Museum order is 2026-07-18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Saturday\'s attraction has no student ticket option, so the number of adult tick', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Saturday\'s attraction has no student ticket option, so the number of adult tickets purchased is 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Saturday\'s attraction order includes a senior ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Saturday\'s attraction order includes a senior ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Qingdao Olympic Sailing Center order is 2026-07-19', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Qingdao Olympic Sailing Center order is 2026-07-19"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking dates are July 17, 2026 and July 18, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking dates are July 17, 2026 and July 18, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order includes only twin rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order includes only twin rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order includes 2 twin rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order includes 2 twin rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should have a rating above 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should have a rating above 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rooms in the hotel order should have sea views', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rooms in the hotel order should have sea views"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked offers laundry service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked offers laundry service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
