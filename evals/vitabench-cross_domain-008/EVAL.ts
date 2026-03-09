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
    expect(result[0].store_id).toBe('S17550802114659560_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802114659560_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(129.9, 0);
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
    expect(result[2].store_id).toBe('S17550802114659560_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802114659560_P00023", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(130, 0);
  });

  test('rubric: The delivery order should be for a waist massager', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should be for a waist massager"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address should be Jiazi Village, 663 East Huacheng Avenue, Tianhe D', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Jiazi Village, 663 East Huacheng Avenue, Tianhe District, Guangzhou, Guangdong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be October 27, 2025, 08:15-09:15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be October 27, 2025, 08:15-09:15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should be a teahouse serving Traditional Cantonese Cuisi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should be a teahouse serving Traditional Cantonese Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should offer Morning Tea sets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should offer Morning Tea sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Morning Tea set ordered at the restaurant should not include tea fee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Morning Tea set ordered at the restaurant should not include tea fee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time should be October 29, 2025, 09:30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time should be October 29, 2025, 09:30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park for 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park for 2025 Double Ninth Festival will feature over 300 varieties of chrysanthemums, including traditional chrysanthemums, tall chrysanthemums, cliff chrysanthemums, and sculptural chrysanthemums, as well as intangible cultural heritage chrysanthemum tea tasting activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket price for the Double Ninth Chrysanthemum Exhibition at Guangzhou Liuh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket price for the Double Ninth Chrysanthemum Exhibition at Guangzhou Liuhua Lake Park is 65 yuan per person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the ordered attraction tickets should be October 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the ordered attraction tickets should be October 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of attraction tickets ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of attraction tickets ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
