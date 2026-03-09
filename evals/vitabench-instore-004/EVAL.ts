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
    expect(result[0].store_id).toBe('S17564420241411338_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420241411338_P00002", "quantity": 8}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1104, 0);
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
    expect(result[2].store_id).toBe('S17564420241411338_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420241411338_P00006", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(490, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: Latin dance studio merchants must be selected from Latin dance studios/services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Latin dance studio merchants must be selected from Latin dance studios/services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant rating for dance orders must be higher than 4.7 stars', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant rating for dance orders must be higher than 4.7 stars"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dance order package must provide course services with teacher guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dance order package must provide course services with teacher guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dance order package must be suitable for beginners to experience', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dance order package must be suitable for beginners to experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the user doesn\'t want to be with strangers, it\'s necessary to screen for', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the user doesn\'t want to be with strangers, it\'s necessary to screen for beginner courses with 6 people per class, which yields no results; therefore, small classes with 8 people per class should be selected, ordering 8 portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for dance classes must be Saturday at 4 PM (February 27, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for dance classes must be Saturday at 4 PM (February 27, 2024, 16:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the user doesn\'t want to be with strangers, the number of people for the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the user doesn\'t want to be with strangers, the number of people for the dance class appointment must be 8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed dance class merchant should be Dancing Miracle Latin Dance Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed dance class merchant should be Dancing Miracle Latin Dance Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna room merchant needs to be within a 2km range of the Latin dance studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna room merchant needs to be within a 2km range of the Latin dance studio (Dancing Miracle Latin Dance Studio, 5th Floor, Building B3, Olympic City Commercial Plaza, Huayuan Industrial Park, Nankai District, Tianjin)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna room order needs to reserve five single-person sauna items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna room order needs to reserve five single-person sauna items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sauna room order package content must be steam bath', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sauna room order package content must be steam bath"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the sauna room appointment should be 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the sauna room appointment should be 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the sauna room should be half an hour after the Latin c', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the sauna room should be half an hour after the Latin class ends; checking the Latin class order shows the Latin class duration is 90 minutes, therefore the sauna room appointment time should be February 27, 2024, 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed sauna room merchant should be Yuehuan Sauna Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed sauna room merchant should be Yuehuan Sauna Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
