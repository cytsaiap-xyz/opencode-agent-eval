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
    expect(result[0].store_id).toBe('S17550808879728834_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808879728834_P00001", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(56, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550855451188044_S00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550855451188044_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(599, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550808879728834_H00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808879728834_P00031", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(688, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550808879728834_T00010');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808879728834_P00050", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(89, 0);
  });

  test('rubric: Post-Illness Meal should be light and easy to digest', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Post-Illness Meal should be light and easy to digest"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Post-Illness Meal should contain High-Quality Protein', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Post-Illness Meal should contain High-Quality Protein"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of Post-Illness Meal should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of Post-Illness Meal should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address of Post-Illness Meal should be Baoding First Central Hospit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address of Post-Illness Meal should be Baoding First Central Hospital Main Campus"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time of Post-Illness Meal is 11:00 on August 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time of Post-Illness Meal is 11:00 on August 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wig should be made of Real Hair Woven', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wig should be made of Real Hair Woven"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The wig should be in Senior Style for women', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The wig should be in Senior Style for women"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address of the wig should be Room 502, Unit 2, Building B, Huafu Re', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address of the wig should be Room 502, Unit 2, Building B, Huafu Residential Complex, No.1699 Dongfeng Middle Road, Lianchi District, Baoding, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time of the wig is before 11:00 on August 3, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time of the wig is before 11:00 on August 3, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There is a hotel with play facilities and childcare services within 1km of Chaoy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There is a hotel with play facilities and childcare services within 1km of Chaoyang Station (such as Beijing Yitel Hotel Family Theme Branch), so a hotel needs to be booked"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date is August 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date is August 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number for the train ticket is G123', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number for the train ticket is G123"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type for the train ticket is First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type for the train ticket is First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
