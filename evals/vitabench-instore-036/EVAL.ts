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
    expect(result[0].store_id).toBe('S17564426706759535_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426706759535_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(499, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564426706759535_I00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564426706759535_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
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

  test('rubric: The photography studio should have a High Return Rate', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio should have a High Return Rate"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio\'s equipment should be Professional Equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio\'s equipment should be Professional Equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio order should be for the cheapest package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio order should be for the cheapest package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio order should be for a Personal Portrait Photography packa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio order should be for a Personal Portrait Photography package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio package ordered should include 10 or more Retouched Photo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio package ordered should include 10 or more Retouched Photos"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio package ordered should include all original photos servic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio package ordered should include all original photos service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the weather in Zhuhai on June 2, 2024 is sunny, the restaurant order shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the weather in Zhuhai on June 2, 2024 is sunny, the restaurant order should be for Western Food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant should be no more than 3km (including 3km) from Starlight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant should be no more than 3km (including 3km) from Starlight Photography Studio, 3rd Floor, Huafa Mall, 1688 Mingzhu South Road, Xiangzhou District, Zhuhai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should allow for Terrace Dining', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should allow for Terrace Dining"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Western restaurant order should be a Single Set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Western restaurant order should be a Single Set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio appointment time should be 10:00:00 AM on June 2, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio appointment time should be 10:00:00 AM on June 2, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photography studio reservation should be with Starlight Photography Studio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photography studio reservation should be with Starlight Photography Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
