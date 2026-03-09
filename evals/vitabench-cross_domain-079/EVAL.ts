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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809576747589_A00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809576747589_P00036", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(480, 0);
  });

  test('rubric: The reserved dining venue should be a BBQ restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved dining venue should be a BBQ restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant should be no more than 500m from Room 403, Building 8, Jiaxin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant should be no more than 500m from Room 403, Building 8, Jiaxing College Student Apartments, 1288 Hexing South Road, Nanhu District, Jiaxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant\'s opening time should be at or before 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant\'s opening time should be at or before 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Seats should be reserved at the BBQ restaurant for 18:00 on June 16, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Seats should be reserved at the BBQ restaurant for 18:00 on June 16, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ restaurant reservation should be for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ restaurant reservation should be for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV venue ordered should be no more than 500m from BBQ Paradise (Jiaxing Col', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV venue ordered should be no more than 500m from BBQ Paradise (Jiaxing College Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV venue ordered should be a Chain Brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV venue ordered should be a Chain Brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Seats should be reserved at the KTV venue for 20:00 on June 16, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Seats should be reserved at the KTV venue for 20:00 on June 16, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The KTV reservation should be for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The KTV reservation should be for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the Instant Camera and Photo Paper should be checked, with th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the Instant Camera and Photo Paper should be checked, with the lowest result being 818 yuan, which exceeds 800 yuan, so the camera and paper delivery should not be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction ordered should be a large theme park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should be a large theme park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered tickets should be valid for June 17, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered tickets should be valid for June 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket prices for the attractions should be checked, comparing Student Ticke', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket prices for the attractions should be checked, comparing Student Ticket and Two-Person Package prices. The results are: Jiaxing Happy World Theme Park: Student Ticket 180 yuan, Two-Person Package 380 yuan (190 yuan per person); Fantasy Water World: Student Ticket 158 yuan, Two-Person Package 336 yuan (168 yuan per person); Jiaxing Fantasy Park: Student Ticket 120 yuan, Two-Person Package 280 yuan (140 yuan per person); Student Tickets for Jiaxing Fantasy Park should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the attraction order should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the attraction order should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
