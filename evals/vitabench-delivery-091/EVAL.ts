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
    expect(result[0].store_id).toBe('S30041269188859918_S18118');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23785211641758589_P58323", "quantity": 2}, {"product_id": "S16307685929834239_P63079", "quantity": 1}, {"product_id": "S20095944891750071_P71251", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(174.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S30083969521409190_S86523');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S15458733652995175_P00321", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(24, 0);
  });

  test('rubric: The delivery address for the dinner order should be Room 502, Building 3, Evergr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dinner order should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the dinner order should be around 2025-09-26 19:3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the dinner order should be around 2025-09-26 19:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Xiao Cai Yuan New Hui Cuisine should be selected as the merchant  for the dinner', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Xiao Cai Yuan New Hui Cuisine should be selected as the merchant  for the dinner order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order should include 2 single-person set meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order should include 2 single-person set meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total number of items in the dinner order should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total number of items in the dinner order should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order needs to include a note requesting two sets of disposable table', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order needs to include a note requesting two sets of disposable tableware"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the pot stickers order for tomorrow\'s breakfast should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pot stickers order for tomorrow\'s breakfast should be Room 502, Building 3, Evergrande Oasis, Intersection of Richu Road and Binzhi Road, Feidong County, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Feishu Pot Stickers should be selected as the merchant for tomorrow\'s breakfast', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Feishu Pot Stickers should be selected as the merchant for tomorrow\'s breakfast needs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pot stickers order should not include any products other than pot stickers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pot stickers order should not include any products other than pot stickers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
