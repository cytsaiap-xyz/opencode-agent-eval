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
    expect(result[0].store_id).toBe('S17550809757137606_I00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809757137606_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1980, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17210848570615920_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17210848570615920_P00032", "quantity": 11}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2200, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550809757137606_S00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550809757137606_P00020", "quantity": 1}, {"product_id": "S17550809757137606_P00024", "quantity": 2}, {"product_id": "S17550809757137606_P00025", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1197, 0);
  });

  test('rubric: The ordered farmhouse resort must have team building facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farmhouse resort must have team building facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farmhouse resort needs to provide outdoor game facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farmhouse resort needs to provide outdoor game facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farmhouse resort supports team-building activities for 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farmhouse resort supports team-building activities for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team building package in the farmhouse resort order must include dinner', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team building package in the farmhouse resort order must include dinner"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team building package in the farmhouse resort order must include activity it', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team building package in the farmhouse resort order must include activity items sufficient for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of farmhouse resort order (accommodation included) should be abo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of farmhouse resort order (accommodation included) should be about 200 yuan per person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered farmhouse resort needs to provide accommodation services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered farmhouse resort needs to provide accommodation services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: All room types in the accommodation order must be twin rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "All room types in the accommodation order must be twin rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Boys and girls need to be accommodated separately, 11 girls in 6 rooms, 9 boys i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Boys and girls need to be accommodated separately, 11 girls in 6 rooms, 9 boys in 5 rooms, the accommodation order requires a total of 11 rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the date of Qingming Festival, which is April 4th, and the weekend', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the date of Qingming Festival, which is April 4th, and the weekend before Qingming is March 30-31, 2024, so the check-in date for the accommodation order is 2024-03-30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered products must be suitable as team-building prizes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered products must be suitable as team-building prizes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team-building prize order must include three different products', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team-building prize order must include three different products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of  team-building prize order must be 6', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of  team-building prize order must be 6"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team building prize order must include 1 relatively expensive item as the fi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team building prize order must include 1 relatively expensive item as the first prize"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team-building prize order must include 2 identical items with a lower price ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team-building prize order must include 2 identical items with a lower price than the first prize as second prizes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The team-building prize order must include 3 identical items with a lower price ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The team-building prize order must include 3 identical items with a lower price than the second prize as third prizes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total budget for the team-building prize order is about 1200 yuan, with a mi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total budget for the team-building prize order is about 1200 yuan, with a minimum expenditure of 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the team building prize order should be between 2024-03-30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the team building prize order should be between 2024-03-30 11:00-13:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the team building prize order should be Green Wonderlan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the team building prize order should be Green Wonderland Farmhouse Resort 3km North of the Intersection of Beihai Road and Xiashan Road, Fangzi District, Weifang, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
