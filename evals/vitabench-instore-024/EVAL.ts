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
    expect(result[0].store_id).toBe('S17564420254944798_I00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420254944798_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(3280, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420254944798_I00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420254944798_P00013", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(888, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
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

  test('rubric: The permanent makeup shop I order from must have technicians with excellent skil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The permanent makeup shop I order from must have technicians with excellent skills"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The permanent makeup shop must have a rating greater than or equal to 4.2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The permanent makeup shop must have a rating greater than or equal to 4.2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package from the permanent makeup shop must be semi-permanent eyebrow microb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package from the permanent makeup shop must be semi-permanent eyebrow microblading"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to search for the most expensive semi-permanent eyebrow microblading packag', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to search for the most expensive semi-permanent eyebrow microblading package, which is Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center for 3280 yuan, therefore the order must be for Korean Semi-Permanent Eyebrow Microblading (Chief Technician Jin Zhishou) from Celebrity Permanent Makeup & SPA Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check user behavior history to find previously visited Italian restaurants,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check user behavior history to find previously visited Italian restaurants, which shows La Vita Italian Traditional Cuisine; the in-store dining establishment must be La Vita Italian Traditional Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if La Vita Italian Traditional Cuisine offers a Qixi Festival Set ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if La Vita Italian Traditional Cuisine offers a Qixi Festival Set Menu, results show they do; the in-store dining order must be for the Qixi Festival Set Menu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation order needs to book for 6:00 PM on Saturday, August 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation order needs to book for 6:00 PM on Saturday, August 9, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation must be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation must be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation should be made at La Vita Italian Traditional Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation should be made at La Vita Italian Traditional Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The eyebrow microblading appointment time must be at 3:00 PM on Sunday, August 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The eyebrow microblading appointment time must be at 3:00 PM on Sunday, August 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The permanent makeup shop for the appointment should be Celebrity Permanent Make', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The permanent makeup shop for the appointment should be Celebrity Permanent Makeup & SPA Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
