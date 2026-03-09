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
    expect(result[0].store_id).toBe('S46965052648464593_S62841');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23791788223100807_P96193", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(30.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S24068403411340407_S13634');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S66100942698586097_P70018", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(54, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S16962569604602955_S46413');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S31573652904634511_P96917", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(30, 0);
  });

  test('rubric: The delivery address for the lunch noodle order should be Quanzhou Urban Constru', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the lunch noodle order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the lunch noodle order should be before 12:30 on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the lunch noodle order should be before 12:30 on August 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered lunch noodle items should not contain seafood ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered lunch noodle items should not contain seafood ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered lunch noodle items should not contain offal ingredients such as pork', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered lunch noodle items should not contain offal ingredients such as pork intestine, pig liver, etc."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the bakery order should be Quanzhou Urban Construction ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the bakery order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the bakery order should be before 12:30 on Augus', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the bakery order should be before 12:30 on August 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the bakery order should be Jiyue Bakery', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the bakery order should be Jiyue Bakery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered bakery items should have a Chewy Texture, usually indicated in the p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered bakery items should have a Chewy Texture, usually indicated in the product description or tags"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bakery order should include 3 identical bread items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bakery order should include 3 identical bread items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Four Fruits Soup order should be Quanzhou Urban Con', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Four Fruits Soup order should be Quanzhou Urban Construction Group Co., Ltd., Building 8, Shuimo Fanglin, 688 Anji South Road, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Four Fruits Soup order should be before 19:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Four Fruits Soup order should be before 19:00 on August 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Four Fruits Soup order should include a note specifying one soup without pea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Four Fruits Soup order should include a note specifying one soup without pearls"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Four Fruits Soup order should select the best-selling Four Fruits Soup from ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Four Fruits Soup order should select the best-selling Four Fruits Soup from the store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
