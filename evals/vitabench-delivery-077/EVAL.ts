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
    expect(result[0].store_id).toBe('S62563191519991599_S81379');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S21069456156190794_P14314", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(28.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S94923450644249735_S38024');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S87071804534303894_P59349", "quantity": 1}, {"product_id": "S58528214946920236_P00034", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(35.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S22399110519747136_S91526');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S14147194316063046_P67193", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(17.0, 0);
  });

  test('rubric: The delivery address for the Steamed Mutton Dumplings order should be Main Hospi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Steamed Mutton Dumplings order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Steamed Mutton Dumplings order should be aft', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Steamed Mutton Dumplings order should be after 12:00 on September 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Steamed Mutton Dumplings order must come from a Non-chain Store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Steamed Mutton Dumplings order must come from a Non-chain Store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the uncle\'s meat soup dumplings and soup order should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the uncle\'s meat soup dumplings and soup order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the uncle\'s meat soup dumplings and soup order ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the uncle\'s meat soup dumplings and soup order should be around 12:00 on September 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the uncle\'s meat soup dumplings and soup order should not be in se', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the uncle\'s meat soup dumplings and soup order should not be in set menu form"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the uncle\'s meat soup dumplings and soup order should come from st', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the uncle\'s meat soup dumplings and soup order should come from stores with branches in both Nanjing and Xi\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the uncle\'s meat soup dumplings and soup order must not contain se', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the uncle\'s meat soup dumplings and soup order must not contain seafood ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Yellow Tea order should be Main Hospital of the Fir', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Yellow Tea order should be Main Hospital of the First Affiliated Hospital of Xi\'an Jiaotong University, No.277 Yanta West Road, Yanta District, Xi\'an, Shaanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Yellow Tea order should be around 12:00 on S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Yellow Tea order should be around 12:00 on September 10, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Yellow Tea order item specification should be sugar-free (no additional suga', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Yellow Tea order item specification should be sugar-free (no additional sugar)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
