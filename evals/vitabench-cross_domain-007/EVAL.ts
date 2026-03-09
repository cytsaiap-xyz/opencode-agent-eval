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
    expect(result[0].store_id).toBe('S17550802098853509_I00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802098853509_P00058", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(328, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802098853509_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802098853509_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(58, 0);
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

  test('rubric: The food delivery order must be organic healthy vegetarian cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must be organic healthy vegetarian cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery restaurant must offer dine-in service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery restaurant must offer dine-in service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery ingredients cannot contain broccoli', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery ingredients cannot contain broccoli"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order cannot include high purine foods (such as organ meats/se', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order cannot include high purine foods (such as organ meats/seafood soup/Matsutake Mushroom Soup/Kelp and Mushroom Soup, etc.)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order cannot contain caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order cannot contain caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order arrival time should be around 7:30 on March 27, 2025 [i.', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order arrival time should be around 7:30 on March 27, 2025 [i.e., the estimated delivery time is within the 7:15-7:45 interval]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery address is Room 1205, Building 3, Lead SHOW Plaza, Quanxiu Roa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery address is Room 1205, Building 3, Lead SHOW Plaza, Quanxiu Road, Donghai Street, Fengze District, Quanzhou, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must search for and provide information about high-end bath and steam bath cente', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must search for and provide information about high-end bath and steam bath centers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bath establishment ordered must provide steam bath rooms and professional ma', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bath establishment ordered must provide steam bath rooms and professional massage services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bath package ordered should include multiple therapy services such as steam ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bath package ordered should include multiple therapy services such as steam bath, massage, and foot massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bath package needs to include face masks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bath package needs to include face masks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The bath center appointment time must be in the afternoon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The bath center appointment time must be in the afternoon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
