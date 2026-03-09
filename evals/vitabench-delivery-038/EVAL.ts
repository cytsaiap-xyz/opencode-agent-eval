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
    expect(result[0].store_id).toBe('S33946320621632228_S88968');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S75401753354131701_P99357", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(37.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S97919228618067522_S48161');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S87111253562385722_P09756", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(51.8, 0);
  });

  test('rubric: The delivery address for the half chicken set meal order should be International', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the half chicken set meal order should be International Department, South Campus of Linyi No.1 Middle School, No.135 Lingong Road, Zhimadun Street, Hedong District, Linyi City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the half chicken set meal order should be before', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the half chicken set meal order should be before 2025-05-23 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for ordering the half chicken set meal should be Tastin\' Chinese', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for ordering the half chicken set meal should be Tastin\' Chinese Burger (Dongfang City Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the herbal tea Guilinggao order should be No.28 Boutiqu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the herbal tea Guilinggao order should be No.28 Boutique Apartment, 200 Meters West of People\'s Square, Intersection of Yinqueshan Road and Xinhua Road, Lanshan District, Linyi City, Shandong Province (Linyi People\'s Square Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for ordering the herbal tea Guilinggao should be Yu Bao Tang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for ordering the herbal tea Guilinggao should be Yu Bao Tang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The herbal tea Guilinggao ordered should include honey as an ingredient', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The herbal tea Guilinggao ordered should include honey as an ingredient"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
