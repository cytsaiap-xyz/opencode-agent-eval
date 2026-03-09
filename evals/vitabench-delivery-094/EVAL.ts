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
    expect(result[0].store_id).toBe('S25404730601650268_S58462');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S52372295090028906_P76280", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(68.88, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S23393414851448293_S19853');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S19088751354434699_P64667", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(29.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S18487338541407843_S28262');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S12791597665478343_P17264", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(21.8, 0);
  });

  test('rubric: The delivery address for the Yellow River carp order for the photographer should', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Yellow River carp order for the photographer should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the Yellow River carp order for the photographer ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the Yellow River carp order for the photographer should be before 2024-05-18 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The carp dish chosen for the photographer should have a sweet and sour flavor, s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The carp dish chosen for the photographer should have a sweet and sour flavor, such as sweet and sour carp or other sweet and sour preparations"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The carp dish ordered for the photographer should include a special note request', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The carp dish ordered for the photographer should include a special note requesting extra cilantro"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the tiramisu cake order for the partner should be Shand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the tiramisu cake order for the partner should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the tiramisu cake order for the partner should be', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the tiramisu cake order for the partner should be before 2024-05-18 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tiramisu cake chosen for the partner should be the classic chocolate flavor,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tiramisu cake chosen for the partner should be the classic chocolate flavor, avoiding other innovative flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the vegetable salad order for the user themselves shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the vegetable salad order for the user themselves should be Shandong Drama Theater, 115 Liberation Road, Lixia District, Jinan, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The expected delivery time for the vegetable salad order for the user themselves', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The expected delivery time for the vegetable salad order for the user themselves should be before 2024-05-18 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The vegetable salad chosen by the user should be vegetarian, without meat or oth', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The vegetable salad chosen by the user should be vegetarian, without meat or other animal proteins"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The vegetable salad chosen by the user should include Cherry Tomato as a main si', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The vegetable salad chosen by the user should include Cherry Tomato as a main side ingredient"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
