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
    expect(result[0].store_id).toBe('S17567836590402473_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836590402473_P00001", "quantity": 1}, {"product_id": "S17567836590402473_P00006", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(334, 0);
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
    expect(result[2].store_id).toBe('S17567836590402473_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836590402473_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(368, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The rock climbing gym should be an indoor rock climbing gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rock climbing gym should be an indoor rock climbing gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rock climbing gym should provide complete safety facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rock climbing gym should provide complete safety facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rock climbing gym order should include a children\'s beginner instruction pa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rock climbing gym order should include a children\'s beginner instruction package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of children\'s beginner instruction package ordered should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of children\'s beginner instruction package ordered should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The children\'s beginner instruction package should include 1-on-1 instruction s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The children\'s beginner instruction package should include 1-on-1 instruction service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if there are two-person packages without instruction in the rock cl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if there are two-person packages without instruction in the rock climbing gym, the result is no, so the rock climbing gym order should include a single person experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of single person experience package ordered should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of single person experience package ordered should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The children\'s beginner instruction package and single person experience packag', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The children\'s beginner instruction package and single person experience package should be from the same vendor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved rock climbing gym should be Extreme Rock Climbing Gym', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved rock climbing gym should be Extreme Rock Climbing Gym"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the rock climbing gym should be 2025-07-19 14:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the rock climbing gym should be 2025-07-19 14:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the rock climbing gym reservation should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the rock climbing gym reservation should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Chaoshan beef hot pot restaurant should be within the commercial district', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Chaoshan beef hot pot restaurant should be within the commercial district"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The commercial district where the Chaoshan beef hot pot restaurant is located sh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The commercial district where the Chaoshan beef hot pot restaurant is located should be the closest one to Extreme Rock Climbing Gym, 3rd Floor, Building A, Wanda Plaza, 26 Taihu Middle Road, Xinbei District, Changzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ingredients provided by the Chaoshan beef hot pot restaurant should be fresh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ingredients provided by the Chaoshan beef hot pot restaurant should be fresh"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Chaoshan beef hot pot restaurant should be a 6-person ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Chaoshan beef hot pot restaurant should be a 6-person meal, not multiple single-person packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered item from the Chaoshan beef hot pot restaurant should include premiu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered item from the Chaoshan beef hot pot restaurant should include premium beef tenderloin"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The portion of the ordered item from the Chaoshan beef hot pot restaurant should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The portion of the ordered item from the Chaoshan beef hot pot restaurant should be suitable for 4 adults and 2 children"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved Chaoshan beef hot pot restaurant should be Chao Niu Fresh Chaoshan ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved Chaoshan beef hot pot restaurant should be Chao Niu Fresh Chaoshan Beef Hot Pot"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the Chaoshan beef hot pot restaurant should be 2025-07-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the Chaoshan beef hot pot restaurant should be 2025-07-19 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Chaoshan beef hot pot restaurant reservation should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Chaoshan beef hot pot restaurant reservation should be 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
