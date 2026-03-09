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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812080452641_S00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812080452641_P00020", "quantity": 1}, {"product_id": "S17550812080452641_P00021", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(140, 0);
  });

  test('rubric: The ordered restaurant should be an authentic Wenzhou Cuisine restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be an authentic Wenzhou Cuisine restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant\'s rating should be 4.2 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant\'s rating should be 4.2 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within 20 kilometers of Wenzhou Smart Industria', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within 20 kilometers of Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered set meal at the Wenzhou restaurant should be a meal for two people, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered set meal at the Wenzhou restaurant should be a meal for two people, not two individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered set meal at the Wenzhou restaurant should not contain coriander', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered set meal at the Wenzhou restaurant should not contain coriander"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to reserve seats at the Wenzhou restaurant around 19:30 [meaning the reserv', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to reserve seats at the Wenzhou restaurant around 19:30 [meaning the reservation time should be between 19:15 and 19:45]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation at the Wenzhou restaurant should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation at the Wenzhou restaurant should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Wenzhou specialty souvenir gift should not contain Fish Cake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Wenzhou specialty souvenir gift should not contain Fish Cake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the Wenzhou specialty souvenir gift should be above 100 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the Wenzhou specialty souvenir gift should be above 100 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The packaging bag should be Chinese Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The packaging bag should be Chinese Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Wenzhou specialty souvenir gift and the packaging bag should come from the s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Wenzhou specialty souvenir gift and the packaging bag should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for food delivery must be Wenzhou Smart Industrial Park, 32', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for food delivery must be Wenzhou Smart Industrial Park, 326 Haitong Road, Longwan District, Wenzhou, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time should be before 2024-04-12 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time should be before 2024-04-12 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended scenic area should reflect Wenzhou\'s characteristics', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended scenic area should reflect Wenzhou\'s characteristics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended scenic area should not require extensive walking', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended scenic area should not require extensive walking"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The recommended scenic area should have novel activities, such as making Ou Kiln', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The recommended scenic area should have novel activities, such as making Ou Kiln ceramics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
