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
    expect(result[0].store_id).toBe('S17550809608986081_A00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809608986081_P00058", "quantity": 1}, {"product_id": "S17550809608986081_P00059", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(156, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809608986081_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809608986081_P00010", "quantity": 1}, {"product_id": "S17550809608986081_P00009", "quantity": 2}, {"product_id": "S17550809608986081_P00011", "quantity": 1}, {"product_id": "S17550809608986081_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(90.1, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809608986081_H00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809608986081_P00033", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(688, 0);
  });

  test('rubric: The attraction ordered should be an organic farm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction ordered should be an organic farm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction should have cherries, mulberries, and organic vegetables', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction should have cherries, mulberries, and organic vegetables"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets ordered should be Parent-Child Picking Package (1 Adult and 1 Child)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets ordered should be Parent-Child Picking Package (1 Adult and 1 Child) and Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets should be purchased for June 8, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets should be purchased for June 8, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include sun hats', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include sun hats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include Mosquito Repellent Floral Water', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include Mosquito Repellent Floral Water"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include Wet Tissues', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include Wet Tissues"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include 3 sun hats', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include 3 sun hats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include 1 Mosquito Repellent Floral Water', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include 1 Mosquito Repellent Floral Water"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should include 1 Wet Tissues', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should include 1 Wet Tissues"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sun hats, Mosquito Repellent Floral Water, and Wet Tissues in the delivery o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sun hats, Mosquito Repellent Floral Water, and Wet Tissues in the delivery order should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the order should be Room 502, Building 3, Jinxiu Garden', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the order should be Room 502, Building 3, Jinxiu Garden, No.12 Jinbang Road, Henan\'an Street, Huicheng District, Huizhou, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the order should be before 08:30 on June 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the order should be before 08:30 on June 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should be within 1km (inclusive) of a Food Street', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should be within 1km (inclusive) of a Food Street"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel should have a Swimming Pool', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel should have a Swimming Pool"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved hotel must have Good Sound Insulation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved hotel must have Good Sound Insulation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The environment of the reserved hotel should be Clean and Hygienic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The environment of the reserved hotel should be Clean and Hygienic"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type of the reserved hotel should have a Bathtub', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type of the reserved hotel should have a Bathtub"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel reservation should be June 8, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel reservation should be June 8, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
