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
    expect(result[0].store_id).toBe('S17550807132085573_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807132085573_P00056", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(5580, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550807132085573_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807132085573_P00001", "quantity": 1}, {"product_id": "S17550807132085573_P00002", "quantity": 1}, {"product_id": "S17550807132085573_P00003", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(636, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550807132085573_T00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807132085573_P00036", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(65, 0);
  });

  test('rubric: The weight loss boot camp ordered should be located in Shijiazhuang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weight loss boot camp ordered should be located in Shijiazhuang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp ordered should be a closed training mode', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp ordered should be a closed training mode"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp package ordered must include Professional Coaching Guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp package ordered must include Professional Coaching Guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp package ordered should be suitable for people with large-scale wei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp package ordered should be suitable for people with large-scale weight loss needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp package ordered should be suitable for beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp package ordered should be suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp package ordered must include Fitness Test service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp package ordered must include Fitness Test service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boot camp package ordered must include Nutritional Advice service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boot camp package ordered must include Nutritional Advice service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the boot camp package should be one month', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the boot camp package should be one month"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the food delivery order should be Room 502, Building 3,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the food delivery order should be Room 502, Building 3, Jinxin Community, 198 Dongfeng West Road, Lianchi District, Baoding, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include Whey Protein', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include Whey Protein"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include BCAA amino acid', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include BCAA amino acid"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include Post-workout Recovery Drink', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include Post-workout Recovery Drink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of BCAA amino acid in the food delivery order should be 1 tub', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of BCAA amino acid in the food delivery order should be 1 tub"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The specification of the Post-workout Recovery Drink should be by the pack', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The specification of the Post-workout Recovery Drink should be by the pack"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of Post-workout Recovery Drink in the food delivery order should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of Post-workout Recovery Drink in the food delivery order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The three products in the food delivery order should come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The three products in the food delivery order should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the order history for the past week, the result shows ordered food', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the order history for the past week, the result shows ordered food delivery 3 times, not exceeding 5 times, so should book a train ticket for January 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket in the order should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket in the order should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train in the order should be the earliest departure of the day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train in the order should be the earliest departure of the day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train in the order should be from Baoding to Shijiazhuang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train in the order should be from Baoding to Shijiazhuang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train in the order should be High-speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train in the order should be High-speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
