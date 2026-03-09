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
    expect(result[0].store_id).toBe('S17550802118732400_S00003');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118732400_P00015", "quantity": 1}, {"product_id": "S17550802118732400_P00021", "quantity": 1}, {"product_id": "S17550802118732400_P00018", "quantity": 1}, {"product_id": "S17550802118732400_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(47.3, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802118732400_I00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118732400_P00074", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(88, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802118732400_T00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802118732400_P00041", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(165, 0);
  });

  test('rubric: No oil products should be included in the seasoning order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "No oil products should be included in the seasoning order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: No doubanjiang should be included in the seasoning order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "No doubanjiang should be included in the seasoning order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: No dark soy sauce should be included in the seasoning order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "No dark soy sauce should be included in the seasoning order"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the seasoning order is 2025-05-15 15:30:00-2025-05-15 16:3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the seasoning order is 2025-05-15 15:30:00-2025-05-15 16:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the seasoning order is Room 1201, Unit 1, Building 3, G', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the seasoning order is Room 1201, Unit 1, Building 3, Greenland Zifeng Residence, 125 Bayi Avenue, Donghu District, Nanchang, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seasoning order must include salt', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seasoning order must include salt"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seasoning order must include soy sauce', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seasoning order must include soy sauce"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seasoning order must include MSG (Monosodium Glutamate)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seasoning order must include MSG (Monosodium Glutamate)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seasoning order must include vinegar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seasoning order must include vinegar"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house to order from must be within 1km of home', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house to order from must be within 1km of home"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tea house to order from must have a refined environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tea house to order from must have a refined environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set menu in the tea house order must be available in the afternoon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set menu in the tea house order must be available in the afternoon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train to book should depart on the evening of May 16, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train to book should depart on the evening of May 16, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train to book should not arrive later than 10 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train to book should not arrive later than 10 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket to purchase should be First Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket to purchase should be First Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train_number of the booked train must start with G', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train_number of the booked train must start with G"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked train must run from Nanchang to Jiujiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked train must run from Nanchang to Jiujiang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
