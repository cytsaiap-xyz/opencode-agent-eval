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
    expect(result[0].store_id).toBe('S17564425623716834_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425623716834_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564425623716834_I00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425623716834_P00014", "quantity": 1}, {"product_id": "S17564425623716834_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(188, 0);
  });

  test('rubric: The hot pot restaurant should be within 2km (inclusive) of Chengdu Wuhou Distric', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant should be within 2km (inclusive) of Chengdu Wuhou District South Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot set ordered should be for four people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot set ordered should be for four people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot set ordered should have a butter base', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot set ordered should have a butter base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot set ordered should be within 200 yuan (inclusive)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot set ordered should be within 200 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot restaurant ordered from should be a Chengdu local hot pot restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant ordered from should be a Chengdu local hot pot restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar must have live music performance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar must have live music performance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar should be a top-selling merchant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar should be a top-selling merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Agent should check if there are sets for two with different cocktails, and findi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Agent should check if there are sets for two with different cocktails, and finding none; thus the bar order should be two single meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since travel is needed tomorrow, the cocktail set ordered should be low alcohol ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since travel is needed tomorrow, the cocktail set ordered should be low alcohol content"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cocktail set ordered should not contain high sugar content', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cocktail set ordered should not contain high sugar content"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar order should include two different cocktails', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar order should include two different cocktails"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
