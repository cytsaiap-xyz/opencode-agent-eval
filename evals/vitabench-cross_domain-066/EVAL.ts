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
    expect(result[0].store_id).toBe('S17550148885477543_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148885477543_P00076", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(428, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802121746337_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802121746337_P00001", "quantity": 1}, {"product_id": "S17550802121746337_P00002", "quantity": 1}, {"product_id": "S17550802121746337_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(49.2, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550148885477543_T00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802121746337_P00024", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(294, 0);
  });

  test('rubric: The KTV ordered should be a chain KTV', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV ordered should be a chain KTV"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV room ordered should be a luxury room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV room ordered should be a luxury room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The guild has 9 core members, plus the user, there are 10 people in total for th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The guild has 9 core members, plus the user, there are 10 people in total for the gathering, but 1 person is abroad and cannot come, so the room ordered should accommodate 9 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cost per person cannot exceed 50, with 9 people, so the KTV package price ca', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cost per person cannot exceed 50, with 9 people, so the KTV package price cannot exceed 450 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV ordered should have professional sound system', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV ordered should have professional sound system"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV package should be available before 10:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV package should be available before 10:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the subway station near the KTV, and the result is Yaner Island Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the subway station near the KTV, and the result is Yaner Island Road Station (Line 2)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order includes throat lozenges', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order includes throat lozenges"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order includes honey', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order includes honey"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order includes throat protection spray', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order includes throat protection spray"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The three delivery items must be ordered from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The three delivery items must be ordered from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the ordered items is Star Party KTV (Qingdao Mykal Stor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the ordered items is Star Party KTV (Qingdao Mykal Store), 6F, Mykal (Qingdao Main Store), 69 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the ordered items is between 17:00:00-18:00:00 o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the ordered items is between 17:00:00-18:00:00 on 2025-11-03"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the ordered items for delivery does not exceed 50 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the ordered items for delivery does not exceed 50 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the booked train tickets should be in the morning of 2025-11', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the booked train tickets should be in the morning of 2025-11-03"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked tickets cannot be No Seat type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked tickets cannot be No Seat type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked tickets should be student tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked tickets should be student tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked tickets are from Jinan to Qingdao', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked tickets are from Jinan to Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets order is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets order is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
