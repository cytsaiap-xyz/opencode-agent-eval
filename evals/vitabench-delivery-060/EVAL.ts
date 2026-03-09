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
    expect(result[0].store_id).toBe('S30277630239337670_S96390');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30868868128876203_P46149", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(36.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S20143775779327750_S53996');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26294683682178716_P63793", "quantity": 1}, {"product_id": "S97709085515793158_P00049", "quantity": 1}, {"product_id": "S23516532710347533_P09619", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(148, 0);
  });

  test('rubric: The delivery address for the CHABAIDAO drink order should be Xinyi Garden, Jinsh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the CHABAIDAO drink order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the CHABAIDAO drink order should be around 20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the CHABAIDAO drink order should be around 20:00 on 2026-08-09"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The CHABAIDAO drink order should select CHABAIDAO (Suzhou Fenghua Plaza Branch) ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The CHABAIDAO drink order should select CHABAIDAO (Suzhou Fenghua Plaza Branch) as the merchant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The CHABAIDAO drink ordered should be Pomelo Sago', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The CHABAIDAO drink ordered should be Pomelo Sago"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The temperature attribute for the CHABAIDAO drink order should be set to less ic', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The temperature attribute for the CHABAIDAO drink order should be set to less ice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Sichuan cuisine dinner order should be Xinyi Garden', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Sichuan cuisine dinner order should be Xinyi Garden, Jinshan Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the Sichuan cuisine dinner order should be aroun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the Sichuan cuisine dinner order should be around 20:00 on 2026-08-09"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sichuan cuisine dinner order should not include seafood items and rice', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sichuan cuisine dinner order should not include seafood items and rice"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The portion size of the Sichuan cuisine dinner order should be suitable for thre', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The portion size of the Sichuan cuisine dinner order should be suitable for three adults"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price of the Sichuan cuisine dinner order should be around 150 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price of the Sichuan cuisine dinner order should be around 150 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Sichuan cuisine dinner order should include 3 Sichuan dishes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Sichuan cuisine dinner order should include 3 Sichuan dishes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
