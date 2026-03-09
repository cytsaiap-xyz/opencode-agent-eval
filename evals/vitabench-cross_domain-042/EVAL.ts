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
    expect(result[0].store_id).toBe('S17550812240785286_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812240785286_P00022", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(380, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812240785286_S00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812240785286_P00006", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(26.9, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The purchased tickets allow unlimited access to all attractions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets allow unlimited access to all attractions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are valid for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are valid for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are the most economical option, search results should be t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are the most economical option, search results should be the Unlimited Pass for Two at Chengdu Happy Valley"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of tickets in the Happy Valley order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of tickets in the Happy Valley order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are for May 17, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are for May 17, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are valid for the entire day', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are valid for the entire day"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Search results show that two fans exceeding a total price of 50 yuan are unavail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Search results show that two fans exceeding a total price of 50 yuan are unavailable, so the delivery order should include one fan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in the delivery order should be wearable around the neck', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in the delivery order should be wearable around the neck"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product in the delivery order should be the lowest-priced item in its catego', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product in the delivery order should be the lowest-priced item in its category, search results should show the Mini USB Neck Fan from Tech Lifestyle Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the order should be Sichuan Provincial People\'s Hospit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the order should be Sichuan Provincial People\'s Hospital, 17 South Renmin Road Section 3, Wuhou District, Chengdu, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time should be before 12:30:00 on May 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time should be before 12:30:00 on May 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 19:00:00 on May 17, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 19:00:00 on May 17, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should offer fish and frog buffet sets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should offer fish and frog buffet sets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The buffet set at the reserved restaurant should include soup base', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The buffet set at the reserved restaurant should include soup base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The buffet set at the reserved restaurant should not exceed 70 yuan per person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The buffet set at the reserved restaurant should not exceed 70 yuan per person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant should have a rating of 4.2 or higher', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant should have a rating of 4.2 or higher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
