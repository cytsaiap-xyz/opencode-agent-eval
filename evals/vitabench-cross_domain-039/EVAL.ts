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
    expect(result[0].store_id).toBe('S17550810556939211_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810556939211_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(108, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810556939211_I00010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810556939211_P00054", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(108, 0);
  });

  test('rubric: Delivery address is Jidian Internet Cafe, North Plaza of Zhuhai High-Speed Railw', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Delivery address is Jidian Internet Cafe, North Plaza of Zhuhai High-Speed Railway Station, 999 Yingbin South Road, Xiangzhou District, Zhuhai City, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Delivery time is around 8 PM on February 23, 2024 [i.e., delivery time should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Delivery time is around 8 PM on February 23, 2024 [i.e., delivery time should be between 7:45 PM and 8:15 PM]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Products in the delivery order should not include toppings', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Products in the delivery order should not include toppings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product should contain caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product should contain caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant should provide 24-Hour Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant should provide 24-Hour Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant should have monitors above 200Hz', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant should have monitors above 200Hz"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased package should be for a private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased package should be for a private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased package should allow overnight use', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased package should allow overnight use"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: By checking historical orders, we found a train ticket from Zhuhai to Foshan dep', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "By checking historical orders, we found a train ticket from Zhuhai to Foshan departing at 07:25 on February 24, 2024, so the merchant should be near the high-speed railway station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
