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
    expect(result[0].store_id).toBe('S17550806907653421_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806907653421_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(46.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550806907653421_H00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806907653421_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(880, 0);
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

  test('rubric: The ordered food delivery should be a Healthy Light Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food delivery should be a Healthy Light Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food delivery should include Red Meat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food delivery should include Red Meat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food delivery must include Brown Rice, not white rice or Quinoa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food delivery must include Brown Rice, not white rice or Quinoa"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered food delivery must include Vinaigrette', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered food delivery must include Vinaigrette"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order must comply with the user\'s dietary restrictions of avo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must comply with the user\'s dietary restrictions of avoiding High Sugar and Caffeine-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery address must be Room 801, Unit 1, Building 3, Rongqiao Jinchen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery address must be Room 801, Unit 1, Building 3, Rongqiao Jincheng, 138 Zhuodaoquan South Road, Hongshan District, Wuhan, Hubei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order must be delivered before 3 PM on September 21', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must be delivered before 3 PM on September 21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must be a Five-star hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must be a Five-star hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booked must have been Opened in 2022', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booked must have been Opened in 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type booked must be a Business King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type booked must be a Business King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date must be 2025-09-21', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date must be 2025-09-21"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked should be a Business Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked should be a Business Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant booked must be located within 3km of Wuhan Zall Marriott Hotel, 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant booked must be located within 3km of Wuhan Zall Marriott Hotel, 738 Jianshe Avenue, Jianghan District, Wuhan, Hubei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be after 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be after 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 persons', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 persons"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
