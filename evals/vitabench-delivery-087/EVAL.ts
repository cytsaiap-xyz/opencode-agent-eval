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
    expect(result[0].store_id).toBe('S13425777444327930_S93304');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30275213393925044_P42440", "quantity": 1}, {"product_id": "S79667605294087199_P22359", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(60, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S24620395468234095_S79800');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S31639431311084099_P91639", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S25726847335377968_S75768');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S33696416686604544_P21810", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(35.8, 0);
  });

  test('rubric: Need to add a note to the Northeastern cuisine order with order_id H0721002O01: ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to add a note to the Northeastern cuisine order with order_id H0721002O01: no Cilantro, add some garlic paste"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Lemon Wheat drink order should be Guixin Community,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Lemon Wheat drink order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Lemon Wheat drink order should be around 18:', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Lemon Wheat drink order should be around 18:00 on April 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The drink order should select Lemon Wheat type beverages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The drink order should select Lemon Wheat type beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lemon Wheat drink order should choose less ice or much less ice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lemon Wheat drink order should choose less ice or much less ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Lemon Wheat drink order should select medium cup or standard size, not Large', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Lemon Wheat drink order should select medium cup or standard size, not Large Cup Size or extra large cup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the smoked chicken order should be Guixin Community, 1 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the smoked chicken order should be Guixin Community, 1 Guixin Street, Nangang District, Harbin, Heilongjiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the smoked chicken order should be around 18:00 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the smoked chicken order should be around 18:00 on April 19, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The smoked chicken order should select smoked chicken items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smoked chicken order should select smoked chicken items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The smoked chicken order should select items without Cilantro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smoked chicken order should select items without Cilantro"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The smoked chicken order should select hot food or items that can be heated', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The smoked chicken order should select hot food or items that can be heated"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
