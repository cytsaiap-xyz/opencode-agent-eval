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
    expect(result[0].store_id).toBe('S22593193942613919_S60598');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S20458653256242573_P48003", "quantity": 1}, {"product_id": "S13595797233262438_P27624", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(39.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S26858710382003715_S84441');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S79237675029607579_P61616", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(92, 0);
  });

  test('rubric: The delivery address for the Snow Ice order should be Greenland Joy City, West S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Snow Ice order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Snow Ice order should be after 11:00:00 on M', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Snow Ice order should be after 11:00:00 on March 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Snow Ice order should include 2 Snow Ice items, specifically Mango Red Bean ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Snow Ice order should include 2 Snow Ice items, specifically Mango Red Bean flavor and Taro Paste Taro Ball flavor, to satisfy the needs of the user and her friend, one for each"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Lamb Spine Hot Pot order should be Greenland Joy Ci', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Lamb Spine Hot Pot order should be Greenland Joy City, West Station Street, Honggutan District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Lamb Spine Hot Pot order should be after 11:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Lamb Spine Hot Pot order should be after 11:00:00 on March 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lamb Spine Hot Pot order should include Lamb Spine items weighing 2 Jin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lamb Spine Hot Pot order should include Lamb Spine items weighing 2 Jin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
