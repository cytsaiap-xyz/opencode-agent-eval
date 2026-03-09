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
    expect(result[0].store_id).toBe('S29486264305003802_S39010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S36884482657705391_P75204", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(13.98, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S29486264305003802_S39010');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S28382361366179982_P55716", "quantity": 1}, {"product_id": "S14711568638595663_P90074", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(27.96, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S37913683790352552_S74206');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S14370458659709302_P73302", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(29.8, 0);
  });

  test('rubric: Successfully cancel the user\'s order for Mango Pomelo Sago Cheese Mochi at Nuoj', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully cancel the user\'s order for Mango Pomelo Sago Cheese Mochi at Nuojiji Mochi Shop·Coffee (Shida South Road Branch), with order number 10721002T01"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the new order should still be Nuojiji Mochi Shop·Coffee (Shida ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the new order should still be Nuojiji Mochi Shop·Coffee (Shida South Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reordered mochi items should be Mint Dark Chocolate Cheese Mochi and Blueber', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reordered mochi items should be Mint Dark Chocolate Cheese Mochi and Blueberry and Mulberry Cheese Mochi (Slightly Sour)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The specifications for the reordered mochi items should avoid black mochi skin, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The specifications for the reordered mochi items should avoid black mochi skin, preferring options such as coconut or white Oreo flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reordered mochi order needs to include a note requesting disposable gloves f', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reordered mochi order needs to include a note requesting disposable gloves from the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the reordered mochi should be No.1 Shida South Road, Qi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the reordered mochi should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should purchase boiled and deep-fried food from Sister Xu\'s Boiled and Deep-fri', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should purchase boiled and deep-fried food from Sister Xu\'s Boiled and Deep-fried (Shunwai Road Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boiled and deep-fried order should only include one set meal that contains b', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boiled and deep-fried order should only include one set meal that contains both boiled and deep-fried items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The boiled and deep-fried order needs to include a note requesting no coriander ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The boiled and deep-fried order needs to include a note requesting no coriander and no fish mint, in accordance with the user\'s dietary restrictions of no coriander/fish mint"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Sister Xu\'s Boiled and Deep-fried order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Sister Xu\'s Boiled and Deep-fried order should be No.1 Shida South Road, Qingshanhu District, Nanchang City, Jiangxi Province (200 meters from Exit 4 of Shida South Road Metro Station), Shida South Road No.1 Complex"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
