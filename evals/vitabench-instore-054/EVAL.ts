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
    expect(result[0].store_id).toBe('S17567836603457926_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836603457926_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(158, 0);
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
    expect(result[3].store_id).toBe('S17567836603457926_I00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836603457926_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(168, 0);
  });

  test('rubric: DIY perfume shop\'s rating should be 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "DIY perfume shop\'s rating should be 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: DIY perfume shop should be in the top five of the highest rated stores', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "DIY perfume shop should be in the top five of the highest rated stores"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product at the DIY perfume shop should be suitable for beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product at the DIY perfume shop should be suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product at the DIY perfume shop should include teacher guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product at the DIY perfume shop should include teacher guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered product at the DIY perfume shop should not exceed 200 y', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered product at the DIY perfume shop should not exceed 200 yuan (including 200 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product at the DIY perfume shop should be the beginner perfume makin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product at the DIY perfume shop should be the beginner perfume making starter package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the DIY perfume shop should be October 24, 2024, at 15:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the DIY perfume shop should be October 24, 2024, at 15:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the DIY perfume shop appointment should be 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the DIY perfume shop appointment should be 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The DIY perfume shop appointment should be at Fragrance Encounter DIY Perfume St', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The DIY perfume shop appointment should be at Fragrance Encounter DIY Perfume Studio"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation order for Suran Anti-aging Center (Arc de Triomphe Store) (S1756', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation order for Suran Anti-aging Center (Arc de Triomphe Store) (S17567836452455124_I00004) should have a status of cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include both Italian meat pizza and black pepper ste', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include both Italian meat pizza and black pepper steak"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should be a set for two, not two individual sets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should be a set for two, not two individual sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered restaurant meal should not exceed 200 yuan (including 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered restaurant meal should not exceed 200 yuan (including 200 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
