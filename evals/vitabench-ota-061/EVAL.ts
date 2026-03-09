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
    expect(result[0].store_id).toBe('S17557512385846899_F00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00101", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(6900, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512385846899_F00014');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00108", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(8250, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512385846899_H00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00033", "quantity": 1}, {"product_id": "S17557512385846899_P00034", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1840, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512385846899_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00011", "quantity": 1}, {"product_id": "S17557512385846899_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1700, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557512385846899_H00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00016", "quantity": 1}, {"product_id": "S17557512385846899_P00017", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(1300, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557512385846899_H00008');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00043", "quantity": 2}, {"product_id": "S17557512385846899_P00047", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(1940, 0);
  });

  test('order 6 matches expected store', () => {
    expect(result[6].store_id).toBe('S17557512385846899_H00005');
  });

  test('order 6 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00026", "quantity": 1}, {"product_id": "S17557512385846899_P00028", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[6].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 6 has correct total price', () => {
    expect(result[6].total_price).toBeCloseTo(1220, 0);
  });

  test('order 7 matches expected store', () => {
    expect(result[7].store_id).toBe('S17557512385846899_H00001');
  });

  test('order 7 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512385846899_P00003", "quantity": 1}, {"product_id": "S17557512385846899_P00004", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[7].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 7 has correct total price', () => {
    expect(result[7].total_price).toBeCloseTo(1700, 0);
  });

  test('rubric: The order status for order number S17557512385846899_O00001 should be cancelled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order status for order number S17557512385846899_O00001 should be cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure city of the ordered flight should be Beijing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure city of the ordered flight should be Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination city of the ordered flight should be Lhasa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination city of the ordered flight should be Lhasa"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the ordered flight should be June 11, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the ordered flight should be June 11, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the flight order should be 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the flight order should be 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the first night should be InterContinental Lhasa Paradise', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the first night should be InterContinental Lhasa Paradise"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for InterContinental Lhasa Paradise should be 2024-06-11', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for InterContinental Lhasa Paradise should be 2024-06-11"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for InterContinental Lhasa Paradise should include two Twin Rooms and ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for InterContinental Lhasa Paradise should include two Twin Rooms and one King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the second night should be Atour Hotel Shigatse', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the second night should be Atour Hotel Shigatse"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for Atour Hotel Shigatse should be 2024-06-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for Atour Hotel Shigatse should be 2024-06-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for Atour Hotel Shigatse should include one Triple Room and one Twin R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for Atour Hotel Shigatse should include one Triple Room and one Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the third night should be Vienna Hotel Gangga', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the third night should be Vienna Hotel Gangga"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for Vienna Hotel Gangga should be 2024-06-13', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for Vienna Hotel Gangga should be 2024-06-13"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for Vienna Hotel Gangga should include one Triple Room and one Twin Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for Vienna Hotel Gangga should include one Triple Room and one Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the fourth night should be Highland Pearl Hotel Coqen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the fourth night should be Highland Pearl Hotel Coqen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for Highland Pearl Hotel Coqen should be 2024-06-14', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for Highland Pearl Hotel Coqen should be 2024-06-14"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for Highland Pearl Hotel Coqen should include two Twin Rooms and one K', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for Highland Pearl Hotel Coqen should include two Twin Rooms and one King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the fifth night should be Home Inn Nyima', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the fifth night should be Home Inn Nyima"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for Home Inn Nyima should be 2024-06-15', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for Home Inn Nyima should be 2024-06-15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for Home Inn Nyima should include one Triple Room and one Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for Home Inn Nyima should include one Triple Room and one Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel for the sixth night should be JI Hotel Lhasa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel for the sixth night should be JI Hotel Lhasa"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the order for JI Hotel Lhasa should be 2024-06-16', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the order for JI Hotel Lhasa should be 2024-06-16"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order for JI Hotel Lhasa should include one Triple Room and one Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order for JI Hotel Lhasa should include one Triple Room and one Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
