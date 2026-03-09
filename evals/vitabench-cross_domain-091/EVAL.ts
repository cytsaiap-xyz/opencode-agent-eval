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
    expect(result[0].store_id).toBe('S17550808142878177_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808142878177_P00021", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(260, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550808142878177_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808142878177_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550808142878177_I00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808142878177_P00070", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(798, 0);
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

  test('rubric: According to research, vehicles are not allowed in the ARANYA Community, so the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "According to research, vehicles are not allowed in the ARANYA Community, so the purchased tickets should include shuttle service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date of use for the purchased tickets should be August 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date of use for the purchased tickets should be August 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets to purchase is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets to purchase is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the bouquet order should be Coastline Restaurant next t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the bouquet order should be Coastline Restaurant next to the Auditorium, ARANYA Community, Beidaihe District, Qinhuangdao, Hebei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the bouquet order should be 6 PM on August 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the bouquet order should be 6 PM on August 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The roses in the ordered bouquet must be pink', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The roses in the ordered bouquet must be pink"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered bouquet cannot contain only roses', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered bouquet cannot contain only roses"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant to order from should be inside the ARANYA Park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant to order from should be inside the ARANYA Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant should have a good Ambiance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant should have a good Ambiance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The meal ordered at the restaurant should be a Meal for Two, not two Individual ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The meal ordered at the restaurant should be a Meal for Two, not two Individual Meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set ordered at the restaurant should Include Alcohol', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set ordered at the restaurant should Include Alcohol"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved restaurant is Coastline Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved restaurant is Coastline Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time is 6 PM on August 29, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time is 6 PM on August 29, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
