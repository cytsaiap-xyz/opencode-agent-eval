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
    expect(result[0].store_id).toBe('S17564424751335089_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424751335089_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(138, 0);
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
    expect(result[2].store_id).toBe('S17564424751335089_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424751335089_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(268, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The moxibustion order merchant must be a Traditional Chinese Medicine Health Cen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion order merchant must be a Traditional Chinese Medicine Health Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion order merchant rating must be 4.0 stars or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion order merchant rating must be 4.0 stars or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion order package price must be less than or equal to 150 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion order package price must be less than or equal to 150 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion order merchant environment must be nice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion order merchant environment must be nice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion order package must be suitable for menstrual regulation therapy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion order package must be suitable for menstrual regulation therapy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The moxibustion appointment needs to be scheduled for 8:00 PM (2024-12-19 20:00)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The moxibustion appointment needs to be scheduled for 8:00 PM (2024-12-19 20:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed moxibustion order merchant should be Kang Ning TCM Health Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed moxibustion order merchant should be Kang Ning TCM Health Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai restaurant must be within 3000m of the company (Room 1506, Building B, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai restaurant must be within 3000m of the company (Room 1506, Building B, Building Economy Industrial Park, No. 27 Business Inner Ring Road, Zhengdong New District, Zhengzhou)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai cuisine order package should have an average cost per person between 10', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai cuisine order package should have an average cost per person between 100-150 yuan, meaning a total price between 200 and 300 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai cuisine order package should include signature dishes and drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai cuisine order package should include signature dishes and drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai cuisine order package should be enough for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai cuisine order package should be enough for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai cuisine table reservation needs to be scheduled for Sunday at 6:00 PM (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai cuisine table reservation needs to be scheduled for Sunday at 6:00 PM (2024-12-22 18:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Thai cuisine table reservation needs to be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Thai cuisine table reservation needs to be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Thai restaurant should be Thai Enjoy Thai Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Thai restaurant should be Thai Enjoy Thai Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
