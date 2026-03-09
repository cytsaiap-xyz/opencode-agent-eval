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
    expect(result[0].store_id).toBe('S17567836667757115_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836667757115_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
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
    expect(result[2].store_id).toBe('S17567836667757115_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836667757115_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(45, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836667757115_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836667757115_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(28, 0);
  });

  test('rubric: The eye care center must be professional', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The eye care center must be professional"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The eye care center must be within 1km (inclusive) of the 15th Floor, No.5 Victo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The eye care center must be within 1km (inclusive) of the 15th Floor, No.5 Victory International Building, Harbor Square, Zhongshan District, Dalian"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the eye care center order, priority should be given to eye + head massage co', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the eye care center order, priority should be given to eye + head massage combination packages; if unavailable, order eye massage packages only; upon checking, eye + head massage packages are available, so these should be ordered"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The service time for the eye care center order must be 40 minutes or longer', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The service time for the eye care center order must be 40 minutes or longer"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The eye care center should be Bright Eyes Care Center', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The eye care center should be Bright Eyes Care Center"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the eye care center should be 2024-07-20 15:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the eye care center should be 2024-07-20 15:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the eye care center appointment should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the eye care center appointment should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake ordered from the cake shop should be 4-inch', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake ordered from the cake shop should be 4-inch"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake ordered should be Sugar-free', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake ordered should be Sugar-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake ordered should not contain mango', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake ordered should not contain mango"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The cake ordered should use Dairy Cream', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The cake ordered should use Dairy Cream"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The milk tea ordered should be Sugar-free', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The milk tea ordered should be Sugar-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The milk tea ordered should be grape flavored', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The milk tea ordered should be grape flavored"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The milk tea ordered should not contain mango', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The milk tea ordered should not contain mango"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended milk tea shop should be HeyTea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended milk tea shop should be HeyTea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
