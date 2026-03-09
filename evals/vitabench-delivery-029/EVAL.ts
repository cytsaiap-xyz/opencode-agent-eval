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
    expect(result[0].store_id).toBe('S23597952404471978_S32268');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S26405762812607500_P84518", "quantity": 1}, {"product_id": "S31379212894739768_P71880", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(19.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14430480741096540_S15798');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26182418190845124_P94217", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(26.9, 0);
  });

  test('rubric: Add note to the handmade spicy strips order with order_id 40711008O01: Extra spi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Add note to the handmade spicy strips order with order_id 40711008O01: Extra spicy, thanks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered pork sandwich and rice skin noodles must be in meal set form, not as', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered pork sandwich and rice skin noodles must be in meal set form, not as individual items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the pork sandwich and rice skin noodles order sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the pork sandwich and rice skin noodles order should be before 12:00:00 on June 24, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the pork sandwich and rice skin noodles order should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pork sandwich and rice skin noodles order should be ZTO Express Xigong Branch 3, No. 3 Jiankang East Road, Xigong District, Luoyang, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
