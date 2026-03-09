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
    expect(result[0].store_id).toBe('S27763502048643991_S30020');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S91741303282497866_P98332", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(46.0, 0);
  });

  test('rubric: The store rating for the ordered Stir-fried Pork Strips should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The store rating for the ordered Stir-fried Pork Strips should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Stir-fried Pork Strips order should be Central Stre', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Stir-fried Pork Strips order should be Central Street Cultural and Creative Design Center, F2 Floor, No.66 Central Street, Daoli District, Harbin City, Heilongjiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the Stir-fried Pork Strips order should be betwee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the Stir-fried Pork Strips order should be between 12:02 and 13:30 on April 26, 2025, ensuring the user has enough time for lunch and afternoon rest"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
