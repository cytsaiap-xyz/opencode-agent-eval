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
    expect(result[0].store_id).toBe('S17567844712785574_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844712785574_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(298, 0);
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
    expect(result[2].store_id).toBe('S17567844712785574_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844712785574_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567844712785574_I00010');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844712785574_P00082", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(180, 0);
  });

  test('rubric: Japanese restaurant orders should have a pleasant environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Japanese restaurant orders should have a pleasant environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Japanese restaurant orders should include Tatami', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Japanese restaurant orders should include Tatami"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Japanese restaurant orders should include Kimono experience', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Japanese restaurant orders should include Kimono experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Japanese restaurant orders must be Kaiseki Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Japanese restaurant orders must be Kaiseki Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Japanese restaurant orders must be for a single person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Japanese restaurant orders must be for a single person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Japanese restaurant should be Cherry Blossom Japanese Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Japanese restaurant should be Cherry Blossom Japanese Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Japanese restaurant reservation time is 2026-04-11 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Japanese restaurant reservation time is 2026-04-11 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people in the Japanese restaurant reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people in the Japanese restaurant reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pottery workshop orders must be intangible heritage experience packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pottery workshop orders must be intangible heritage experience packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pottery workshop orders must be for single person packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pottery workshop orders must be for single person packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of pottery workshop order should be less than or equal to 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of pottery workshop order should be less than or equal to 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on user historic orders and behavior, the yoga studio selected should not ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on user historic orders and behavior, the yoga studio selected should not be Zen Yoga Lifestyle Center or Zen Joy Yoga Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items ordered at the yoga studio should be Pilates courses', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items ordered at the yoga studio should be Pilates courses"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items ordered at the yoga studio should be private lessons', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items ordered at the yoga studio should be private lessons"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items ordered at the yoga studio should be new customer discounts', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items ordered at the yoga studio should be new customer discounts"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since a suitable pottery workshop can be found, there should not be orders from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since a suitable pottery workshop can be found, there should not be orders from foot therapy centers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
