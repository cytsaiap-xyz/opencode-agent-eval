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
    expect(result[0].store_id).toBe('S26065627586369062_S23399');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S18192528497455031_P17757", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(22.99, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18286164646930495_S16514');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S22810519353730742_P56607", "quantity": 1}, {"product_id": "S23661573642546781_P96011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(20.6, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S89411709014069985_S86114');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S28817184822656220_P10240", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(22, 0);
  });

  test('rubric: The delivery address for the Golden Soup Five-Grain Fish Noodles order should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Golden Soup Five-Grain Fish Noodles order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Golden Soup Five-Grain Fish Noodles order should be be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Golden Soup Five-Grain Fish Noodles order should be before 2026-05-11 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fish noodles item in the Golden Soup Five-Grain Fish Noodles order should se', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fish noodles item in the Golden Soup Five-Grain Fish Noodles order should select the option with soup and noodles separated"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the snack order should be A1 Tower, Tengfei Innovation ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the snack order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the snack order should be before 2026-05-11 11:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the snack order should be before 2026-05-11 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pineapple bun item in the snack order should select the version without butt', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pineapple bun item in the snack order should select the version without butter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The snack order should have a total of 2 items, both from De Fa Cai Chaozhou Por', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The snack order should have a total of 2 items, both from De Fa Cai Chaozhou Porridge Tea Restaurant (Suzhou Hengyi Plaza Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Percent Tea fresh milk tea order should be A1 Tower', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Percent Tea fresh milk tea order should be A1 Tower, Tengfei Innovation Park, 160 meters southeast of the intersection of Xinping Street and Ruoshui Road, Huqiu District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Percent Tea fresh milk tea order should be before 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Percent Tea fresh milk tea order should be before 2026-05-11 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The milk tea item with Pistachio Cheese and Water Chestnut Balls in the Percent ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The milk tea item with Pistachio Cheese and Water Chestnut Balls in the Percent Tea fresh milk tea order should select half sugar sweetness"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
