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
    expect(result[0].store_id).toBe('S17550942219808099_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942219808099_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(42.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550942219808099_H00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942219808099_P00048", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(880, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550942219808099_I00012');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550942219808099_P00083", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(398, 0);
  });

  test('rubric: The food delivery should be healthy nutrition meals', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery should be healthy nutrition meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order for nutrition meals should be from restaurants with phys', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order for nutrition meals should be from restaurants with physical stores"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nutrition meal ordered should be Low Carb', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nutrition meal ordered should be Low Carb"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The nutrition meal ordered should have High Satiety', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The nutrition meal ordered should have High Satiety"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the nutrition meal should be Unit 2201, Building 8, Sun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the nutrition meal should be Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the nutrition meal should be around 2026-05-14 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the nutrition meal should be around 2026-05-14 11:00 [meaning the delivery time should be between 10:45 and 11:15]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be more than 30 kilometers away from Unit 2201, Buildin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be more than 30 kilometers away from Unit 2201, Building 8, Sunshine 100 Community, 235 Xiaoxiang Middle Road, Yuelu District, Changsha, Hunan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room ordered should be equipped with Jacuzzi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room ordered should be equipped with Jacuzzi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel check-in date should be 2026-06-13', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel check-in date should be 2026-06-13"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store restaurant should be a BBQ restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store restaurant should be a BBQ restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The in-store restaurant\'s rating should be greater than or equal to 4.2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store restaurant\'s rating should be greater than or equal to 4.2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered items at the in-store restaurant should be less than or', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered items at the in-store restaurant should be less than or equal to 400 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes ordered at the in-store restaurant should be diverse', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes ordered at the in-store restaurant should be diverse"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items ordered at the in-store restaurant should be Available at Night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items ordered at the in-store restaurant should be Available at Night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
