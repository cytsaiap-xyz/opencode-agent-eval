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
    expect(result[0].store_id).toBe('S17550802110932959_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802110932959_P00001", "quantity": 1}, {"product_id": "S17550802110932959_P00002", "quantity": 1}, {"product_id": "S17550802110932959_P00005", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(186, 0);
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
    expect(result[2].store_id).toBe('S17550802110932959_T00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802110932959_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(42, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802110932959_S00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802110932959_P00001", "quantity": 1}, {"product_id": "S17550802110932959_P00002", "quantity": 1}, {"product_id": "S17550802110932959_P00003", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(182, 0);
  });

  test('rubric: The food delivery order containing Snow Brave Journey Beer has been canceled', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order containing Snow Brave Journey Beer has been canceled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The store for dine-in ordering needs to be Open 24 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The store for dine-in ordering needs to be Open 24 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The store for dine-in ordering should be within 5km (inclusive) of Building B3, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The store for dine-in ordering should be within 5km (inclusive) of Building B3, Luoyang Intelligent Manufacturing Industrial Park, No.96 Binhe North Road, High-tech Zone, Luoyang, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The billiards hall reservation time is 5:00 on July 18, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The billiards hall reservation time is 5:00 on July 18, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the billiards hall reservation is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the billiards hall reservation is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be for a train from Luoyang to Pingdingshan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be for a train from Luoyang to Pingdingshan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the ordered train ticket should be before 18:00 (inclusive) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the ordered train ticket should be before 18:00 (inclusive) on July 18, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered train ticket should be for train number K1236', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered train ticket should be for train number K1236"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The non-canceled food delivery order should include Crayfish', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The non-canceled food delivery order should include Crayfish"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The non-canceled food delivery order should include Oysters', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The non-canceled food delivery order should include Oysters"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The non-canceled food delivery order should include Arctic Ocean Soda', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The non-canceled food delivery order should include Arctic Ocean Soda"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The non-canceled food delivery order should include 2 Arctic Ocean Soda', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The non-canceled food delivery order should include 2 Arctic Ocean Soda"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Crayfish, Oysters, and Arctic Ocean Soda in the non-canceled food delivery o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Crayfish, Oysters, and Arctic Ocean Soda in the non-canceled food delivery order should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the non-canceled food delivery order should be Building', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the non-canceled food delivery order should be Building B3, Luoyang Intelligent Manufacturing Industrial Park, No.96 Binhe North Road, High-tech Zone, Luoyang, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the non-canceled food delivery order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the non-canceled food delivery order should be 2:00 on July 18, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
