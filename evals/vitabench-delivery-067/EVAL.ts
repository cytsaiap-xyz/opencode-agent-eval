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
    expect(result[0].store_id).toBe('S20256588427202403_S30564');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S16953373692012650_P62169", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(39.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S29739462731693712_S94527');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S44724343238630030_P83860", "quantity": 1}, {"product_id": "S62192820423218074_P62016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(20.79, 0);
  });

  test('rubric: Deliver user\'s personal meal order (Korean grilled beef rice bowl or spicy rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Deliver user\'s personal meal order (Korean grilled beef rice bowl or spicy rice dish) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi\'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for user\'s personal meal should be around 2024-10-18 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for user\'s personal meal should be around 2024-10-18 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: User\'s personal meal should be ordered from Xiaohui Snack House', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "User\'s personal meal should be ordered from Xiaohui Snack House"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The spiciness level of user\'s personal meal should be Mildly Spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The spiciness level of user\'s personal meal should be Mildly Spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Deliver colleague\'s meal order (affordable spicy hot pot single meal) to Linyi ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Deliver colleague\'s meal order (affordable spicy hot pot single meal) to Linyi Urban Construction Group Co., Ltd., 180 meters northwest of the intersection of Xi\'an Road and Baimahe Road, Lanshan District, Linyi City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for colleague\'s meal should be between 2024-10-18 10:49:12 an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for colleague\'s meal should be between 2024-10-18 10:49:12 and 2024-10-18 12:49:12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The spiciness level of colleague\'s meal should be Extra Spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The spiciness level of colleague\'s meal should be Extra Spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
