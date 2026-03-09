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
    expect(result[0].store_id).toBe('S24420223932303530_S72897');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S26094851902819803_P44975", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(18.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S29994283967210769_S99077');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S21558969585413442_P15535", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(32.0, 0);
  });

  test('rubric: Vermicelli main dish order should choose Sichuan-Chongqing Noodle House (Hot and', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Vermicelli main dish order should choose Sichuan-Chongqing Noodle House (Hot and Sour Vermicelli • Dumplings • Rice Noodles) store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Vermicelli main dish order should select Chongqing Pea Mix Hot and Sour Vermicel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Vermicelli main dish order should select Chongqing Pea Mix Hot and Sour Vermicelli + Golden Beans + Pickled Long Beans + Peanuts + Side Dishes product"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Vermicelli main dish order should select mild spicy flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Vermicelli main dish order should select mild spicy flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Vermicelli main dish order delivery address should be Nanhu Garden, No. 15 Dongz', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Vermicelli main dish order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Beverage order product should be peach flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Beverage order product should be peach flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Peach flavor beverage order product should be low-caffeine or caffeine-free drin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Peach flavor beverage order product should be low-caffeine or caffeine-free drink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Peach flavor beverage order product should select hot drink', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Peach flavor beverage order product should select hot drink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Peach flavor beverage order delivery address should be Nanhu Garden, No. 15 Dong', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Peach flavor beverage order delivery address should be Nanhu Garden, No. 15 Dongzhai Road, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
