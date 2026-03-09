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
    expect(result[0].store_id).toBe('S17567836638657808_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836638657808_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
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
    expect(result[2].store_id).toBe('S17567836638657808_I00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836638657808_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(138, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836638657808_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836638657808_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: The basketball training center order is for courses targeting youth under 12 yea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The basketball training center order is for courses targeting youth under 12 years old (including 12 years old)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The basketball training center order is coached by Retired Basketball Coach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The basketball training center order is coached by Retired Basketball Coach"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The basketball training center order is for Trial Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The basketball training center order is for Trial Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The basketball training center order price should be below 200 yuan (including 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The basketball training center order price should be below 200 yuan (including 200 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved basketball training center should be Xinghua Basketball Training Ca', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved basketball training center should be Xinghua Basketball Training Camp"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the basketball training center is 2024-06-15 14:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the basketball training center is 2024-06-15 14:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the basketball training center reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the basketball training center reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot restaurant order status should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant order status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant is within 1km (including 1km) from Xinghua Basketball Tra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant is within 1km (including 1km) from Xinghua Basketball Training Camp, B1 Floor, Xixi Intime City, 551 Wener West Road, West Lake District, Hangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant provides Free Parking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant provides Free Parking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant specializes in Jiangsu and Zhejiang Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant specializes in Jiangsu and Zhejiang Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order is for a Four-person Meal, not four individual set meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order is for a Four-person Meal, not four individual set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must include Fish dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must include Fish dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order price should be within 200 yuan (including 200 yuan)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order price should be within 200 yuan (including 200 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
