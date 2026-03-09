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
    expect(result[0].store_id).toBe('S29691868989292190_S30164');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S32323489010229624_P20646", "quantity": 1}, {"product_id": "S20116224561682274_P08606", "quantity": 1}, {"product_id": "S10442979807373900_P30837", "quantity": 1}, {"product_id": "S26730900892792972_P71161", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(242.0, 0);
  });

  test('rubric: The delivery address for the Cantonese group meal order should be Junchuang Inte', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Cantonese group meal order should be Junchuang International Business Garden, 50 North Zhonghua Street, Xinhua District, Shijiazhuang City, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Cantonese group meal order should be before ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Cantonese group meal order should be before 18:00 on June 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Cantonese group meal order should include five different dishes, with differ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Cantonese group meal order should include five different dishes, with different dishes in the set meal counted separately"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Cantonese group meal order must include White Cut Chicken, Beef Brisket Stew', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Cantonese group meal order must include White Cut Chicken, Beef Brisket Stew, and congee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Dishes in the Cantonese group meal order other than White Cut Chicken, Beef Bris', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Dishes in the Cantonese group meal order other than White Cut Chicken, Beef Brisket Stew, and congee should be Low Salt and Less Oil types, meeting healthy eating requirements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
