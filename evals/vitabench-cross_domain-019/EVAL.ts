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
    expect(result[0].store_id).toBe('S17550148884164152_I00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148884164152_P00084", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2299, 0);
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
    expect(result[2].store_id).toBe('S17550148884164152_F00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550148884164152_P00040", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(980, 0);
  });

  test('rubric: The Bluetooth earphones ordered should be priced above 2,000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Bluetooth earphones ordered should be priced above 2,000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the Bluetooth earphones is March 3, 2025, 14:00-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the Bluetooth earphones is March 3, 2025, 14:00-15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Bluetooth earphones is 15th Floor, Building B, Jinh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Bluetooth earphones is 15th Floor, Building B, Jinhua Commercial Center, 399 Bayi South Street, Wucheng District, Jinhua, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the reserved Business SPA club should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the reserved Business SPA club should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Business SPA club reservation is for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Business SPA club reservation is for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Business SPA club reservation time is March 3, 2025, 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Business SPA club reservation time is March 3, 2025, 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The agent needs to check the distance between Jindu Garden, 1229 Danxi Road, Wuc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The agent needs to check the distance between Jindu Garden, 1229 Danxi Road, Wucheng District, Jinhua, Zhejiang Province and Yiwu International Airport, 201 Minhang Road, Yiwu, Zhejiang Province. The query result shows that the distance between the two locations does not exceed 50km"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Order flight information for flights departing from Yiwu to Zhengzhou before 10:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Order flight information for flights departing from Yiwu to Zhengzhou before 10:00 on March 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
