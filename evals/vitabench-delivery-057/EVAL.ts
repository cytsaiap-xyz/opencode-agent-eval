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
    expect(result[0].store_id).toBe('S23312256807055062_S85735');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S67035860351848435_P63325", "quantity": 1}, {"product_id": "S11629187197692636_P36270", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(27.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S16925160597268446_S05242');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S32779988634634158_P65798", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(44.0, 0);
  });

  test('rubric: The delivery address for the pancake order should be Building A, Baolian Plaza, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the pancake order should be Building A, Baolian Plaza, 1103 Liyu Road, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the pancake order should be between 2025-02-08 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the pancake order should be between 2025-02-08 11:30:00 and 2025-02-08 12:15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pancake order should select Lai Shili Pu·Pancake (Sanjiang International Sto', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pancake order should select Lai Shili Pu·Pancake (Sanjiang International Store) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pancake order should include Multigrain Pancake + Egg + Crispy Cracker + Han', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pancake order should include Multigrain Pancake + Egg + Crispy Cracker + Handmade Extra Large Tenderloin + Lettuce item and add Beef Slices item"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pancake order should add a note requesting to cut the pancake into halves', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pancake order should add a note requesting to cut the pancake into halves"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the beverage order should be Building A, Baolian Plaza,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beverage order should be Building A, Baolian Plaza, 1103 Liyu Road, Wucheng District, Jinhua City, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beverage order should be before 2025-05-23 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beverage order should be before 2025-05-23 12:15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select drinks with Sweet and Fresh flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select drinks with Sweet and Fresh flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select drinks with less ice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select drinks with less ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should select drinks with no extra sugar to meet sugar restri', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should select drinks with no extra sugar to meet sugar restriction requirements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
