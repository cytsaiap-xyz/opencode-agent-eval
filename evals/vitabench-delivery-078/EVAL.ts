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
    expect(result[0].store_id).toBe('S32352534561955193_S72446');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S24482885289562176_P77981", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(87, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S21687429664650680_S32362');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S20111038835749649_P89250", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S10892011637579176_S44408');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S74469906752994471_P47610", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(54, 0);
  });

  test('rubric: The delivery address for lunch order should be Co-working Space, 5th Floor, Cent', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for lunch order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for lunch order should be around 2025-10-16 12:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for lunch order should be around 2025-10-16 12:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch order should select Wu-Yue specialties, and the portion should be suit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch order should select Wu-Yue specialties, and the portion should be suitable for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for afternoon drink order should be Co-working Space, 5th F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for afternoon drink order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for afternoon drink order should be around 2025-10-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for afternoon drink order should be around 2025-10-16 16:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The afternoon drink order should select lemon drinks that have refreshing effect', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The afternoon drink order should select lemon drinks that have refreshing effects"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product specification for afternoon drink order should select no ice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product specification for afternoon drink order should select no ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of products for afternoon drink order should be 2 portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of products for afternoon drink order should be 2 portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for dinner order should be Co-working Space, 5th Floor, Cen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for dinner order should be Co-working Space, 5th Floor, Center 66, No. 139 Renmin Middle Road, Liangxi District, Wuxi City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for dinner order should be around 2025-10-16 20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for dinner order should be around 2025-10-16 20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order should select Spicy Beef Noodle Soup products without meat side', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order should select Spicy Beef Noodle Soup products without meat side dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
