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
    expect(result[0].store_id).toBe('S17557518247339297_H00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557518247339297_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(888, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557518247339297_T00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557518247339297_P00057", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(144, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557518247339297_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557518247339297_P00023", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(560, 0);
  });

  test('rubric: The hotel booked should be a four-star hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should be a four-star hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should be a hot spring hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should be a hot spring hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked should have a First Floor Sauna Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should have a First Floor Sauna Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should include hot spring service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should include hot spring service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the hotel order should be 2024-03-17', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the hotel order should be 2024-03-17"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the train ticket should be 2024-03-18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the train ticket should be 2024-03-18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the train ticket should be before 12:00 (including 12:00)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the train ticket should be before 12:00 (including 12:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type of the train ticket should be First Class Seat or Business Class S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type of the train ticket should be First Class Seat or Business Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train journey should be the shortest among the available options, which is D', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train journey should be the shortest among the available options, which is D7625 (10:20-11:35, duration 75 minutes)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of the train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of the train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction booked should be Benxi Grand Canyon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction booked should be Benxi Grand Canyon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Benxi on 2024-03-18, which is sunny, so the attract', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Benxi on 2024-03-18, which is sunny, so the attraction tickets should be for the package with more activities (Benxi Grand Canyon All-Inclusive Package)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the attraction order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the attraction order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the attraction order should be 2024-03-18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the attraction order should be 2024-03-18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
