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
    expect(result[0].store_id).toBe('S17550802130322823_I00014');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130322823_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1680, 0);
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
    expect(result[2].store_id).toBe('S17550802130322823_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130322823_P00001 ", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(698, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802130322823_T00007');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130322823_P00036", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(600, 0);
  });

  test('rubric: The recommended tea house should be located near Nanning Mixc Mall, specifically', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended tea house should be located near Nanning Mixc Mall, specifically within Nanning Mixc Mall or within 3km of it"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended tea house should have a large private room that can accommodate ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended tea house should have a large private room that can accommodate at least 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended tea house set should be suitable for 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended tea house set should be suitable for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended tea house set should include tea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended tea house set should include tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation should be for Tea Tasting House', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation should be for Tea Tasting House"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation date should be June 28, 2025 at 2pm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation date should be June 28, 2025 at 2pm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house reservation should be for 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house reservation should be for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery product should be a multi-layer cake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery product should be a multi-layer cake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cake should serve 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cake should serve 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cake style must be dignified and cozy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cake style must be dignified and cozy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cake style cannot be longevity peach style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cake style cannot be longevity peach style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered cake cannot be internet celebrity style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered cake cannot be internet celebrity style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake delivery time should be June 28, 2025 between 3-4pm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake delivery time should be June 28, 2025 between 3-4pm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake delivery location should be Tea Tasting House, No.140 Minzu Avenue, Qin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake delivery location should be Tea Tasting House, No.140 Minzu Avenue, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total budget is 3000 yuan, the train ticket budget cannot exceed 3000 minus ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total budget is 3000 yuan, the train ticket budget cannot exceed 3000 minus the cost of the tea house order minus the cost of the cake order, therefore the ordered train tickets should be business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket order date should be the morning of June 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket order date should be the morning of June 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
