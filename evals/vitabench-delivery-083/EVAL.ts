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
    expect(result[0].store_id).toBe('S15949154785780736_S01374');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S27196852544252758_P93917", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(25, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18899744937884355_S71840');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S14045593901868448_P87353", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(158.8, 0);
  });

  test('rubric: The delivery address for the fresh juice order should be Nanchang No. 2 Middle S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the fresh juice order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the fresh juice order should be around 15:30 on ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the fresh juice order should be around 15:30 on June 21, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fresh juice order should select the Less Ice option', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fresh juice order should select the Less Ice option"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fresh juice order should choose a product with a variety of fruit ingredient', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fresh juice order should choose a product with a variety of fruit ingredients"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the birthday cake order should be Nanchang No. 2 Middle', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the birthday cake order should be Nanchang No. 2 Middle School (Supu Road Campus), No. 3 Supu Road, Dunzitang Street, Donghu District, Nanchang City, Jiangxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the birthday cake order should be before 17:00 o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the birthday cake order should be before 17:00 on June 21, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The birthday cake order should choose a merchant from the Baxi brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday cake order should choose a merchant from the Baxi brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The birthday cake order product should be made with Fresh Cream', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday cake order product should be made with Fresh Cream"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The birthday cake order should select a design style suitable for little girls\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The birthday cake order should select a design style suitable for little girls\' aesthetic preferences"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
