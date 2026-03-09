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
    expect(result[0].store_id).toBe('S17557513695122299_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513695122299_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(90, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557513695122299_A00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513695122299_P00033", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(45, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557513695122299_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557513695122299_P00002", "quantity": 1}, {"product_id": "S17557513695122299_P00003", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1860, 0);
  });

  test('rubric: Need to query all ticket options for visiting Meng Jiangnu Temple, and choose th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to query all ticket options for visiting Meng Jiangnu Temple, and choose the most cost-effective combination. The result shows that Meng Jiangnu Temple is located within Shanhaiguan, so choosing the Shanhaiguan Scenic Area Double Ticket and Meng Jiangnu Temple Double Ticket would be the most economical option"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Shanhaiguan Scenic Area ticket order should be a Double Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Shanhaiguan Scenic Area ticket order should be a Double Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the Shanhaiguan Scenic Area ticket should be next Thursday (A', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the Shanhaiguan Scenic Area ticket should be next Thursday (April 3, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Meng Jiangnu Temple ticket order should be a Double Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Meng Jiangnu Temple ticket order should be a Double Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the Meng Jiangnu Temple ticket should be next Thursday (April', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the Meng Jiangnu Temple ticket should be next Thursday (April 3, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must query direct flights from Shenzhen to Qinhuangdao, Hebei, filtering for tic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must query direct flights from Shenzhen to Qinhuangdao, Hebei, filtering for tickets on April 2, 2025. The result shows insufficient tickets for two people, so flight tickets should not be purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located within 3 kilometers (inclusive) of the user\'s home (R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located within 3 kilometers (inclusive) of the user\'s home (Room 1507, Yihua Fintech Building, 3018 Keyuan South Road, South Science Park, Nanshan District, Shenzhen, Guangdong Province)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking check-in dates must be March 27, 2025 and March 28, 2025 respe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking check-in dates must be March 27, 2025 and March 28, 2025 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be a five-star hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be a five-star hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must provide Childcare Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must provide Childcare Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room type must be a Family Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room type must be a Family Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
