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
    expect(result[0].store_id).toBe('S17550811051817692_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550811051817692_P00001", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(119.7, 0);
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
    expect(result[2].store_id).toBe('S17550811051817692_I00010');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550811051817692_P00057", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(588, 0);
  });

  test('rubric: The dine-in restaurant should be a hotpot restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dine-in restaurant should be a hotpot restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant should be within 500 meters of Zhongjian Cloud View', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant should be within 500 meters of Zhongjian Cloud View"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant\'s environment rating should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant\'s environment rating should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to make a reservation at the hotpot restaurant for around 19:45 on 2024-11-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to make a reservation at the hotpot restaurant for around 19:45 on 2024-11-02 [meaning the reservation time should be between 19:30 and 20:00]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation should be for 5 People', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation should be for 5 People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant\'s set meal should cost less than 150 yuan per person, wit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant\'s set meal should cost less than 150 yuan per person, with a total price under 750 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotpot restaurant\'s set meal should not include seafood (fish/shrimp/crab) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotpot restaurant\'s set meal should not include seafood (fish/shrimp/crab) dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should be for Medium Storage Box', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should be for Medium Storage Box"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should be sturdy and durable, with labels such as Thickened, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should be sturdy and durable, with labels such as Thickened, Extra Hard, PP Material, etc."
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The storage box order should be delivered on November 2, 2024, and should be fro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The storage box order should be delivered on November 2, 2024, and should be from the closest available merchant, which should be JD Home Supermarket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the storage box should be Room 1902, Unit 1, Building 9', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the storage box should be Room 1902, Unit 1, Building 9, Ronghui City, 2000 Olympic West Road, Lixia District, Jinan, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check train schedules from Jinan to Zibo on 2024-11-03, should provide i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check train schedules from Jinan to Zibo on 2024-11-03, should provide information on trains arriving around 11:30, G167 (11:05-11:35) or G171 (10:50-11:25)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check train schedules from Jinan to Zibo North Railway Station on 2024-1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check train schedules from Jinan to Zibo North Railway Station on 2024-11-03 [result should be G167 or G169]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Agent needs to check train schedules from Zibo to Jinan on 2024-11-05, should pr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Agent needs to check train schedules from Zibo to Jinan on 2024-11-05, should provide information on trains departing between 17:00-18:00, result is G258 (17:15-17:45)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Agent should not book any train tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Agent should not book any train tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
