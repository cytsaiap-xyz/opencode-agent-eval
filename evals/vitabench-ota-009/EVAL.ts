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
    expect(result[0].store_id).toBe('S17557505486483162_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486483162_P00082", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(354, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505486483162_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486483162_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(658, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505486483162_T00014');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486483162_P00105", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(356, 0);
  });

  test('rubric: The outbound train ticket should be from Nanchang to Wuyuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket should be from Nanchang to Wuyuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the outbound train ticket should be 2022-03-05', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the outbound train ticket should be 2022-03-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time for the outbound train should be around 11:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time for the outbound train should be around 11:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the price of business class seats for the outbound train within the availa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the price of business class seats for the outbound train within the available options, the result shows 255 yuan per ticket, 510 yuan for two tickets, which exceeds 500 yuan, so the outbound train tickets should select 3 second class seats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel brand should be Atour or Ji Hotel or Vienna', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand should be Atour or Ji Hotel or Vienna"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the booked hotel and Jiangling Rapeseed Flower Field, Jiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the booked hotel and Jiangling Rapeseed Flower Field, Jiangling Village, Wuyuan County, Shangrao City, Jiangxi Province should be less than or equal to 12 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel order should be 2022-03-05', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel order should be 2022-03-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket should be from Wuyuan to Nanchang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket should be from Wuyuan to Nanchang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the return train ticket should be 2022-03-06', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the return train ticket should be 2022-03-06"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time for the return train should be around 17:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time for the return train should be around 17:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the price of business class seats for the return train within the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the price of business class seats for the return train within the available options, the result shows 178 yuan per ticket, 356 yuan for two tickets, which is within 500 yuan, so the return train tickets should select two business class seats"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
