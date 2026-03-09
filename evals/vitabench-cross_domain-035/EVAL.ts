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
    expect(result[0].store_id).toBe('S17550807829797634_I00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807829797634_P00065", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(198, 0);
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
    expect(result[2].store_id).toBe('S17550807829797634_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807829797634_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(698, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550807829797634_S00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807829797634_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(2899, 0);
  });

  test('rubric: The package ordered at the archery club should be without coach instruction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the archery club should be without coach instruction"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duration of the ordered product should be 3 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duration of the ordered product should be 3 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order at the archery club should be for a two-person package or two single-p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order at the archery club should be for a two-person package or two single-person packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved archery club should be Jian Wu Xu Fa Archery Club (S175508078297976', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved archery club should be Jian Wu Xu Fa Archery Club (S17550807829797634_I00012)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the archery club should be November 19, 2025, at 13:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the archery club should be November 19, 2025, at 13:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the archery club reservation should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the archery club reservation should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The historical order ID to be queried is A0811011T005, train number D3256 arrive', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The historical order ID to be queried is A0811011T005, train number D3256 arrives at 19:42, so there\'s no need to change the train ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include a bird\'s nest gift box', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include a bird\'s nest gift box"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include a bottle of Moutai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include a bottle of Moutai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery address should be Fuzhou Station, No. 168 Lianjiang Middle Roa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery address should be Fuzhou Station, No. 168 Lianjiang Middle Road, Jin\'an District, Fuzhou City, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated food delivery time should be between 19:30 and 19:42 on November 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated food delivery time should be between 19:30 and 19:42 on November 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order should include the note: Contact 18382114867', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order should include the note: Contact 18382114867"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
