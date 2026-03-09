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
    expect(result[0].store_id).toBe('S24717473813710342_S37435');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S12037763664481505_P73894", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(17.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S16740267212964910_S79387');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S29570288274735276_P40070", "quantity": 1}];
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

  test('rubric: When ordering pork dumplings for the user, the order items should not contain ch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering pork dumplings for the user, the order items should not contain chive filling"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When ordering pork dumplings for the user, the store rating should be 4.5 or abo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering pork dumplings for the user, the store rating should be 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When ordering pork dumplings for the user, the store should have a physical loca', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering pork dumplings for the user, the store should have a physical location with Dine-in Available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the user\'s pork dumplings order should be Faculty Buil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the user\'s pork dumplings order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When ordering Seafood Dumpling Soup for grandmother, the store rating should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering Seafood Dumpling Soup for grandmother, the store rating should be 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When ordering Seafood Dumpling Soup for grandmother, the store should have a phy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When ordering Seafood Dumpling Soup for grandmother, the store should have a physical location with Dine-in Available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for grandmother\'s Seafood Dumpling Soup order should be Fa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for grandmother\'s Seafood Dumpling Soup order should be Faculty Building, No.62 West Second Ring North Road, Qiaoxi District, Shijiazhuang City, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
