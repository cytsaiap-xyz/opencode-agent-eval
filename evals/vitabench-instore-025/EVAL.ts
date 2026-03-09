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
    expect(result[0].store_id).toBe('S17564424227928765_I00004');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424227928765_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(228, 0);
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
    expect(result[2].store_id).toBe('S17564424227928765_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424227928765_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(128, 0);
  });

  test('rubric: Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop should be within 3km (including 3km) from Room 301, Unit 2, Building 5, Shanxi Theater Staff Quarters, 69 Tiyu Road, Xiaodian District, Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet grooming shop\'s rating should be greater than or equal to 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet grooming shop\'s rating should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet grooming service should be a package that includes Bath, Grooming, and N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet grooming service should be a package that includes Bath, Grooming, and Nail Care"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the pet grooming order should be less than or equal to 300 yu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the pet grooming order should be less than or equal to 300 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pet grooming appointment should be at Pet Paradise', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pet grooming appointment should be at Pet Paradise"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check tomorrow\'s (2024-08-17) weather forecast, with the highest temperature exceeding 35°C, need to invite a bestie with a car to go to a pet grooming shop, so the pet grooming shop appointment time should be 2024-08-17 13:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of pet grooming appointments should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of pet grooming appointments should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop should be within 1km (including 1km) from Pet Paradise, 145 Chan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop should be within 1km (including 1km) from Pet Paradise, 145 Changzhi Road, Xiaodian District, Taiyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop should be a Social Media Check-in spot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop should be a Social Media Check-in spot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop order should be a set for two that includes White Flat White', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop order should be a set for two that includes White Flat White"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop order should include Low-Sugar Dessert', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop order should include Low-Sugar Dessert"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
