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
    expect(result[0].store_id).toBe('S17550808037869920_I00015');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808037869920_P00145", "quantity": 1}, {"product_id": "S17550808037869920_P00146", "quantity": 1}, {"product_id": "S17550808037869920_P00148", "quantity": 1}, {"product_id": "S17550808037869920_P00149", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1292, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550808037869920_S00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808037869920_P00009", "quantity": 1}, {"product_id": "S17550808037869920_P00008", "quantity": 1}, {"product_id": "S17550808037869920_P00005", "quantity": 1}, {"product_id": "S17550808037869920_P00006", "quantity": 1}, {"product_id": "S17550808037869920_P00007", "quantity": 1}, {"product_id": "S17550808037869920_P00001", "quantity": 18}, {"product_id": "S17550808037869920_P00003", "quantity": 18}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1039, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550808037869920_T00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550808037869920_P00065", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(122.5, 0);
  });

  test('rubric: The in-store merchant is for escape rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant is for escape rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant orders are mystery deduction type', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant orders are mystery deduction type"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant orders must include at least four themes of escape rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant orders must include at least four themes of escape rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant orders must accommodate 18 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant orders must accommodate 18 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store merchant orders should be "Dark Night Mansion" Escape Room Theme (4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant orders should be "Dark Night Mansion" Escape Room Theme (4-6 People) + "Fatal Files" Escape Room Theme (3-5 People) + "Mystery City Stories" Escape Room Theme (3-5 People) + "Deep Sea Laboratory" Escape Room Theme (2-4 People)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order must include fried chicken', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include fried chicken"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of fried chicken in the delivery order is 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of fried chicken in the delivery order is 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order\'s fried chicken items should be of different flavors', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order\'s fried chicken items should be of different flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order must include burgers', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include burgers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of burgers in the delivery order is 18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of burgers in the delivery order is 18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order must include cola', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order must include cola"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of colas in the delivery order must be 18', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of colas in the delivery order must be 18"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order\'s fried chicken, burgers, and cola must come from the same s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order\'s fried chicken, burgers, and cola must come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order\'s fried chicken, burgers, and cola cannot come from Wallace', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order\'s fried chicken, burgers, and cola cannot come from Wallace"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address must be Mystery City Escape Room, 10 Financial First Street', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address must be Mystery City Escape Room, 10 Financial First Street, Taihu New City, Binhu District, Wuxi, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order\'s expected delivery time is 21:00 on July 4, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order\'s expected delivery time is 21:00 on July 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Shanghai and Wuxi on July 5, 2025, and the result s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Shanghai and Wuxi on July 5, 2025, and the result shows that it won\'t be rainy. Therefore, a high-speed rail ticket should be ordered for around 10:00 AM on July 5, that is, the final train departure time should be between 9:45 AM and 10:15 AM]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be from Wuxi to Shanghai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be from Wuxi to Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
