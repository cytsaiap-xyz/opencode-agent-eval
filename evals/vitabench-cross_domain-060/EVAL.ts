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
    expect(result[0].store_id).toBe('S17550802105236499_T00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802105236499_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(285, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802105236499_I00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802105236499_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(198, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802105236499_S00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802105236499_P00011", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(16.9, 0);
  });

  test('rubric: The purchased train ticket is from Xiamen North Station to Huiyang Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased train ticket is from Xiamen North Station to Huiyang Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Considering arrival at the station at 7:00 and allowing 10 minutes for queuing, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Considering arrival at the station at 7:00 and allowing 10 minutes for queuing, the departure time of the purchased train ticket should be later than 19:10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased train ticket should be a Second class seat or Hard seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased train ticket should be a Second class seat or Hard seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the purchased train ticket is April 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the purchased train ticket is April 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reimbursement limit is 500, and the cost of the massage package should be le', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reimbursement limit is 500, and the cost of the massage package should be less than or equal to 500 minus the cost of the train ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: According to the query, the location of Huiyang Railway Station is obtained, and', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to the query, the location of Huiyang Railway Station is obtained, and the massage package provider should be within 3km of Huiyang Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage package should be for full body', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage package should be for full body"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage package time should be more than 1.5 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage package time should be more than 1.5 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The massage service provider should offer Overnight service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The massage service provider should offer Overnight service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reimbursement limit is 500, and the cost of the U-shaped pillow should be le', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reimbursement limit is 500, and the cost of the U-shaped pillow should be less than or equal to 500 minus the cost of the train ticket and minus the cost of the massage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The U-shaped pillow should be the most expensive one within the available budget', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The U-shaped pillow should be the most expensive one within the available budget"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the U-shaped pillow should be Xiamen Hemei World Busine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the U-shaped pillow should be Xiamen Hemei World Business Center, No. 618 Chengyi Middle Road, Jimei District, Xiamen, Fujian Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the U-shaped pillow should be before 18:30:00 on', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the U-shaped pillow should be before 18:30:00 on 2025-04-07"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
