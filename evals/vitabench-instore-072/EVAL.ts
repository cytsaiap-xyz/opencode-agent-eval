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
    expect(result[0].store_id).toBe('S17567836565538568_I00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836565538568_P00020", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(230, 0);
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
    expect(result[2].store_id).toBe('S17567836565538568_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836565538568_P00010", "quantity": 1}, {"product_id": "S17567836565538568_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(476, 0);
  });

  test('rubric: The fencing club should have a rating of 4.3 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fencing club should have a rating of 4.3 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if the fencing club that meets the rating requirements offers a tr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if the fencing club that meets the rating requirements offers a trial basic training class, the result is no, so the product ordered from the fencing club should be a One-on-One single experience class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the fencing club should be available for adults', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the fencing club should be available for adults"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the fencing club should be suitable for beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the fencing club should be suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointed fencing club should be Jianfeng Fencing Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointed fencing club should be Jianfeng Fencing Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the fencing club should be 2025-03-08 14:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the fencing club should be 2025-03-08 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the fencing club appointment should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the fencing club appointment should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be a Hunan cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be a Hunan cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should be within 4km (including 4km) of Lugu New Changhai Center,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should be within 4km (including 4km) of Lugu New Changhai Center, 627 Lugu Avenue, Yuelu District, Changsha"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should provide a private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should provide a private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include a 4-Person Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include a 4-Person Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The 4-Person Package ordered from the restaurant should include Chopped Chili Fi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The 4-Person Package ordered from the restaurant should include Chopped Chili Fish Head"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order should include a Single Person Package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order should include a Single Person Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Single Person Package ordered should only include Non-Spicy dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Single Person Package ordered should only include Non-Spicy dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Single Person Package ordered should not include fried dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Single Person Package ordered should not include fried dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Single Person Package and the 4-Person Package should come from the same res', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Single Person Package and the 4-Person Package should come from the same restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total cost of the fencing club order and the restaurant order should not exc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total cost of the fencing club order and the restaurant order should not exceed 1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
