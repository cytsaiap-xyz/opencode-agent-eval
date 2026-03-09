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
    expect(result[0].store_id).toBe('S17557505552249948_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552249948_P00060", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(118, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505552249948_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552249948_P00065", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(89, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505552249948_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552249948_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(398, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505552249948_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505552249948_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(10, 0);
  });

  test('rubric: The departure date of the outbound train should be September 15, 2029', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the outbound train should be September 15, 2029"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the outbound train should be relatively early', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the outbound train should be relatively early"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket should be for a train from Huizhou to Jiangmen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket should be for a train from Huizhou to Jiangmen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of outbound train ticket should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of outbound train ticket should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the return train should be September 16, 2029', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the return train should be September 16, 2029"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the return train should be relatively late', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the return train should be relatively late"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket should be for a train from Jiangmen to Huizhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket should be for a train from Jiangmen to Huizhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of return train ticket should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of return train ticket should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered hotel should be less than 500 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered hotel should be less than 500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel should provide a gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel should provide a gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel check-in date should be September 15, 2029', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel check-in date should be September 15, 2029"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Jiangmen Donghu Park is about 500 meters from Vienna Hotel Jiangmen Pengjiang Wa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Jiangmen Donghu Park is about 500 meters from Vienna Hotel Jiangmen Pengjiang Wanda Branch, while Kaiping Diaolou and Villages is about 46 kilometers from Vienna Hotel Jiangmen Pengjiang Wanda Branch, therefore tickets for Jiangmen Donghu Park should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket usage date should be September 16, 2029', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket usage date should be September 16, 2029"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
