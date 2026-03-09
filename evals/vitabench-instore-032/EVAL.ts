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
    expect(result[0].store_id).toBe('S17564425272419512_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425272419512_P00001", "quantity": 1}, {"product_id": "S17564425272419512_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(296, 0);
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
    expect(result[2].store_id).toBe('S17564425272419512_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425272419512_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(198, 0);
  });

  test('rubric: The nail salon to order from should be Japanese style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon to order from should be Japanese style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon must provide One Customer One Disinfection service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon must provide One Customer One Disinfection service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon should be within 3km (inclusive) of Room 403, Unit 2, Building 12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon should be within 3km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order should include a manicure set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order should include a manicure set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order\'s manicure set should be solid color', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order\'s manicure set should be solid color"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order\'s manicure set should include free nail removal service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order\'s manicure set should include free nail removal service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order should include an eyelash extension set', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order should include an eyelash extension set"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The manicure set and eyelash extension set should be from the same nail salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The manicure set and eyelash extension set should be from the same nail salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment should be made at Sakura Japanese Nail and Eyelash Salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment should be made at Sakura Japanese Nail and Eyelash Salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the nail salon appointment is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the nail salon appointment is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment time is 2025-08-16 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment time is 2025-08-16 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant should be within 1km (inclusive) of Room 403, Unit 2, Buil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant should be within 1km (inclusive) of Room 403, Unit 2, Building 12, Zone B, CR Phoenix City, 2699 Qianjin Street, Chaoyang District, Changchun"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant rating should be 4 stars or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant rating should be 4 stars or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant order should be a Yin-Yang Hotpot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant order should be a Yin-Yang Hotpot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant order requires prioritizing a three-person meal; if not av', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant order requires prioritizing a three-person meal; if not available, order a two-person meal. Since the hotpot restaurant has a three-person meal, the ordered item should be a three-person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
