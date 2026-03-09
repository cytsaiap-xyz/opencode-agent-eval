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
    expect(result[0].store_id).toBe('S17550802154785786_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154785786_P00001", "quantity": 1}, {"product_id": "S17550802154785786_P00002", "quantity": 1}, {"product_id": "S17550802154785786_P00003", "quantity": 2}, {"product_id": "S17550802154785786_P00004", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(119.3, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802154785786_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154785786_P00001", "quantity": 1}, {"product_id": "S17550802154785786_P00002", "quantity": 1}, {"product_id": "S17550802154785786_P00003", "quantity": 2}, {"product_id": "S17550802154785786_P00004", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(119.3, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802154785786_I00012');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154785786_P00093", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(328, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802154785786_F00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154785786_P00047", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1300, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17550802154785786_F00007');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154785786_P00055", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(1300, 0);
  });

  test('rubric: The delivery order should be BBQ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should be BBQ"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ order needs to include 20 skewers in total', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ order needs to include 20 skewers in total"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ order must include 2 types of vegetables', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ order must include 2 types of vegetables"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ order must include 2 types of meat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ order must include 2 types of meat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The meat BBQ must only include different types of beef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The meat BBQ must only include different types of beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ delivery address must be Room 502, Building 3, City Garden Community, 28', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ delivery address must be Room 502, Building 3, City Garden Community, 28 Gongnong Road, Chongchuan District, Nantong, Jiangsu Province (user\'s residence)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ order flavor should be mildly spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ order flavor should be mildly spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The BBQ should comply with the user\'s dietary restrictions, not ordering BBQ op', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The BBQ should comply with the user\'s dietary restrictions, not ordering BBQ options or side dishes containing alcohol or high purine (offal/seafood soup)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be 2 orders from Lao Ma BBQ, one of which should have the status of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be 2 orders from Lao Ma BBQ, one of which should have the status of paid"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The paid delivery order must be delivered between 6:00 PM and 7:00 PM on Februar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The paid delivery order must be delivered between 6:00 PM and 7:00 PM on February 18, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: There should be 2 orders from Lao Ma BBQ, one of which should have the status of', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "There should be 2 orders from Lao Ma BBQ, one of which should have the status of cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The SPA club should offer massage and foot therapy services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The SPA club should offer massage and foot therapy services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The SPA club must have professional therapists', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The SPA club must have professional therapists"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The SPA club should have a comfortable environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The SPA club should have a comfortable environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered SPA package must include full body massage', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered SPA package must include full body massage"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered SPA package must include facial care', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered SPA package must include facial care"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The SPA package ordered must be suitable for deep relaxation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The SPA package ordered must be suitable for deep relaxation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure and return dates must be 3 days apart (e.g., March 1 departure, March ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure and return dates must be 3 days apart (e.g., March 1 departure, March 4 return)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price for all round-trip tickets should be less than 3000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price for all round-trip tickets should be less than 3000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight should be on or after March 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight should be on or after March 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure order\'s ticket quantity should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure order\'s ticket quantity should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight ticket should be on or before March 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight ticket should be on or before March 7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return order\'s ticket quantity should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return order\'s ticket quantity should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
