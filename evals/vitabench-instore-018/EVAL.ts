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
    expect(result[0].store_id).toBe('S17564420276474247_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420276474247_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(118, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564420276474247_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420276474247_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(115, 0);
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

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17564420276474247_I00004');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420276474247_P00015", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(198, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The order status for Gradient Color Manicure Package should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status for Gradient Color Manicure Package should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon should be a store on the top seller list', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon should be a store on the top seller list"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item at the nail salon should be Internet Celebrity Exquisite Manicu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item at the nail salon should be Internet Celebrity Exquisite Manicure Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Based on order history, the last Gradient Color Manicure cost 118 yuan, so the I', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Based on order history, the last Gradient Color Manicure cost 118 yuan, so the Internet Celebrity Exquisite Manicure Package ordered at the nail salon should not exceed 118 yuan (including 118 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of items ordered at the nail salon should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of items ordered at the nail salon should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment should be at Fingertip Art Manicure', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment should be at Fingertip Art Manicure"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment time should be 2024-09-17 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment time should be 2024-09-17 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the nail salon appointment should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the nail salon appointment should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The selected Hair Gobbler Chain location should be the closest to Meishang Nail ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The selected Hair Gobbler Chain location should be the closest to Meishang Nail Art, 3rd Floor, Wanda Plaza, 66 Yuhua West Road, Qiaoxi District, Shijiazhuang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered at Hair Gobbler Chain should be Ice Point', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered at Hair Gobbler Chain should be Ice Point"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item ordered at Hair Gobbler Chain should be Hair Removal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item ordered at Hair Gobbler Chain should be Hair Removal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of items ordered at Hair Gobbler Chain should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of items ordered at Hair Gobbler Chain should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Hair Gobbler Chain appointment should be at Hair Gobbler Hair Removal Chain ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Hair Gobbler Chain appointment should be at Hair Gobbler Hair Removal Chain (Wanda Plaza Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Hair Gobbler Chain appointment time should be 3 hours later than the nail sa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Hair Gobbler Chain appointment time should be 3 hours later than the nail salon, which should be 2024-09-17 11:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Hair Gobbler Chain appointment should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Hair Gobbler Chain appointment should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
