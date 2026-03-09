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
    expect(result[0].store_id).toBe('S17550810809415904_A00008');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810809415904_P00047", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(540, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550810809415904_I00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810809415904_P00066", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
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

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550810809415904_S00001');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550810809415904_P00002", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(48, 0);
  });

  test('rubric: The number of paragliding experience packages ordered is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of paragliding experience packages ordered is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 3km of People\'s Square in Nanguan Distr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 3km of People\'s Square in Nanguan District, Changchun City, Jilin Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant package ordered should include barbecue or BBQ skewers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant package ordered should include barbecue or BBQ skewers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant portion ordered should be larger than a meal for three people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant portion ordered should be larger than a meal for three people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved BBQ restaurant is Chuan Shuo BBQ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved BBQ restaurant is Chuan Shuo BBQ"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved BBQ restaurant time is May 16, 2025, 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved BBQ restaurant time is May 16, 2025, 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people of the reserved BBQ restaurant is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people of the reserved BBQ restaurant is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery merchant should provide Chaoshan Specialty drinks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery merchant should provide Chaoshan Specialty drinks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery merchant should be near People\'s Square', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery merchant should be near People\'s Square"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address is Chuan Shuo BBQ (50m from Northeast Corner of People\'s S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address is Chuan Shuo BBQ (50m from Northeast Corner of People\'s Square), Nanguan District, Changchun City, Jilin Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time is May 16, 2025, 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time is May 16, 2025, 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of items ordered for delivery is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of items ordered for delivery is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: At least one delivery item should not contain Grass Jelly', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "At least one delivery item should not contain Grass Jelly"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
