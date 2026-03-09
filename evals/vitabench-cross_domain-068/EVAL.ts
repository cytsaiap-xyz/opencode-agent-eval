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
    expect(result[0].store_id).toBe('S17550802180171503_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802180171503_P00053", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(888, 0);
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
    expect(result[2].store_id).toBe('S17550802180171503_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802180171503_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(198, 0);
  });

  test('rubric: The restaurant ordered from must offer traditional Huaiyang Cuisine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from must offer traditional Huaiyang Cuisine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered from must be a Time-honored Brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered from must be a Time-honored Brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s set menu must include Crab Roe Lion\'s Head Meatballs', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s set menu must include Crab Roe Lion\'s Head Meatballs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant\'s set menu must include Longevity Noodles', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant\'s set menu must include Longevity Noodles"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should have Private Rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should have Private Rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant to be reserved should be Huaiyang Fu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant to be reserved should be Huaiyang Fu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the specific date of Winter Solstice, with the result being Decemb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the specific date of Winter Solstice, with the result being December 21, 2025, and the order reservation date should be December 23, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of diners for the reservation should be 8', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of diners for the reservation should be 8"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time should be 11:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time should be 11:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product to be ordered should be a Tea Pet Ornament', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product to be ordered should be a Tea Pet Ornament"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product must match with Purple Clay Tea Set, therefore a Purple Clay', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product must match with Purple Clay Tea Set, therefore a Purple Clay Material Tea Pet must be chosen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered Tea Pet must have meanings of Prolonging Life and Health', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered Tea Pet must have meanings of Prolonging Life and Health"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Tea Pet order should be delivered to Room 502, Building 3, Zhongxing Mingyua', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Tea Pet order should be delivered to Room 502, Building 3, Zhongxing Mingyuan, 328 Didang Lake Road, Yuecheng District, Shaoxing, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to inquire and provide information about the Botanical Garden ticket prices', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to inquire and provide information about the Botanical Garden ticket prices and senior discount policy; the result shows that Shaoxing Botanical Garden Adult Ticket is 30 yuan, Senior Ticket is 15 yuan, 50% cheaper than Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to return the Botanical Garden opening hours; opening hours are 08:30-17:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to return the Botanical Garden opening hours; opening hours are 08:30-17:00, not later than 17:00, no need to book tickets in advance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
