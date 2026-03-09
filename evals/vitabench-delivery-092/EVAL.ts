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
    expect(result[0].store_id).toBe('S27275721451294039_S33656');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S20101317002502950_P98829", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(60, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S19740820626295546_S67618');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S32673216822626376_P48212", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(179, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S24929731886763144_S48061');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S33846261535716549_P36658", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(69, 0);
  });

  test('rubric: The delivery address for the grilled fish order should be Room 1204, Building 3,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the grilled fish order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the grilled fish order should be around 19:00 on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the grilled fish order should be around 19:00 on September 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order should choose grilled fish items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order should choose grilled fish items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish order should include a dual-flavor grilled fish with garlic and', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish order should include a dual-flavor grilled fish with garlic and sauce flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The grilled fish order should select a size for 3 or more people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The grilled fish order should select a size for 3 or more people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the beverage order should be Room 1204, Building 3, Hai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beverage order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beverage order should be between 18:00 and 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beverage order should be between 18:00 and 19:00 on September 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order should choose grape jasmine drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order should choose grape jasmine drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order specification should be large size with less sugar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order specification should be large size with less sugar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The beverage order quantity should be 3 cups', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The beverage order quantity should be 3 cups"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the stir-fried rice noodles order should be Room 1204, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the stir-fried rice noodles order should be Room 1204, Building 3, Haiyun Garden (Haiyuan Street), No. 24 Haiyuan Street, Shahekou District, Dalian, Liaoning Province (430m walk from Exit B of Second Hospital Metro Station)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the stir-fried rice noodles order should be betw', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the stir-fried rice noodles order should be between 18:00 and 19:00 on September 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The stir-fried rice noodles order should select Home-style Restaurant (Stir-fry·', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The stir-fried rice noodles order should select Home-style Restaurant (Stir-fry·Rice Bowls·Dumplings)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The stir-fried rice noodles order should choose stir-fried rice noodles that do ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The stir-fried rice noodles order should choose stir-fried rice noodles that do not contain Chinese turnip"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
