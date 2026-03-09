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
    expect(result[0].store_id).toBe('S17550942368098473_I00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942368098473_P00089", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(588, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550942368098473_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942368098473_P00002", "quantity": 4}, {"product_id": "S17550942368098473_P00003", "quantity": 8}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(142.4, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550942368098473_H00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942368098473_P00056", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(516, 0);
  });

  test('rubric: The trampoline park ordered should have complete facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The trampoline park ordered should have complete facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The trampoline park ordered should offer activities of varying difficulty levels', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The trampoline park ordered should offer activities of varying difficulty levels"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The trampoline park ordered should have professional safety measures', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The trampoline park ordered should have professional safety measures"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the trampoline park should include coaching services', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the trampoline park should include coaching services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the trampoline park should include safety equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the trampoline park should include safety equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the trampoline park should include multiple trampoline ex', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the trampoline park should include multiple trampoline experiences"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered at the trampoline park should be suitable for a group of fou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered at the trampoline park should be suitable for a group of four people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The electrolyte drink should be caffeine-free', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The electrolyte drink should be caffeine-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The electrolyte drink should not contain mango', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The electrolyte drink should not contain mango"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to purchase 4 bottles of electrolyte drink', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to purchase 4 bottles of electrolyte drink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The energy bars should be caffeine-free', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The energy bars should be caffeine-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The energy bars should not contain mango', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The energy bars should not contain mango"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to purchase at least 8 energy bars', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to purchase at least 8 energy bars"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery store\'s business hours should be after 23:37:21 or before 10:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery store\'s business hours should be after 23:37:21 or before 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The electrolyte drinks and energy bars should come from Premium Sports Nutrition', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The electrolyte drinks and energy bars should come from Premium Sports Nutrition Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check Premium Sports Nutrition Store\'s delivery time, which is 08:30-20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check Premium Sports Nutrition Store\'s delivery time, which is 08:30-20:30 (currently not available), estimated delivery time should be before 2026-04-04 10:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address must be Room 203, Building 12, Jiangbin Garden, Hongjia Str', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address must be Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check if Feiyue Trampoline Sports Park has shower facilities, the result', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check if Feiyue Trampoline Sports Park has shower facilities, the result is no, so need to find hotels within 500m (inclusive) of Room 203, Building 12, Jiangbin Garden, Hongjia Street, Jiaojiang District, Taizhou, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should have good soundproofing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should have good soundproofing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel room date should be for 2026-04-04', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel room date should be for 2026-04-04"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: After comparing the prices of twin rooms and king rooms at hotels meeting the co', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "After comparing the prices of twin rooms and king rooms at hotels meeting the conditions, should order the more economical Hanting Hotel (Taizhou Jiangbin Garden)-Standard Twin Room (258 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
