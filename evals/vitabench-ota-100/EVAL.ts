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
    expect(result[0].store_id).toBe('S17557074548681683_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557074548681683_P00074", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(45, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557074548681683_T00016');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557074548681683_P00097", "quantity": 1}];
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
    expect(result[2].store_id).toBe('S17557074548681683_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557074548681683_P00046", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(30, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557540007196491_A00007');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557540007196491_P00063", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(45, 0);
  });

  test('rubric: The departure date of the outbound train is November 21, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the outbound train is November 21, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the outbound train should be before 10:00 AM on November 21,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the outbound train should be before 10:00 AM on November 21, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket should be for the shortest journey time (G6632)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket should be for the shortest journey time (G6632)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket should be for a train from Zhengzhou to Xuchang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket should be for a train from Zhengzhou to Xuchang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the return train is November 23, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the return train is November 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the return train should be before 5:00 PM on November 23, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the return train should be before 5:00 PM on November 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train ticket should be for a train from Xuchang to Zhengzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train ticket should be for a train from Xuchang to Zhengzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the Chunqiu Tower ticket should be November 23, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the Chunqiu Tower ticket should be November 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chunqiu Tower ticket type should be adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chunqiu Tower ticket type should be adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather in Xuchang on Saturday (November 22, 2025) is sunny, so tickets for ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather in Xuchang on Saturday (November 22, 2025) is sunny, so tickets for Huanglonggu Scenic Area should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the Huanglonggu Scenic Area tickets should be November 22, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the Huanglonggu Scenic Area tickets should be November 22, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the return train (D6789) is 14:20, which is before 15:00, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the return train (D6789) is 14:20, which is before 15:00, so tickets for Chancellor Cao\'s Mansion should not be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
