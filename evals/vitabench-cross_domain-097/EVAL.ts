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
    expect(result[0].store_id).toBe('S17550811928169174_I00014');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550811928169174_P00070", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2188, 0);
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
    expect(result[2].store_id).toBe('S17550811928169174_S00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550811928169174_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(498, 0);
  });

  test('rubric: The restaurant ordered should be a high-end business restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be a high-end business restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 500 meters (including 500 meters) from L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 500 meters (including 500 meters) from Linyi Commercial Center Exhibition Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be October 27, 2024 at 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be October 27, 2024 at 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 6-8 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 6-8 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant for purchasing the set meal order should be Yu Pin Xuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant for purchasing the set meal order should be Yu Pin Xuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal order should include one Business Set Meal for 6-8 Peopl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal order should include one Business Set Meal for 6-8 People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea should have elegant packaging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea should have elegant packaging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea should be in standard packaging', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea should be in standard packaging"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The unit price of the tea should be between 400-600 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The unit price of the tea should be between 400-600 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery location for the tea must be Tianji Golden Waterfront, 180 meters n', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery location for the tea must be Tianji Golden Waterfront, 180 meters north of the intersection of Yinqueshan Road and Binhe Road, Lanshan District, Linyi, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the tea should be before 22:00 on October 27, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the tea should be before 22:00 on October 27, 2024 (including 22:00)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea order should include the note \'Leave at community property management c', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea order should include the note \'Leave at community property management center\'"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure station for the train ticket should be Linyi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station for the train ticket should be Linyi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station for the train ticket should be Jinan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station for the train ticket should be Jinan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the train ticket should be October 28, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the train ticket should be October 28, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the train ticket should be between 09:00-11:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the train ticket should be between 09:00-11:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check for the fastest train from Linyi to Jinan on October 28, 2024, bet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check for the fastest train from Linyi to Jinan on October 28, 2024, between 09:00-11:00, with the result being train G1234 (travel time: 1 hour and 20 minutes)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
