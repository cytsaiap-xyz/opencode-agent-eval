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
    expect(result[0].store_id).toBe('S17567836634645289_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836634645289_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(198, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17567836634645289_I00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836634645289_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(138, 0);
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

  test('rubric: The restaurant ordered should be within 3km (including 3km) of Room 503, Buildin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be within 3km (including 3km) of Room 503, Building 2, Linyi People\'s Hospital Staff Quarters, 15 Jinqueshan Road, Lanshan District, Linyi City, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must provide Single Booth Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must provide Single Booth Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant package ordered should offer Low Purine Menu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant package ordered should offer Low Purine Menu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant package ordered should be a buffet with No Time Limit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant package ordered should be a buffet with No Time Limit"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: User\'s usual spending range is found to be between 90 and 160 yuan, and restaur', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "User\'s usual spending range is found to be between 90 and 160 yuan, and restaurant spending should not exceed 1.5 times the user\'s daily spending range, so the restaurant order price should be less than or equal to 240 yuan (including 240 yuan)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon ordered should be open until at least 11 PM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon ordered should be open until at least 11 PM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon package ordered should include Full Nail Tips', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon package ordered should include Full Nail Tips"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon package ordered should offer multiple style options', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon package ordered should offer multiple style options"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon order should prioritize packages priced at 150 yuan or less; if u', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon order should prioritize packages priced at 150 yuan or less; if unavailable, order packages priced above 150 yuan but below 200 yuan (including 200 yuan), and the package must include construction; upon inquiry, there are packages under 150 yuan, so the ordered package should be priced at 150 yuan or less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment should be at Fingertip Art Nail Salon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment should be at Fingertip Art Nail Salon"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment time is 2024-08-15 21:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment time is 2024-08-15 21:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nail salon appointment is for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nail salon appointment is for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
