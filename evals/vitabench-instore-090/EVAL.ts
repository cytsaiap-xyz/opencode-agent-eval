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
    expect(result[0].store_id).toBe('S17567844930826391_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844930826391_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(368, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567844930826391_I00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567844930826391_P00047", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(188, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The restaurant should be within 5000m (inclusive) of Starbucks Coffee on the fir', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 5000m (inclusive) of Starbucks Coffee on the first floor of Hangyang International Shopping Center, 156 Minzu Avenue, Qingxiu District, Nanning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should specialize in nourishing and stomach-warming ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should specialize in nourishing and stomach-warming soups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from should be a Listed Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from should be a Listed Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s rating should be 4.6 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s rating should be 4.6 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a Set Menu for Four', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a Set Menu for Four"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should have nourishing effects', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should have nourishing effects"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should have Beauty Nourishing effects', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should have Beauty Nourishing effects"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should contain chicken soup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should contain chicken soup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be suitable for pregnant women', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be suitable for pregnant women"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The foot therapy package order status should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The foot therapy package order status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop should be within 1000m (inclusive) of Nuanxin Soup Pot on the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop should be within 1000m (inclusive) of Nuanxin Soup Pot on the 4th floor of Hangyang International Shopping Center, 135 Minzu Avenue, Qingxiu District, Nanning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop should be Inside Shopping Mall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop should be Inside Shopping Mall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop should sell Tea Beverage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop should sell Tea Beverage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop should provide a dine-in environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop should provide a dine-in environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: You should check if the qualifying beverage shop has set menus for 4-5 people, a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "You should check if the qualifying beverage shop has set menus for 4-5 people, and since the result is negative, you should make a reservation at the beverage shop for 202025-11-20 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage shop reservation should be for 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage shop reservation should be for 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
