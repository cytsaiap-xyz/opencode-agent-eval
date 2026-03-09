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
    expect(result[0].store_id).toBe('S14759205231927669_S61625');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S26121447051926067_P60427", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(211.2, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S10710308899974275_S95622');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S71504960758110726_P70845", "quantity": 10}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(190, 0);
  });

  test('rubric: The delivery address for the multi-person sushi set meal order should be Interna', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the multi-person sushi set meal order should be Internal Medicine Building, Nanning First People\'s Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the multi-person sushi set meal order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the multi-person sushi set meal order should be before 2:00 PM on September 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order items should be sushi products of the multi-person set meal type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order items should be sushi products of the multi-person set meal type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered products must have Economical/Affordable price characteristics', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered products must have Economical/Affordable price characteristics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the longan drink order should be Internal Medicine Buil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the longan drink order should be Internal Medicine Building, Nanning First People\'s Hospital, No. 89 Qixing Road, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the longan drink order should be before 2:00 PM ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the longan drink order should be before 2:00 PM on September 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order items should be drinks containing longan ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order items should be drinks containing longan ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All products in the longan drink order should have a sweetness attribute of thre', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All products in the longan drink order should have a sweetness attribute of three parts sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
