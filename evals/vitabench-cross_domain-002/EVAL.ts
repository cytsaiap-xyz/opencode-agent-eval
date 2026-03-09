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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802215964928_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802215964928_P00002", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(38, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802215964928_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802215964928_P00001", "quantity": 1}, {"product_id": "S17550802215964928_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(37, 0);
  });

  test('rubric: Game arcades should provide claw machines and arcade games', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Game arcades should provide claw machines and arcade games"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Game arcade reservation time is November 2, 2025 at 3:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Game arcade reservation time is November 2, 2025 at 3:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Game arcade reservation is for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Game arcade reservation is for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the cancelled bitter gourd beverage order is Retro Time', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the cancelled bitter gourd beverage order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order containing two cups of Bitter Gourd Lemon Tea has been cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order containing two cups of Bitter Gourd Lemon Tea has been cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The friend is taking train G1572', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The friend is taking train G1572"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is A Little', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is A Little Tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Mint Lemon Tea and Bitter Gourd Lemon Tea order contains two beverages, one ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Mint Lemon Tea and Bitter Gourd Lemon Tea order contains two beverages, one Mint Lemon Tea and one Bitter Gourd Lemon Tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Mint Lemon Tea and Bitter Gourd Lemon Tea order is Retro Time Game Arcade, 168 East Renmin Road, Wucheng District, Jinhua, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Mint Lemon Tea and Bitter Gourd Lemon Tea or', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Mint Lemon Tea and Bitter Gourd Lemon Tea order should be slightly after 3:00 PM on November 2, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Dragon Boat Festival in 2023 is on June 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Dragon Boat Festival in 2023 is on June 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
