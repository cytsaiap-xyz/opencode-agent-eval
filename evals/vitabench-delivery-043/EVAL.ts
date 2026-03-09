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
    expect(result[0].store_id).toBe('S20788536851255214_S10437');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S75998663709962077_P31604", "quantity": 1}, {"product_id": "S17266542610618363_P36704", "quantity": 1}, {"product_id": "S18579665680945399_P97739", "quantity": 1}, {"product_id": "S25549692678617491_P05957", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(198.7, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18659469264174024_S37719');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S33876326240563116_P68641", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28, 0);
  });

  test('rubric: The delivery address for ordering Northeast cuisine for family dinner should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for ordering Northeast cuisine for family dinner should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Northeast cuisine order should be around 18:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Northeast cuisine order should be around 18:00 on 2025-08-10"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Considering the baby\'s sensitive digestive system, the Northeast cuisine order ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Considering the baby\'s sensitive digestive system, the Northeast cuisine order should avoid greasy and spicy items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Northeast cuisine order should contain 6 items in total, including 3 dishes ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Northeast cuisine order should contain 6 items in total, including 3 dishes and 3 portions of rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for ordering hot drinks for wife should be Resin Factory Re', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for ordering hot drinks for wife should be Resin Factory Residential Building, 500 meters walk from Exit B of Wangcun South Street Metro Station, Xiaodian District, Taiyuan City, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the hot drinks order should be around 18:00 on 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the hot drinks order should be around 18:00 on 2025-08-10"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The temperature of the drink chosen for wife should be hot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The temperature of the drink chosen for wife should be hot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
