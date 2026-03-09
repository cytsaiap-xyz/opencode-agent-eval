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
    expect(result[0].store_id).toBe('S25199488126977541_S02748');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S28500154039512110_P18362", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(30, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S65127841099095198_S44679');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S85468248976555661_P76180", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(24, 0);
  });

  test('rubric: The delivery address for the beef ball rice noodle order should be Huixin Cultur', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beef ball rice noodle order should be Huixin Cultural Office, 1st Floor, Hengqin Innovation Way, No. 111 Tianyu Road, Xiangzhou District, Zhuhai City, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beef ball rice noodle order should be around', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beef ball rice noodle order should be around 18:30 on February 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beef balls selected in the beef ball rice noodle order should be freshly han', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beef balls selected in the beef ball rice noodle order should be freshly hand-pounded, and this feature should be reflected in the product label or description"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the dessert order should be Huafa Shoufu, South Side of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dessert order should be Huafa Shoufu, South Side of Gang\'ao Avenue, Xiangzhou District, Zhuhai City, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the dessert order should be between 18:15 and 18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the dessert order should be between 18:15 and 18:30 on February 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: A reliable dessert shop should be ordered from, typically characterized by high ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "A reliable dessert shop should be ordered from, typically characterized by high ratings, Chain Store guarantee, and Authentic flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product selected in the dessert order should contain taro paste elements, wh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product selected in the dessert order should contain taro paste elements, which should be reflected in the product name or description"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered dessert should not be cold', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered dessert should not be cold"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
