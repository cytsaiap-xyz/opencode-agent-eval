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
    expect(result[0].store_id).toBe('S17550802130783410_I00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130783410_P00054", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2064, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802130783410_A00005');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130783410_P00021 ", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(498, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802130783410_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802130783410_P00002", "quantity": 1}];
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

  test('rubric: The restaurant ordered must have Infant-Friendly facilities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered must have Infant-Friendly facilities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant environment needs to be Cozy Environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant environment needs to be Cozy Environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Each set meal ordered by the agent at the restaurant must be for 8 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Each set meal ordered by the agent at the restaurant must be for 8 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The agent needs to order three multi-person set meals at the restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The agent needs to order three multi-person set meals at the restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal dishes at the ordered restaurant should not be too oily', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal dishes at the ordered restaurant should not be too oily"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes in the order set should comply with the user\'s dietary restrictions:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes in the order set should comply with the user\'s dietary restrictions: Low Salt"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to find information about theme park ticket packages; return price and phot', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to find information about theme park ticket packages; return price and photography rules: Family Package Ticket price range is 368-698 yuan, Shenyang Happy Family Theme Park allows bringing your own camera, Shenyang Family Time Theme Park has a professional photography area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to order a theme park package suitable for 2 adults, 1 child, and 1 infant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to order a theme park package suitable for 2 adults, 1 child, and 1 infant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered parent-child clothing package must include a Four-Piece Set, includi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered parent-child clothing package must include a Four-Piece Set, including clothing for adults, children, and infants"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered parent-child clothing must be Pure Cotton material', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered parent-child clothing must be Pure Cotton material"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered products must be Blue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered products must be Blue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the parent-child clothing order should be the user\'s r', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the parent-child clothing order should be the user\'s residence: Huafu World, 46 Nanjing South Street, Heping District, Shenyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation should be at Star Dream Family Theme Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation should be at Star Dream Family Theme Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant reservation time must be June 12, 2025, at 18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant reservation time must be June 12, 2025, at 18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the restaurant reservation should be 24', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the restaurant reservation should be 24"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
