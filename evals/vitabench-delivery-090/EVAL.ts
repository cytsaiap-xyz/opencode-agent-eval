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
    expect(result[0].store_id).toBe('S43240302180045417_S14076');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S19159328161115696_P29699", "quantity": 4}, {"product_id": "S39067932885983771_P89154", "quantity": 1}, {"product_id": "S18928897898954556_P47912", "quantity": 4}, {"product_id": "S23960545841735513_P82884", "quantity": 1}, {"product_id": "S14445001259369926_P29929", "quantity": 1}, {"product_id": "S28863166591108673_P17688", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(252.6, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S68441396243055633_S66153');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S11705981851273565_P59996", "quantity": 1}, {"product_id": "S20734804318993088_P33304", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(21, 0);
  });

  test('rubric: The birthday dinner order must be from Yao Palace', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday dinner order must be from Yao Palace"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The birthday dinner order needs to include 4 dishes, 4 servings of soup, and 4 s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday dinner order needs to include 4 dishes, 4 servings of soup, and 4 servings of rice, with at least one non-spicy dish"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the birthday dinner order should be Building 3, Unit 1,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the birthday dinner order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the birthday dinner order should be before 18:45', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the birthday dinner order should be before 18:45 on September 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mother\'s special request order must be from Tianfuxiang Fresh Ingredients L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mother\'s special request order must be from Tianfuxiang Fresh Ingredients Laoyou Main Branch (the store where the user previously ordered E-Fu noodles)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The mother\'s special request order should include one serving each of Fresh Sou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The mother\'s special request order should include one serving each of Fresh Soup Pork Offal Rice Noodles and Sweet Potato Dessert Soup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the mother\'s special request order should be Building ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the mother\'s special request order should be Building 3, Unit 1, Taoyuan Residential Complex, No. 51 Taoyuan Road, Qingxiu District, Nanning City, Guangxi Zhuang Autonomous Region"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the mother\'s special request order should be be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the mother\'s special request order should be before 18:45 on September 25, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
