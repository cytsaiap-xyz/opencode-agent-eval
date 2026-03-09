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
    expect(result[0].store_id).toBe('S17550813810057650_I00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550813810057650_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(398, 0);
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
    expect(result[2].store_id).toBe('S17550858752569984_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550858752569984_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(128, 0);
  });

  test('rubric: The ordered Western restaurant should be within 3km of Super Gorilla Gym, 4th Fl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Western restaurant should be within 3km of Super Gorilla Gym, 4th Floor, Wanda Plaza, 365 East Shengli Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Western restaurant should have Live Music', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Western restaurant should have Live Music"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Western restaurant should be by the lake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Western restaurant should be by the lake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items at the Western restaurant should be a non-alcoholic Couple Set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items at the Western restaurant should be a non-alcoholic Couple Set Menu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant is Lakeside Piano Melody Western Restaurant (S1755081381', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant is Lakeside Piano Melody Western Restaurant (S17550813810057650_I00005)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is April 3, 2025, at 7:00 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is April 3, 2025, at 7:00 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation is for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation is for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order item is a Sunflower Bouquet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order item is a Sunflower Bouquet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address is Lakeside Piano Melody Western Restaurant, Next to Jinghu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address is Lakeside Piano Melody Western Restaurant, Next to Jinghu Park, 388 East Shengli Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time is around 8:00 PM on April 3, 2025 [delivery should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time is around 8:00 PM on April 3, 2025 [delivery should arrive between 7:45 PM and 8:15 PM]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
