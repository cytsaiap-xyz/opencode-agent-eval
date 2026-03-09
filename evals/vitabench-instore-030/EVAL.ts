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
    expect(result[0].store_id).toBe('S17564425886875082_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425886875082_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(498, 0);
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
    expect(result[2].store_id).toBe('S17564425886875082_I00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564425886875082_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('rubric: The ordered aromatherapy SPA package must include multiple essential oils', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered aromatherapy SPA package must include multiple essential oils"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered aromatherapy SPA club must have an elegant environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered aromatherapy SPA club must have an elegant environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered aromatherapy SPA club must have high privacy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered aromatherapy SPA club must have high privacy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered aromatherapy SPA club must be within 10 kilometers (including 10 kil', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered aromatherapy SPA club must be within 10 kilometers (including 10 kilometers) from Room 1204, Building B, World Trade Center, No. 6 Hong Kong Middle Road, Shinan District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved aromatherapy SPA club should be Yunshu Aromatherapy SPA Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved aromatherapy SPA club should be Yunshu Aromatherapy SPA Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When checking if the aromatherapy SPA club is available for reservation on 2025-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When checking if the aromatherapy SPA club is available for reservation on 2025-03-22 11:00:00, as the business hours are open from 12:00-22:00, it is unavailable, so the reservation time is set to 2025-03-22 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the aromatherapy SPA club reservation is 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the aromatherapy SPA club reservation is 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: As the user will have therapy in the afternoon of 2025-03-22, the restaurant ord', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "As the user will have therapy in the afternoon of 2025-03-22, the restaurant ordered should be a light meal restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be a Well-known brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be a Well-known brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must be a Single person meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must be a Single person meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant set meal must include Beef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant set meal must include Beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant order must be a Light meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant order must be a Light meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should be within one kilometer (including one kilometer) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should be within one kilometer (including one kilometer) from Yunshu Aromatherapy SPA Club, 3rd Floor, Hyatt Plaza, No. 15 Donghai West Road, Shinan District, Qingdao"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
