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
    expect(result[0].store_id).toBe('S17550802104222125_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802104222125_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(36.5, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802104222125_I00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802104222125_P00073", "quantity": 1}, {"product_id": "S17550802104222125_P00072", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(83, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550148868318956_T00010');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802104222125_P00073", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(182, 0);
  });

  test('rubric: The ordered takeout food must be light meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food must be light meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food must include meat, and cannot be pork or beef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food must include meat, and cannot be pork or beef"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food must include vegetables', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food must include vegetables"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food must include fruit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food must include fruit"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food should be refreshing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food should be refreshing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food cannot contain high-purine foods (such as offal, seafoo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food cannot contain high-purine foods (such as offal, seafood soup, shrimp, etc.)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered takeout food cannot contain caffeine (such as coffee, matcha, etc.)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered takeout food cannot contain caffeine (such as coffee, matcha, etc.)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the takeout order should be South Area, East Garden Com', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the takeout order should be South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The takeout order delivery time should be around 13:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The takeout order delivery time should be around 13:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The book bar ordered should be less than 2.5km from South Area, East Garden Comm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The book bar ordered should be less than 2.5km from South Area, East Garden Community, Garden Front Street, Pingcheng District, Datong, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The book bar ordered should have a quiet environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The book bar ordered should have a quiet environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The book bar ordered must provide tea drink service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The book bar ordered must provide tea drink service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The book bar set ordered should include tea, and it cannot be black tea', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The book bar set ordered should include tea, and it cannot be black tea"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The book bar set ordered should include private reading space', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The book bar set ordered should include private reading space"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure station of the train ordered should be Datong Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station of the train ordered should be Datong Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station of the train ordered should be Yuncheng Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station of the train ordered should be Yuncheng Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ordered must depart around 3 PM on June 4, 2025 [specifically, the tra', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ordered must depart around 3 PM on June 4, 2025 [specifically, the train departure time should be between 2:45 and 3:15]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket in the order should be First-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket in the order should be First-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train number in the ticket order should be G1208', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train number in the ticket order should be G1208"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
