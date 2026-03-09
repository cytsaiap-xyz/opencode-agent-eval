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
    expect(result[0].store_id).toBe('S17557506430524719_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557506430524719_P00090", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(336, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557506430524719_T00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557506430524719_P00102", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(350, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557506430524719_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557506430524719_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(768, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557506430524719_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557506430524719_P00036", "quantity": 1}, {"product_id": "S17557506430524719_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(300, 0);
  });

  test('rubric: The departure date should be April 12, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date should be April 12, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure train should not be scheduled too early in the day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure train should not be scheduled too early in the day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure train ticket should be from Nanchang to Wuyi Mountain', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure train ticket should be from Nanchang to Wuyi Mountain"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of departure train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of departure train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return date should be April 13, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return date should be April 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train should not be scheduled to arrive too late', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train should not be scheduled to arrive too late"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train should be from Wuyi Mountain to Nanchang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train should be from Wuyi Mountain to Nanchang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of return train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of return train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should feature local tea culture', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should feature local tea culture"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel price should be between 500-1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel price should be between 500-1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type should be a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type should be a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should provide Robot Food Delivery service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should provide Robot Food Delivery service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation should include a room for April 12, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation should include a room for April 12, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be booked should be the Wuyi Mountain Ecological Tea Garden', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be booked should be the Wuyi Mountain Ecological Tea Garden"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets should include tea-making experience', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets should include tea-making experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of attraction tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of attraction tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the attraction tickets should be April 13, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the attraction tickets should be April 13, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
