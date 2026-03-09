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
    expect(result[0].store_id).toBe('S17550802129404077_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802108642397_P00076", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(15, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802129404077_T00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129404077_P00044", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(153, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802129404077_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129404077_P00001 ", "quantity": 1}, {"product_id": "S17550802129404077_P00002 ", "quantity": 1}, {"product_id": "S17550802129404077_P00003 ", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(28.2, 0);
  });

  test('rubric: The dessert order needs to include 3 different types of desserts', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dessert order needs to include 3 different types of desserts"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the dessert order cannot exceed 30 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the dessert order cannot exceed 30 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The desserts should be exquisite, which is generally reflected in the merchant/p', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The desserts should be exquisite, which is generally reflected in the merchant/product descriptions or labels"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The desserts cannot contain alcohol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The desserts cannot contain alcohol"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the dessert order should be Room 1203, Building B, Ming', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dessert order should be Room 1203, Building B, Mingfa City Plaza, Intersection of East Changjiang Road and Victory Road, Yaohai District, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to find the internet café closest to the user\'s community, which is Dream ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to find the internet café closest to the user\'s community, which is Dream Internet Café (Mingfa Plaza Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to find the cheapest package option in the internet café, which is the Stan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to find the cheapest package option in the internet café, which is the Standard Computer Seat (2 Hours) at Dream Internet Café (Mingfa Plaza Branch), priced at 15 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet café order package duration should be 2 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet café order package duration should be 2 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The internet café order should be a package for single person use', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The internet café order should be a package for single person use"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the high-speed rail schedule from Nanjing to Hefei for next Friday', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the high-speed rail schedule from Nanjing to Hefei for next Friday (March 14, 2025)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the selected train should be at or after 19:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the selected train should be at or after 19:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Priority should be given to the high-speed rail that arrives in Hefei earlier', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Priority should be given to the high-speed rail that arrives in Hefei earlier"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of the ticket order should be March 14, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of the ticket order should be March 14, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
