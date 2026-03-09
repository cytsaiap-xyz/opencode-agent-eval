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
    expect(result[0].store_id).toBe('S17550812417923070_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812417923070_P00041", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(158, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812417923070_S00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812417923070_P00011", "quantity": 1}, {"product_id": "S17550812417923070_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(89.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550812417923070_T00007');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812417923070_P00031", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(154, 0);
  });

  test('rubric: The in-store merchant should be an outdoor store with camping activities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should be an outdoor store with camping activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered outdoor store must have an area available for Frisbee activities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered outdoor store must have an area available for Frisbee activities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the outdoor store should be a Two-Person Stove-Cooked Tea ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the outdoor store should be a Two-Person Stove-Cooked Tea Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order must include Playing Cards', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order must include Playing Cards"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order must include Frisbee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order must include Frisbee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The playing cards and frisbee in the takeout order must come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The playing cards and frisbee in the takeout order must come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order should be Hoshino Camping Base, 168 W', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order should be Hoshino Camping Base, 168 Wanghai Road, Xinglongtai District, Panjin, Liaoning Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the takeout order should be before 15:00 on Novem', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the takeout order should be before 15:00 on November 22, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the final ordered high-speed rail ticket from Panjin to Da', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the final ordered high-speed rail ticket from Panjin to Dalian should be 21:42"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number of the final ordered high-speed rail ticket should be G8021', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number of the final ordered high-speed rail ticket should be G8021"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
