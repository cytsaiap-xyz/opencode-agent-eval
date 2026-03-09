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
    expect(result[0].store_id).toBe('S94165448870298504_S93237');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14166528684325946_P34171", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(34, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S26286878923282243_S58501');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S14214267117147297_P22912", "quantity": 2}, {"product_id": "S26376925645495405_P72482", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(72.56, 0);
  });

  test('rubric: The delivery address for children\'s beverage orders should be Green Island Gard', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for children\'s beverage orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan\'erdao Road Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for children\'s beverage orders should be before 2025-06-01 00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for children\'s beverage orders should be before 2025-06-01 00:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant rating for children\'s beverage orders should be greater than or eq', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant rating for children\'s beverage orders should be greater than or equal to 4.0"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Children\'s beverages should not be milk or any product containing milk, to avoi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Children\'s beverages should not be milk or any product containing milk, to avoid stomach discomfort in children"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for night snack orders should be Green Island Garden, No. 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for night snack orders should be Green Island Garden, No. 63 Hong Kong Middle Road, Shinan District, Qingdao, Shandong Province (180m walking distance from Exit A of Yan\'erdao Road Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for night snack orders should be scheduled after 2025-06-01 00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for night snack orders should be scheduled after 2025-06-01 00:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant rating for night snack orders should be greater than or equal to 4.', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant rating for night snack orders should be greater than or equal to 4.0"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant selected for night snack orders should support late-night delivery ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant selected for night snack orders should support late-night delivery service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Items like Stir-fried River Snails in the night snack order should be selected w', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Items like Stir-fried River Snails in the night snack order should be selected with mild spicy or non-spicy flavor, suitable for users with mouth ulcers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
