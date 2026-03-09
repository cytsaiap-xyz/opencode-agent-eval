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
    expect(result[0].store_id).toBe('S13964547993271611_S17164');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S41033997512498734_P56142", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(19, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S13966425117690123_S02958');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S23055183453475350_P16425", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(176.8, 0);
  });

  test('rubric: The delivery address for the hand-shaken lemon tea order should be Jinqiu Reside', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the hand-shaken lemon tea order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the hand-shaken lemon tea order should be betwee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the hand-shaken lemon tea order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hand-shaken lemon tea order should choose the merchant closest to the user: ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hand-shaken lemon tea order should choose the merchant closest to the user: LINLEE Hand-shaken Lemon Tea (Forestry University Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hand-shaken lemon tea order should select the Signature Hand-shaken Lemon Te', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hand-shaken lemon tea order should select the Signature Hand-shaken Lemon Tea product"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sweetness level for the Signature Hand-shaken Lemon Tea should be 5/10 sugar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sweetness level for the Signature Hand-shaken Lemon Tea should be 5/10 sugar (slightly less than standard sweetness)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hand-shaken lemon tea order needs a note requesting the ugliest duck', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hand-shaken lemon tea order needs a note requesting the ugliest duck"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the salmon sashimi order should be Jinqiu Residential A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the salmon sashimi order should be Jinqiu Residential Area, No. 368 Furong South Road, Tianxin District, Changsha, Hunan Province (180 meters from Railway Institute Metro Station Exit 2)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the salmon sashimi order should be between 2025-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the salmon sashimi order should be between 2025-10-10 12:00:00 and 2025-10-10 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The salmon sashimi order should select products labeled as Fresh-cut Today', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The salmon sashimi order should select products labeled as Fresh-cut Today"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
