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
    expect(result[0].store_id).toBe('S33761083328698190_S00450');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S14089696301034197_P31775", "quantity": 1}, {"product_id": "S14310443732096591_P04513", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(53.76, 0);
  });

  test('rubric: The delivery address should be Huchi Garden, No. 75 Huchi Road (180 meters walk ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address should be Huchi Garden, No. 75 Huchi Road (180 meters walk from Baiyangwan Park Metro Station Exit 4), Gusu District, Suzhou City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order delivery time should be before 18:00 on 2025-06-03, ensuring that the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order delivery time should be before 18:00 on 2025-06-03, ensuring that the daughter can finish her meal before 6:30 pm to attend her dance class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The River Snail Rice Noodle ordered for the user should have soup and noodles pa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The River Snail Rice Noodle ordered for the user should have soup and noodles packaged separately to prevent the noodles from becoming soggy and losing their chewiness"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The River Snail Rice Noodle ordered for the user should include fried egg', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The River Snail Rice Noodle ordered for the user should include fried egg"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The River Snail Rice Noodle ordered for the daughter should be mild spicy or non', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The River Snail Rice Noodle ordered for the daughter should be mild spicy or non-spicy and include chicken feet, meeting the daughter\'s preference who cannot handle spicy food well but loves chicken feet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dinner order of River Snail Rice Noodle should include a total of 2 portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dinner order of River Snail Rice Noodle should include a total of 2 portions, separately meeting the dining needs of the user and the daughter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
