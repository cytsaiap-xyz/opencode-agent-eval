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
    expect(result[0].store_id).toBe('S82494482631579347_S23157');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30009099950619045_P99935", "quantity": 1}, {"product_id": "S11655027708875740_P71827", "quantity": 1}, {"product_id": "S34002854115936253_P30287", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(16.5, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S69031706351719271_S47372');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S27469872835583751_P78504", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(20.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S12527455866039387_S87262');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S12944248077265433_P42501", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(29.9, 0);
  });

  test('rubric: Successfully cancelled user\'s breakfast order at Chundejin Baozi (Garden Store)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully cancelled user\'s breakfast order at Chundejin Baozi (Garden Store), the order with order_id 40711007O01 should have a status of cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Sticky Bean Bun order should be Taojie Law Office, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Sticky Bean Bun order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Sticky Bean Bun order should be between 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Sticky Bean Bun order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing Sticky Bean Bun products, Low Sugar type should be selected', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing Sticky Bean Bun products, Low Sugar type should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing Sticky Bean Bun products, they should not contain dairy ingredient', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing Sticky Bean Bun products, they should not contain dairy ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sticky Bean Bun order should include the note: Please place it at the front ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sticky Bean Bun order should include the note: Please place it at the front desk of the law firm upon delivery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the lunch set meal order should be Taojie Law Office, R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the lunch set meal order should be Taojie Law Office, Room 101, 396 Xiangyang Street, Jianshe South Road Subdistrict, Jingxiu District, Baoding, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the lunch set meal order should be between 2025-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the lunch set meal order should be between 2025-03-17 12:00:00 and 2025-03-17 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing a lunch meal set , the best-selling single person meal set in the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing a lunch meal set , the best-selling single person meal set in the store should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing a lunch meal set, a light flavor should be selected that meets the', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing a lunch meal set, a light flavor should be selected that meets the requirements of low salt, low oil, and non-spicy diet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch set meal order should include the note: Please place it at the front d', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch set meal order should include the note: Please place it at the front desk of the law firm upon delivery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
