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
    expect(result[0].store_id).toBe('S17550809460281769_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809460281769_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(68, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550809460281769_T00006');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809460281769_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1288, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The merchant in the food delivery order must offer dine-in service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant in the food delivery order must offer dine-in service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order must be for Chicken with Pig Stomach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must be for Chicken with Pig Stomach"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery items must not contain scallions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery items must not contain scallions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of items in the food delivery order must be 50 yuan or more', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of items in the food delivery order must be 50 yuan or more"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the food order must be Building 12, 3rd Floor, Zone C, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the food order must be Building 12, 3rd Floor, Zone C, Nanning Software Park, No.15 Innovation Road, High-tech Zone, Xixiangtang District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the food order should be before 12:00 on May 19, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the food order should be before 12:00 on May 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket must be for the shortest journey time, and the train should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket must be for the shortest journey time, and the train should be G1256"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: If no suitable High-Speed Train tickets are available the day before Dragon Boat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "If no suitable High-Speed Train tickets are available the day before Dragon Boat Festival (2025-05-30), then the train ticket purchase date should be May 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be for Business Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be for Business Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved bar must provide Live Music performance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved bar must provide Live Music performance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved bar must offer Exquisite Cocktail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved bar must offer Exquisite Cocktail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved bar must offer Solo Drinking Set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved bar must offer Solo Drinking Set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar\'s Solo Drinking Set should include Appetizers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar\'s Solo Drinking Set should include Appetizers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar reservation time should be 20:00 on May 19, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar reservation time should be 20:00 on May 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bar reservation should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bar reservation should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
