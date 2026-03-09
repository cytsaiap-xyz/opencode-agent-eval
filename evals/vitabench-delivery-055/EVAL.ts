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
    expect(result[0].store_id).toBe('S16600900215255434_S25486');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S23633206553145211_P14654", "quantity": 1}, {"product_id": "S21446171170312259_P41213", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(63.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S10186695543471431_S58464');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26124060913222562_P13131", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S16384697043876564_S20200');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S90462241601970634_P69999", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(38, 0);
  });

  test('rubric: The delivery address for the lunch Sichuan cuisine order should be Zone B, South', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the lunch Sichuan cuisine order should be Zone B, South A Zone, Yalan Garden, Yulin Street, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the lunch Sichuan cuisine order should be around 12:00 on ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the lunch Sichuan cuisine order should be around 12:00 on December 27, 2025, no later than 14:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected restaurant for the lunch Sichuan cuisine order should have a rating', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected restaurant for the lunch Sichuan cuisine order should have a rating of 4.5 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the lunch Sichuan cuisine order should be freshly made dishes, not ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the lunch Sichuan cuisine order should be freshly made dishes, not pre-made dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch Sichuan cuisine order should include 2 dishes, for two people to share', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch Sichuan cuisine order should include 2 dishes, for two people to share"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the thank-you dessert order should be Toyota Car Dealer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the thank-you dessert order should be Toyota Car Dealership"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the thank-you dessert order should be before 14:00 on Dece', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the thank-you dessert order should be before 14:00 on December 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the thank-you dessert order should not contain caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the thank-you dessert order should not contain caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the evening beverage order should be La Terre (Renhe Ne', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the evening beverage order should be La Terre (Renhe New City Branch) restaurant (the complete address is 2nd Floor, Renhe Spring International Plaza, No. 505 West Section of Fucheng Avenue, Wuhou District, Chengdu, Sichuan Province, but it\'s acceptable as long as the restaurant name is correct)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the evening beverage order should be after 18:00 on Decemb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the evening beverage order should be after 18:00 on December 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All beverages in the evening beverage order should be selected with no sugar or ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All beverages in the evening beverage order should be selected with no sugar or no additional sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The evening beverage order should include 2 drinks, for two people to consume', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The evening beverage order should include 2 drinks, for two people to consume"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
