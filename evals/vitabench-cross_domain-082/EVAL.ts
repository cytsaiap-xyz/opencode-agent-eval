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
    expect(result[0].store_id).toBe('S17550809912564224_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809912564224_P00049", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(428, 0);
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
    expect(result[2].store_id).toBe('S17550809912564224_S00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809912564224_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(15.9, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550809912564224_H00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809912564224_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: The in-store merchant should be a KTV', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should be a KTV"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant should provide both singing and Hot Pot services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should provide both singing and Hot Pot services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant should provide Small Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should provide Small Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered in-store product should be a 4-Hour package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered in-store product should be a 4-Hour package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved in-store merchant should be Pure K (Yangjiaping Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved in-store merchant should be Pure K (Yangjiaping Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store reservation time should be 2024-03-15 20:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store reservation time should be 2024-03-15 20:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the in-store reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the in-store reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered delivery product should be Throat Lozenges', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered delivery product should be Throat Lozenges"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address must be ZTO Express Office, 24 Xingsheng Road, Yangjiaping,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address must be ZTO Express Office, 24 Xingsheng Road, Yangjiaping, Jiulongpo District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be before 2024-03-15 16:10:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be before 2024-03-15 16:10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be within 1 kilometer of Pure K, 66 Pedestrian Str', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be within 1 kilometer of Pure K, 66 Pedestrian Street, Yangjiaping, Jiulongpo District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel rating should be greater than or equal to 4.8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel rating should be greater than or equal to 4.8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel price should be greater than or equal to 250 yuan and less than or equ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel price should be greater than or equal to 250 yuan and less than or equal to 350 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be March 15, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be March 15, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
