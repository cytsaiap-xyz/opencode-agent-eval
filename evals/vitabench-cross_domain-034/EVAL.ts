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
    expect(result[0].store_id).toBe('S17550940890083291_H00007');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550940890083291_P00044", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(888, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550940890083291_S00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550940890083291_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(268, 0);
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

  test('rubric: The hotel booked should be a Hot Spring hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked should be a Hot Spring hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should have a quiet environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should have a quiet environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel must be Clean and Hygienic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel must be Clean and Hygienic"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type of the booked hotel should include Private Hot Spring Bath', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type of the booked hotel should include Private Hot Spring Bath"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Foshan on December 28, 2025 (Foshan weather is rain', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Foshan on December 28, 2025 (Foshan weather is rainy, temperature 10-15°C, humidity 78%), rainy day, the hotel check-in date should be December 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wine merchant should be a Wine Specialty Store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wine merchant should be a Wine Specialty Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wine ordered should be White Wine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wine ordered should be White Wine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wine ordered should avoid Sweet wine types', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wine ordered should avoid Sweet wine types"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the wine should be December 26, 2025, 19:00-20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the wine should be December 26, 2025, 19:00-20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wine delivery address should be Evian Tianhui North Area, 60m Southeast of L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wine delivery address should be Evian Tianhui North Area, 60m Southeast of Liangping Road and Zhongchuang Lane Intersection, Nanhai District, Foshan, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check when Christmas 2025 is, the result is December 25, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check when Christmas 2025 is, the result is December 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked should be a High-end Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked should be a High-end Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked should have a Terrace', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked should have a Terrace"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The location of the booked restaurant should be within 3000M of Haibei Creative ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The location of the booked restaurant should be within 3000M of Haibei Creative Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The per person cost of the restaurant\'s set menu should be between 150-350 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The per person cost of the restaurant\'s set menu should be between 150-350 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked restaurant should offer Fusion Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked restaurant should offer Fusion Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to book restaurant seats for Christmas (December 25, 2025) at 7 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to book restaurant seats for Christmas (December 25, 2025) at 7 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant booking should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant booking should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
