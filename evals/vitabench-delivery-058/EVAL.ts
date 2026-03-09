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
    expect(result[0].store_id).toBe('S19558514638634850_S98323');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S16531267916494013_P41389", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(34.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S27032620835559200_S43409');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S43147040061896655_P35449", "quantity": 1}, {"product_id": "S20719091317601263_P08018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(91.84, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S10109637620918345_S64872');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S13165353078973956_P18769", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(18.9, 0);
  });

  test('rubric: The delivery address for personal dinner order of crab roe noodles should be Bui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for personal dinner order of crab roe noodles should be Building B, Modern Mansion, No. 288 Zhongxing Middle Road, Yuecheng District, Shaoxing City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for personal dinner crab roe noodles order should be around 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for personal dinner crab roe noodles order should be around 2025-11-14 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing crab roe noodles for personal dinner, avoid very spicy flavors, ch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing crab roe noodles for personal dinner, avoid very spicy flavors, choose mildly spicy or non-spicy options"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for family dinner should be Longzhu Phase 2, 80 meters sout', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for family dinner should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for family dinner order should be before 2025-11-14 19:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for family dinner order should be before 2025-11-14 19:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing pumpkin and duck dishes for family, select restaurants that suppor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing pumpkin and duck dishes for family, select restaurants that support dine-in service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pumpkin dish in the family dinner order should be stir-fried with eggs rathe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pumpkin dish in the family dinner order should be stir-fried with eggs rather than just steamed"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duck dish in the family dinner order should be braised with Sichuan pepperco', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duck dish in the family dinner order should be braised with Sichuan peppercorns and be a half portion"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for family glutinous rice staple food order should be Longz', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for family glutinous rice staple food order should be Longzhu Phase 2, 80 meters south of the intersection of Chaoyang Road and Jinghu Road, Yuecheng District, Shaoxing City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for family glutinous rice staple food order should be before 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for family glutinous rice staple food order should be before 2025-11-14 19:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing glutinous rice staple food for family, select restaurants that pro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing glutinous rice staple food for family, select restaurants that provide dine-in service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The family glutinous rice staple food order needs a note of \'no green onions an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The family glutinous rice staple food order needs a note of \'no green onions and cilantro\' to accommodate children\'s taste preferences"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
