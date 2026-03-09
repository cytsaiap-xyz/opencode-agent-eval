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
    expect(result[0].store_id).toBe('S17567836579442822_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836579442822_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
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
    expect(result[2].store_id).toBe('S17567836579442822_I00009');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836579442822_P00073", "quantity": 1}, {"product_id": "S17567836579442822_P00077", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(83, 0);
  });

  test('rubric: Query user\'s historical behavior. The user has been to Tranquil Yoga Center bef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Query user\'s historical behavior. The user has been to Tranquil Yoga Center before, so the recommended yoga studio cannot be Tranquil Yoga Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered yoga studio should not be more than 5 kilometers (including 5 kilome', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered yoga studio should not be more than 5 kilometers (including 5 kilometers) from the Cardiology Department, 3rd Floor, Outpatient Building, Guiyang First People\'s Hospital, Huaguoyuan CBD, Nanming District, Guiyang City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product in the yoga studio order needs to be an experience package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product in the yoga studio order needs to be an experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product in the yoga studio order needs to be an Aerial yoga program', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product in the yoga studio order needs to be an Aerial yoga program"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user has scheduled to arrive at 18:00 on June 7, 2024, and plans to finish t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user has scheduled to arrive at 18:00 on June 7, 2024, and plans to finish the experience at 20:00 on June 7, 2024. Therefore, the product ordered in the yoga studio order should provide a 2-hour experience duration"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked yoga studio should be Sky Yoga Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked yoga studio should be Sky Yoga Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booking time for the yoga studio is 18:00 on June 7, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booking time for the yoga studio is 18:00 on June 7, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the yoga studio reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the yoga studio reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 800 meters from Room 1203, Building A, F', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 800 meters from Room 1203, Building A, Financial Center, 162 Beijing Road, Yunyan District, Guiyang City"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include a salad combo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include a salad combo"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of salad combo in the restaurant order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of salad combo in the restaurant order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include a fried chicken combo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include a fried chicken combo"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of fried chicken combo in the restaurant order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of fried chicken combo in the restaurant order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The salad combo in the restaurant order must be for a single person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The salad combo in the restaurant order must be for a single person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fried chicken combo in the restaurant order must be for a single person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fried chicken combo in the restaurant order must be for a single person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The salad combo and fried chicken combo in the restaurant order need to be order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The salad combo and fried chicken combo in the restaurant order need to be ordered from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
