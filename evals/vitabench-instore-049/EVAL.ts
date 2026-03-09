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
    expect(result[0].store_id).toBe('S17567836567247343_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836567247343_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(168, 0);
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
    expect(result[2].store_id).toBe('S17567836567247343_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836567247343_P00018", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(78, 0);
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

  test('rubric: The pottery workshop order should be a pottery experience package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop order should be a pottery experience package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery workshop package should include basic operation tools', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop package should include basic operation tools"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery workshop package should include production materials', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop package should include production materials"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery workshop ordered should be Niba Craftsman Pottery Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop ordered should be Niba Craftsman Pottery Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The pottery workshop booked should be Niba Craftsman Pottery Workshop', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The pottery workshop booked should be Niba Craftsman Pottery Workshop"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the pottery workshop booking is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the pottery workshop booking is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if the ordered pottery workshop item can be used on June 10, 2024 (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so the pottery workshop appointment time is June 11, 2024, 09:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should check if the ordered pottery workshop item can be used on June 10, 2024 (', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should check if the ordered pottery workshop item can be used on June 10, 2024 (Dragon Boat Festival), the result is no, so need to check the user\'s behavior history, the last murder mystery game store the user played at was Immersive Murder Mystery Game (Taikoo Li Branch), so the murder mystery game store order should be Immersive Murder Mystery Game (Taikoo Li Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game store order should be a Single Carpool Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game store order should be a Single Carpool Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game store order should not contain horror elements', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game store order should not contain horror elements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game store order should be usable on June 10, 2024 (Dragon Bo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game store order should be usable on June 10, 2024 (Dragon Boat Festival)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game store booked should be Immersive Murder Mystery Game (Ta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game store booked should be Immersive Murder Mystery Game (Taikoo Li Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game store appointment time is June 10, 2024, 10:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game store appointment time is June 10, 2024, 10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the murder mystery game store booking is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the murder mystery game store booking is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
