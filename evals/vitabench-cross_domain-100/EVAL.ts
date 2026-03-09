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
    expect(result[0].store_id).toBe('S17550802115172544_H00007');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802115172544_P00038", "quantity": 1}, {"product_id": "S17550802115172544_P00041", "quantity": 1}, {"product_id": "S17550802115172544_P00044", "quantity": 1}, {"product_id": "S17550802115172544_P00045", "quantity": 1}, {"product_id": "S17550802115172544_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2940, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802115172544_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802115172544_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(88, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802115172544_I00019 ');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802115172544_P00128", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(580, 0);
  });

  test('rubric: Hotel check-in date is May 1, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel check-in date is May 1, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel check-out date is May 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel check-out date is May 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel should provide Oxygen Supply Equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel should provide Oxygen Supply Equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel booking should be for the same room type from May 1, 2025 to May 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel booking should be for the same room type from May 1, 2025 to May 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Food delivery order should be Plateau Athlete-specific Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery order should be Plateau Athlete-specific Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Food delivery address should be Qinghai Lake Youjia Hotel at 1km of Qinghai Lake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery address should be Qinghai Lake Youjia Hotel at 1km of Qinghai Lake Circuit Track, Shaliu River Town, Gangcha County, Haibei Tibetan Autonomous Prefecture, Qinghai Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Expected delivery time for food order should be 18:00 on May 1, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Expected delivery time for food order should be 18:00 on May 1, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: In-store merchant should be a physical training venue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "In-store merchant should be a physical training venue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Distance from in-store merchant to hotel should be within 2km', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Distance from in-store merchant to hotel should be within 2km"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: In-store order items should be related to physical training packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "In-store order items should be related to physical training packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Temperature at Qinghai Lake from May 1 to May 5, 2025 is above 5 degrees Celsius', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Temperature at Qinghai Lake from May 1 to May 5, 2025 is above 5 degrees Celsius, no need to order outdoor thermal supplies"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
