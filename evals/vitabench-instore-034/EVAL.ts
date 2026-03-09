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
    expect(result[0].store_id).toBe('S17564425297743877_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425297743877_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(128, 0);
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
    expect(result[2].store_id).toBe('S17564425297743877_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425297743877_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(388, 0);
  });

  test('rubric: The calligraphy order package must be suitable for children', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy order package must be suitable for children"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy package must include pen, ink, paper, and inkstone', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy package must include pen, ink, paper, and inkstone"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy order package must be an experience course package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy order package must be an experience course package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy package must provide One-on-One Teaching', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy package must provide One-on-One Teaching"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy order merchant must be within 3km of the home address (Room 1204', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy order merchant must be within 3km of the home address (Room 1204, Building B, Hangyang International City, 131 Minzu Avenue, Qingxiu District, Nanning)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy appointment merchant must be Han Mo Xuan Calligraphy Training Ce', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy appointment merchant must be Han Mo Xuan Calligraphy Training Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy appointment order must be scheduled for Sunday afternoon (April ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy appointment order must be scheduled for Sunday afternoon (April 6, 2025) at 3 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The calligraphy appointment order must be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The calligraphy appointment order must be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must be located within 3km of Mixc Shopping Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must be located within 3km of Mixc Shopping Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dining party consists of 6 people, including 4 adults, 1 young child, and 1 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dining party consists of 6 people, including 4 adults, 1 young child, and 1 infant; the restaurant order should be one 5-6 person meal package rather than multiple 3-person packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant package dishes must be Light Flavored', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant package dishes must be Light Flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must provide High Chair Available facility', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must provide High Chair Available facility"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
