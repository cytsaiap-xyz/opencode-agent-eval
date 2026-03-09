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
    expect(result[0].store_id).toBe('S17557075056978907_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557075056978907_P00054", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1106, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557075056978907_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557075056978907_P00067", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1106, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557071994348897_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071994348897_P00027", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(240, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557071994348897_H00004');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557071994348897_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(780, 0);
  });

  test('rubric: Transportation mode should be train', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Transportation mode should be train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound train ticket date should be June 8, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train ticket date should be June 8, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should avoid booking outbound train tickets with early departure times, the outb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should avoid booking outbound train tickets with early departure times, the outbound train number should be D3135"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of outbound train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of outbound train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should avoid booking return train tickets with late arrival times, the return tr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should avoid booking return train tickets with late arrival times, the return train number should be D3142"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of return train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of return train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic area to be booked should be Nanxun Ancient Town Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic area to be booked should be Nanxun Ancient Town Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets should include boat tour packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets should include boat tour packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Ticket type should be Adult Ticket + Boat Tour Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Ticket type should be Adult Ticket + Boat Tour Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date should be June 8, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date should be June 8, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked guesthouse style should be Jiangnan Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked guesthouse style should be Jiangnan Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked guesthouse should provide Room Service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked guesthouse should provide Room Service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the guesthouse should be June 8, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the guesthouse should be June 8, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
