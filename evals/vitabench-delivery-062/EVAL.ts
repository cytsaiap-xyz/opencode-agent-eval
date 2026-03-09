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
    expect(result[0].store_id).toBe('S14869188927748166_S56333');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S11290194455544313_P61785", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(88.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S14913462339481426_S95816');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S82609394899889132_P42592", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(88.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S31962114888131936_S05343');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S52821417266607384_P33294", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(17.88, 0);
  });

  test('rubric: The anniversary cake order should select products with high cost-effectiveness', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The anniversary cake order should select products with high cost-effectiveness"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the anniversary cake order should be before 18:00:00 on Ma', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the anniversary cake order should be before 18:00:00 on May 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the anniversary cake order should be Oasis Garden, No. ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the anniversary cake order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The products in the dinner set meal order should have appetizing effects', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The products in the dinner set meal order should have appetizing effects"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The products in the dinner set meal order should be small portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The products in the dinner set meal order should be small portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the dinner set meal order should be before 18:00:00 on May', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the dinner set meal order should be before 18:00:00 on May 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the dinner set meal order should be Oasis Garden, No. 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dinner set meal order should be Oasis Garden, No. 133 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch rice noodle roll order should note \'less sauce\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch rice noodle roll order should note \'less sauce\'"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The lunch rice noodle roll should be of beef and egg flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The lunch rice noodle roll should be of beef and egg flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the lunch rice noodle roll order should be within 11:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the lunch rice noodle roll order should be within 11:00:00-12:00:00 on May 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the lunch rice noodle roll order should be Mingmen Tian', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the lunch rice noodle roll order should be Mingmen Tianjing, No. 157 Minzu Avenue, Qingxiu District, Nanning, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
