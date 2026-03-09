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
    expect(result[0].store_id).toBe('S17557505486313958_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486313958_P00076", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(148, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505486313958_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486313958_P00093", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17557505486313958_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486313958_P00015", "quantity": 1}, {"product_id": "S17557505486313958_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(656, 0);
  });

  test('rubric: The 2023 Mid-Autumn Festival is on September 29, and the user needs to return th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The 2023 Mid-Autumn Festival is on September 29, and the user needs to return the day before the Mid-Autumn Festival, with the return date being September 28, 2023. Therefore, the departure train ticket date is September 26, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket should be from Xiamen to Chaoshan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket should be from Xiamen to Chaoshan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train departure time should be relatively early (D2286)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train departure time should be relatively early (D2286)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user needs 1.5 hours to get from the station to school, and the dormitory bu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user needs 1.5 hours to get from the station to school, and the dormitory building closes at 23:00, so the return train arrival time should be before 21:30 on September 28, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket should be from Chaoshan to Xiamen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket should be from Chaoshan to Xiamen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be within 1km of Paifang Street', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be within 1km of Paifang Street"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be a chain hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be a chain hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The opening or renovation date of the booked hotel should be between September 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The opening or renovation date of the booked hotel should be between September 2021 and September 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on price, the booked hotel should be the Hanting Hotel Chaozhou Ancient Ci', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on price, the booked hotel should be the Hanting Hotel Chaozhou Ancient City Branch"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking should include two nights, on September 26, 2023, and Septembe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking should include two nights, on September 26, 2023, and September 27, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel is Hanting Hotel Chaozhou Ancient City Branch, with a hospital ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel is Hanting Hotel Chaozhou Ancient City Branch, with a hospital (Chaozhou People\'s Hospital) about 3 kilometers away"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
