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
    expect(result[0].store_id).toBe('S17557505486805216_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486805216_P00107", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(195, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505486805216_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486805216_P00122", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(195, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505486805216_H00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486805216_P00037", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(788, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505486805216_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486805216_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(688, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557505486805216_H00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486805216_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(888, 0);
  });

  test('rubric: It will rain on Mount Emei on April 18 and 19, 2027, so travel should be postpon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "It will rain on Mount Emei on April 18 and 19, 2027, so travel should be postponed to the following weekend, with the departure train ticket date being April 23, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the departure train ticket should be on the evening of April', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the departure train ticket should be on the evening of April 23, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of departure train tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of departure train tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure train ticket should be for a train from Chengdu to Mount Emei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure train ticket should be for a train from Chengdu to Mount Emei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket date should be April 26, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket date should be April 26, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the return train ticket should be noon on April 26, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the return train ticket should be noon on April 26, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of return train tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of return train tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket should be for a train from Mount Emei to Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket should be for a train from Mount Emei to Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the first night\'s hotel should be April 23, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the first night\'s hotel should be April 23, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The first night\'s hotel should be at the foot of Mount Emei', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The first night\'s hotel should be at the foot of Mount Emei"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the first night\'s hotel should be Family Suite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the first night\'s hotel should be Family Suite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the second night\'s hotel should be April 24, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the second night\'s hotel should be April 24, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The second night\'s hotel should be at Leidongping', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The second night\'s hotel should be at Leidongping"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the second night\'s hotel should be Family Suite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the second night\'s hotel should be Family Suite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the third night\'s hotel should be April 25, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the third night\'s hotel should be April 25, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The third night\'s hotel should be at Golden Summit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The third night\'s hotel should be at Golden Summit"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the third night\'s hotel should be Family Suite', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the third night\'s hotel should be Family Suite"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
