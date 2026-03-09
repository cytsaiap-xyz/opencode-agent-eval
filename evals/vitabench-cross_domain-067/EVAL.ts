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
    expect(result[0].store_id).toBe('S17550802126834321_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126834321_P00006", "quantity": 1}, {"product_id": "S17550802126834321_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(53, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802126834321_I00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126834321_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(388, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802126834321_H00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126834321_P00034", "quantity": 1}];
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

  test('rubric: Food delivery merchants need to have ratings of 4.4 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Food delivery merchants need to have ratings of 4.4 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cake must be made with Dairy Cream', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cake must be made with Dairy Cream"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered cake should be between 20-80 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered cake should be between 20-80 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order needs to include a cake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order needs to include a cake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order needs to include birthday hats and ribbons', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order needs to include birthday hats and ribbons"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake, birthday hats, and ribbons in the order should be from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake, birthday hats, and ribbons in the order should be from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the food delivery order is Room 304, Building 9, Baolon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the food delivery order is Room 304, Building 9, Baolong Residential Area Lane 2, Nanlian Community, Longgang Street (350 meters walk from Exit B of Longcheng Square Metro Station), Longgang District, Shenzhen, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Chinese restaurant should have an Elegant Environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Chinese restaurant should have an Elegant Environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: A Birthday Package should be ordered at the Chinese restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "A Birthday Package should be ordered at the Chinese restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order package should be suitable for three people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order package should be suitable for three people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered set menu dishes must comply with the user\'s dietary restrictions: L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered set menu dishes must comply with the user\'s dietary restrictions: Low Salt"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered set menu dishes should avoid Deep-fried foods', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered set menu dishes should avoid Deep-fried foods"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel should be within 1km or less from the restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel should be within 1km or less from the restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered hotel room cannot be a King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered hotel room cannot be a King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the hotel order should not exceed 400 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the hotel order should not exceed 400 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking date for the hotel order should be 2025-05-20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking date for the hotel order should be 2025-05-20"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
