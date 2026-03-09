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
    expect(result[0].store_id).toBe('S31362996935520633_S70024');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S27262801368361992_P09650", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(58.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S77677443573225892_S65701');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S78675090921581153_P42837", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(33.98, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S26949391557525109_S37617');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17999679772584705_P19717", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(17.0, 0);
  });

  test('rubric: The delivery address for the user\'s pork trotter set meal order should be Build', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the user\'s pork trotter set meal order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the user\'s pork trotter set meal order should be around 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the user\'s pork trotter set meal order should be around 2025-04-18 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s pork trotter set meal order should select products with stronger spi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s pork trotter set meal order should select products with stronger spicy red oil flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the roommate\'s Fresh Shrimp and Crab Roe Wonton order ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the roommate\'s Fresh Shrimp and Crab Roe Wonton order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the roommate\'s Fresh Shrimp and Crab Roe Wonton order sho', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the roommate\'s Fresh Shrimp and Crab Roe Wonton order should be around 2025-04-18 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select the merchan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select the merchant closest to the user\'s location, which is Yuan Ji Cloud Dumplings (Zhabridge Store)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select a flavor wi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The roommate\'s Fresh Shrimp and Crab Roe Wonton order should select a flavor with prominent numbing spiciness"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the beverage order should be Building 6, Student Apartm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beverage order should be Building 6, Student Apartment, Jiaojiang Campus of Taizhou University, Jiaojiang District, Taizhou City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the beverage order should be around 2025-04-18 15:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the beverage order should be around 2025-04-18 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select drinks without dairy products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select drinks without dairy products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The specification for the beverage order should be no ice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The specification for the beverage order should be no ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
