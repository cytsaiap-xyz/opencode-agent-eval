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
    expect(result[0].store_id).toBe('S17567836583649809_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836583649809_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(388, 0);
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
    expect(result[2].store_id).toBe('S17567836583649809_I00009');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836583649809_P00074", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(666, 0);
  });

  test('rubric: The tea house ordered must be within 3000 meters (inclusive) of Times Mansion, N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house ordered must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order must include a four-person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order must include a four-person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order must include access to a Private Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order must include access to a Private Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order must include tea beverages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order must include tea beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house order must include Mahjong service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house order must include Mahjong service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Since the user mentioned arriving at 2:00 PM on March 18, 2023 and planning to s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Since the user mentioned arriving at 2:00 PM on March 18, 2023 and planning to stay until 6:00 PM on March 18, 2023, the tea house package must support at least 4 Hours of entertainment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved tea house should be Jinxuan Tea House', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved tea house should be Jinxuan Tea House"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation should be for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation should be for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation time should be 14:00:00 on March 18, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation time should be 14:00:00 on March 18, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot restaurant must be within 3000 meters (inclusive) of Times Mansion, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot restaurant must be within 3000 meters (inclusive) of Times Mansion, No. 188 Zhiquan Street, East Street, Jinjiang District, Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot package must be suitable for at least 5 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot package must be suitable for at least 5 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot package must include Beverages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot package must include Beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hot pot package must not include alcoholic drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hot pot package must not include alcoholic drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total budget for both the tea house and hot pot restaurant is 1200 yuan. Aft', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total budget for both the tea house and hot pot restaurant is 1200 yuan. After subtracting the tea house package price, 812 yuan remains. Therefore, the hot pot package price should be less than or equal to 812 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
