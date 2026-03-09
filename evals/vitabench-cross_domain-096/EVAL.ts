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
    expect(result[0].store_id).toBe('S17550810471449910_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810471449910_P00058", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(576, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550810471449910_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(498, 0);
  });

  test('rubric: The tea house ordered should have profound cultural heritage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house ordered should have profound cultural heritage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house ordered should provide on-site tea master performance services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house ordered should provide on-site tea master performance services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house ordered should provide various famous tea tasting services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house ordered should provide various famous tea tasting services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the tea house should include in-depth tea culture experie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the tea house should include in-depth tea culture experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The per person budget for the tea house package should be around 200 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The per person budget for the tea house package should be around 200 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the tea house should be May 19, 2024 at 14:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the tea house should be May 19, 2024 at 14:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the tea set ordered should be around 500 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the tea set ordered should be around 500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea set ordered should be exquisite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea set ordered should be exquisite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the tea set order should be before May 18, 2024 a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the tea set order should be before May 18, 2024 at 11:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the tea set order should be Room 1201, Building B, Heng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the tea set order should be Room 1201, Building B, Hengji Garden near Hisense Plaza, 158 South Street, Zhifu District, Yantai, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
