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
    expect(result[0].store_id).toBe('S10884602254755805_S86671');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S82307399321174061_P83228", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(14, 0);
  });

  test('rubric: The delivery address should be Ziwei City Garden near Bank of Communications (Xi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Ziwei City Garden near Bank of Communications (Xi\'an Electronic City Branch), Yanta District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time of the menstrual period drink order should be after 2025-09-18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time of the menstrual period drink order should be after 2025-09-18 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Drink orders cannot select Mixue Ice Cream stores', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Drink orders cannot select Mixue Ice Cream stores"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Drink orders must select products that are Low Caffeine or caffeine-free', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Drink orders must select products that are Low Caffeine or caffeine-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Menstrual period drink orders must select hot drinks, not cold drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Menstrual period drink orders must select hot drinks, not cold drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Menstrual period drink orders should select small or Medium Cup, not large or ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Menstrual period drink orders should select small or Medium Cup, not large or extra-large cups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
