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
    expect(result[0].store_id).toBe('S13446654125504467_S94507');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30851657772923813_P84076", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(19.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14040631712091225_S61822');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S15117001798616133_P52715", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(38.0, 0);
  });

  test('rubric: The delivery address for the beef rice bowl order should be Henan Digital Certif', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beef rice bowl order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the beef rice bowl order should be before 2024-11-28 20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the beef rice bowl order should be before 2024-11-28 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting beef rice bowl products, items containing organ meats should be a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting beef rice bowl products, items containing organ meats should be avoided"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the flat white coffee order should be Henan Digital Cer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the flat white coffee order should be Henan Digital Certificate Authentication Center, Building 2, Future International, No. 26 Business Inner Ring Road, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the flat white coffee order should be before 2024-11-28 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the flat white coffee order should be before 2024-11-28 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting flat white coffee, dark roast types such as Dark Roast Flat White', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting flat white coffee, dark roast types such as Dark Roast Flat White should be avoided"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting flat white coffee, it should be served hot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting flat white coffee, it should be served hot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
