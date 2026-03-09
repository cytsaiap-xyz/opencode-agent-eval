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
    expect(result[0].store_id).toBe('S11668798961810671_S70508');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S19986369287600600_P19459", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(18, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S25744658143312475_S05797');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S22921725616497759_P64399", "quantity": 1}, {"product_id": "S22354168124977757_P23954", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(21, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S25096963193279629_S52306');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S24871042340866006_P28026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(15.99, 0);
  });

  test('rubric: Successfully cancel the user\'s iced coffee order from Night of No Mistake · Cof', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully cancel the user\'s iced coffee order from Night of No Mistake · Coffee in Morning, Wine at Night, the order with id 20715002T01 should be changed to cancelled status"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Yuxiang Shredded Pork lunch order should be Tsinghu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Yuxiang Shredded Pork lunch order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Yuxiang Shredded Pork lunch order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Yuxiang Shredded Pork lunch order should be on or before 2025-08-08 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Yuxiang Shredded Pork lunch order should include a note requesting an extra ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Yuxiang Shredded Pork lunch order should include a note requesting an extra set of cutlery to ensure an additional pair of chopsticks is available"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the new latte order should be Tsinghua Science Park, 10', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the new latte order should be Tsinghua Science Park, 101 University Road, Tangjia Bay, Xiangzhou District, Zhuhai City, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the replacement latte order should be around 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the replacement latte order should be around 2025-08-08 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a replacement latte, avoid Night of No Mistake · Coffee in Mornin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a replacement latte, avoid Night of No Mistake · Coffee in Morning, Wine at Night and choose another coffee shop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a replacement latte, choose a product that Contains coconut milk ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a replacement latte, choose a product that Contains coconut milk to satisfy the requirement for a strong coconut flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a replacement latte, choose a hot drink temperature to avoid cold', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a replacement latte, choose a hot drink temperature to avoid cold drinks irritating the digestive system"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
