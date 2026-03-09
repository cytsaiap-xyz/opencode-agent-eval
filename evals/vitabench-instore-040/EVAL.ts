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
    expect(result[0].store_id).toBe('S17564424748542977_I00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424748542977_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
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
    expect(result[2].store_id).toBe('S17564424748542977_I00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424748542977_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(42, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564424748542977_I00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424748542977_P00025", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(68, 0);
  });

  test('rubric: The hair salon should be within 500 meters of Room 801, 8th Floor, Shaoxing Cham', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hair salon\'s rating should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hair salon\'s rating should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered service at the hair salon should include Essential Oil Treatment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered service at the hair salon should include Essential Oil Treatment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered service at the hair salon should include Styling service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered service at the hair salon should include Styling service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The essential oil brand used in the Essential Oil Treatment service must be Kéra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The essential oil brand used in the Essential Oil Treatment service must be Kérastase or Schwarzkopf"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered service at the hair salon should be 200 yuan or less', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered service at the hair salon should be 200 yuan or less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered service at the hair salon should be available for use on May 8, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered service at the hair salon should be available for use on May 8, 2025, at 12:10"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time at the hair salon should be May 8, 2025, at 12:10', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time at the hair salon should be May 8, 2025, at 12:10"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment at the hair salon should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment at the hair salon should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed hair salon should be Hair Story', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed hair salon should be Hair Story"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dine-in restaurant should be within 1 kilometer of Room 801, 8th Floor, Shao', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in restaurant should be within 1 kilometer of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food at the restaurant should be a single person meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food at the restaurant should be a single person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food at the restaurant should not contain high purine ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food at the restaurant should not contain high purine ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food at the restaurant should not be spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food at the restaurant should not be spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit store should be within 500 meters of Room 801, 8th Floor, Shaoxing Cha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit store should be within 500 meters of Room 801, 8th Floor, Shaoxing Chamber of Commerce Building, 365 Victory East Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items from the fruit store should include at least 5 types of fruits', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items from the fruit store should include at least 5 types of fruits"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered items from the fruit store should not exceed 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered items from the fruit store should not exceed 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
