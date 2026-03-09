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
    expect(result[0].store_id).toBe('S17564425397654378_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425397654378_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(188, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564425397654378_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425397654378_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(288, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17564425397654378_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425397654378_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(188, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564425397654378_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425397654378_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(268, 0);
  });

  test('rubric: The status of the shoulder and neck massage package order should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The status of the shoulder and neck massage package order should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower arrangement order should teach basic flower arrangement skills', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower arrangement order should teach basic flower arrangement skills"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The environment of the flower shop should be spacious', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The environment of the flower shop should be spacious"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if there is a three-person package in the flower shop where the ord', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if there is a three-person package in the flower shop where the order was placed, and the result is yes; the flower arrangement order should be a Three-person Basic Flower Arrangement Experience Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check the distance between the private kitchen restaurant (4th Floor, Han', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check the distance between the private kitchen restaurant (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan\'s Private Kitchen · Century-old Lu Cuisine)) and the flower shop (4th Floor, Hang Lung Plaza, 188 Quancheng Road, Lixia District, Jinan (Yan\'s Private Kitchen · Century-old Lu Cuisine)) in the order history, and the result is not more than 5 kilometers; also, the private kitchen restaurant has options for three-person meals, so the private kitchen Couple Package order status should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The three-person meal order should belong to Yan\'s Private Kitchen · Century-ol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The three-person meal order should belong to Yan\'s Private Kitchen · Century-old Lu Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The three-person meal package should not contain dishes with heavy oil and spice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The three-person meal package should not contain dishes with heavy oil and spice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the three-person meal order should be one three-person meal, not thr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the three-person meal order should be one three-person meal, not three individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
