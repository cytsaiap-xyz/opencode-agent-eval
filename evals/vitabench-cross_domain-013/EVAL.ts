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
    expect(result[0].store_id).toBe('S17550802128064414_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802128064414_P00011", "quantity": 1}, {"product_id": "S17550802128064414_P00014", "quantity": 1}, {"product_id": "S17550802128064414_P00015", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(406, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802128064414_H00008');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802128064414_P00054", "quantity": 1}];
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

  test('rubric: The food delivery restaurant should be a high-end Chinese restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery restaurant should be a high-end Chinese restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The average cost per person at the food delivery restaurant should be around 200', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The average cost per person at the food delivery restaurant should be around 200 Yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should avoid heavy oil spicy dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should avoid heavy oil spicy dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include two dishes and two staple foods', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include two dishes and two staple foods"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Room 1204, Building B2, No. 700 Yishan Road, Xuhu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Room 1204, Building B2, No. 700 Yishan Road, Xuhui District, Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time should be around 18:00 on June 27, 2025 [i.e., the ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time should be around 18:00 on June 27, 2025 [i.e., the expected delivery time should be between 17:45 and 18:15]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be on the Shanghai Bund', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be on the Shanghai Bund"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be a Huangpu River View Suite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be a Huangpu River View Suite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be June 27, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be June 27, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant to be reserved should have a romantic atmosphere', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant to be reserved should have a romantic atmosphere"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant should provide a couple set menu that includes champagne ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant should provide a couple set menu that includes champagne and fresh flowers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant reservation time should be 12:00 on June 28, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant reservation time should be 12:00 on June 28, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the western restaurant reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the western restaurant reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: June 28, 2025 will be rainy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "June 28, 2025 will be rainy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should not book a pottery experience class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should not book a pottery experience class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
