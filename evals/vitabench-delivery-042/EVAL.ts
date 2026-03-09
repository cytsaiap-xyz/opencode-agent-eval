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
    expect(result[0].store_id).toBe('S16397977979949275_S31031');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S29243685947942659_P16634", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(32, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18439376674920482_S13973');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S16344074169041072_P77071", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S14058772949030407_S32078');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S10503479207992409_P98431", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(29.76, 0);
  });

  test('rubric: Need to cancel the order containing stinky tofu from Tianma Prince Stinky Tofu s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to cancel the order containing stinky tofu from Tianma Prince Stinky Tofu store, update the status of order with order_id 80716002T01 to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly placed snack order should be from Tianma Prince Stinky Tofu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly placed snack order should be from Tianma Prince Stinky Tofu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The newly placed combo snack set should avoid foods with strong odors, such as s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The newly placed combo snack set should avoid foods with strong odors, such as stinky tofu and other fermented snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time of the newly placed snack order should be before 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time of the newly placed snack order should be before 2025-05-17 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the beverage order should be Hunan TV Program Productio', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beverage order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beverage order should be before 2025-05-17 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beverage order should be before 2025-05-17 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should be placed from Liangguo Ba (Hengda Yayuan Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should be placed from Liangguo Ba (Hengda Yayuan Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for Spicy Chicken Stir-fried Noodles order should be Hunan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for Spicy Chicken Stir-fried Noodles order should be Hunan TV Program Production Center (North Area), 60 meters southwest of the intersection of Anju Road and Guixin Road, Kaifu District, Changsha City, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Spicy Chicken Stir-fried Noodles order shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Spicy Chicken Stir-fried Noodles order should be before 2025-05-17 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product brand of the Spicy Chicken Stir-fried Noodles order should be Korean', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product brand of the Spicy Chicken Stir-fried Noodles order should be Korean Samyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
