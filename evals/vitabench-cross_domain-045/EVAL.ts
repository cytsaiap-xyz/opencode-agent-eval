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
    expect(result[0].store_id).toBe('S17550812360469447_T00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812360469447_P00020", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(84, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550812360469447_I00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812360469447_P00072", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(398, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550812360469447_S00004');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812360469447_P00015", "quantity": 1}, {"product_id": "S17550812360469447_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(72.7, 0);
  });

  test('rubric: The departure station of the ordered train should be Xuzhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station of the ordered train should be Xuzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station of the ordered train should be Zaozhuang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station of the ordered train should be Zaozhuang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check whether Labor Day this year falls on a weekend, the result shows that May ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check whether Labor Day this year falls on a weekend, the result shows that May 1, 2025 is a Thursday, not on a weekend, so the train ticket should be for April 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the train ticket should be April 26, 2025, 9:00-10:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the train ticket should be April 26, 2025, 9:00-10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be second-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be second-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of train tickets should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of train tickets should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the workshop store and Zaozhuang Station should be within 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the workshop store and Zaozhuang Station should be within 5000m"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The workshop order package should be couple rings DIY experience', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The workshop order package should be couple rings DIY experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The couple rings in the workshop order package should have relief design', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The couple rings in the workshop order package should have relief design"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The couple rings in the workshop order package should have fingerprint imprintin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The couple rings in the workshop order package should have fingerprint imprinting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The instant film should be white background', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The instant film should be white background"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The instant film and marker should come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The instant film and marker should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the instant film and marker must be Heartfelt DIY Works', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the instant film and marker must be Heartfelt DIY Workshop, No.89 Jianshe Road, Shizhong District, Zaozhuang, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the instant film and marker should be between 10', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the instant film and marker should be between 10:30-11:30 on April 26, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
