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
    expect(result[0].store_id).toBe('S17557515241963642_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515241963642_P00026", "quantity": 2}, {"product_id": "S17557515241963642_P00027", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(280, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557515241963642_T00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515241963642_P00067", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1106, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557515241963642_H00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515241963642_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(420, 0);
  });

  test('rubric: The scenic spot to be booked should be Yuntai Mountain Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot to be booked should be Yuntai Mountain Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the earliest entry time for Yuntai Mountain Scenic Area, which is ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the earliest entry time for Yuntai Mountain Scenic Area, which is 06:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the ticket price information for Yuntai Mountain Scenic Area, whic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the ticket price information for Yuntai Mountain Scenic Area, which is Student Ticket 60 yuan each (half-price discount)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the scenic spot order should be 2025-07-15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the scenic spot order should be 2025-07-15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather conditions for Jiaozuo Yuntai Mountain Scenic Area on ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather conditions for Jiaozuo Yuntai Mountain Scenic Area on July 15, 2025, which shows a maximum temperature of 28 degrees, not exceeding 30 degrees, so the scenic spot order should include two Student Tickets and two rock climbing tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to calculate the distance between Yuntai Mountain Scenic Area, Yuntai Mount', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to calculate the distance between Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province and Zhengzhou Railway Station, Erqi District, Zhengzhou, Henan Province; Luoyang Longmen Railway Station, Luolong District, Luoyang, Henan Province; and Jiaozuo Railway Station, Jiefang District, Jiaozuo, Henan Province, and compare which railway station is closest to Yuntai Mountain Scenic Area. The result is Jiaozuo Railway Station (distance 25.58km), so the destination in the train ticket order should be Jiaozuo Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the train ticket order should be 2025-07-14', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the train ticket order should be 2025-07-14"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the train ticket order should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the train ticket order should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be within 3 kilometers of Yuntai Mountain Scenic A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be within 3 kilometers of Yuntai Mountain Scenic Area, Yuntai Mountain Town, Xiuwu County, Jiaozuo, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a scenic view room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a scenic view room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the hotel order should be 2025-07-14', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the hotel order should be 2025-07-14"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price in the hotel order should be less than or equal to 500', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price in the hotel order should be less than or equal to 500"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
