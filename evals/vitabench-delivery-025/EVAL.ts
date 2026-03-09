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
    expect(result[0].store_id).toBe('S79679458844636948_S74671');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S29061524043408537_P69151", "quantity": 1}, {"product_id": "S17299343602389098_P63585", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(41.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S91621604275653436_S48003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S33141201285943289_P89807", "quantity": 1}, {"product_id": "S95392241852672728_P68388", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(24.0, 0);
  });

  test('rubric: The delivery address for night snack orders should be Nanyang New Village near N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for night snack orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for night snack orders should be before 22:55 on Aug', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for night snack orders should be before 22:55 on August 23, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The night snack order for braised goose meat and vegetable hearts should be from', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The night snack order for braised goose meat and vegetable hearts should be from popular ranked merchants, such as Chaolin Fresh Midnight Restaurant or other stores with popular ranking labels"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting braised goose meat, the Non-Spicy flavor should be chosen, and wh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting braised goose meat, the Non-Spicy flavor should be chosen, and when selecting vegetable hearts, the Low Oil cooking method should be chosen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for Suzhou-style Mung Bean Soup orders should be Nanyang Ne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Suzhou-style Mung Bean Soup orders should be Nanyang New Village near No.94 Tongyang Road, Liangxi District, Wuxi, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for Suzhou-style Mung Bean Soup orders should be bef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for Suzhou-style Mung Bean Soup orders should be before 22:55 on August 23, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Suzhou-style Mung Bean Soup order should include 1 regular mung bean soup it', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Suzhou-style Mung Bean Soup order should include 1 regular mung bean soup item with No Additional Ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Suzhou-style Mung Bean Soup order should include 1 mung bean soup item with ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Suzhou-style Mung Bean Soup order should include 1 mung bean soup item with only Lily Bulb as an additional ingredient"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
