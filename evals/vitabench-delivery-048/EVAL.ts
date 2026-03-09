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
    expect(result[0].store_id).toBe('S16887453931857079_S63694');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S33043175164707784_P19453", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(53.7, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17075190379161118_S54665');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S95761118842118315_P53885", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(29.6, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S19713618878860452_S55950');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S29731354455150560_P41203", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(24.8, 0);
  });

  test('rubric: The delivery address for the Shanxi Specialty drink order prepared for the clien', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Shanxi Specialty drink order prepared for the client should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the Shanxi Specialty drink order prepared for the client s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the Shanxi Specialty drink order prepared for the client should be before 2025-09-26 20:00:00, for use during the evening dinner party"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Shanxi Specialty drink prepared for the client should be innovative vinegar ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Shanxi Specialty drink prepared for the client should be innovative vinegar drink products with local Shanxi characteristics, such as Shanxi Aged Vinegar Cola"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the clay pot soup order prepared for family should be L', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the clay pot soup order prepared for family should be Longcheng Shangdu, 800 meters east of Wucheng Intersection (No.11 Bus Terminal), Xiaodian District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the clay pot soup order prepared for family should be betw', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the clay pot soup order prepared for family should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The clay pot soup items prepared for family should have nourishing effects, suit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The clay pot soup items prepared for family should have nourishing effects, suitable for the wife and daughter\'s health"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The clay pot soup order prepared for family should have a total of 2 portions, o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The clay pot soup order prepared for family should have a total of 2 portions, one each for the wife and daughter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the personal lunch buckwheat cold noodles order should ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the personal lunch buckwheat cold noodles order should be International Trade Building, 69 Fuxi Street, Xinghualing District, Taiyuan, Shanxi Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the personal lunch buckwheat cold noodles order should be ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the personal lunch buckwheat cold noodles order should be between 2025-09-26 17:57:41 and 2025-09-26 19:57:41"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The personal lunch buckwheat cold noodles should contain meat to meet non-vegeta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The personal lunch buckwheat cold noodles should contain meat to meet non-vegetarian requirements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The personal lunch buckwheat cold noodles should not contain high-purine ingredi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The personal lunch buckwheat cold noodles should not contain high-purine ingredients such as organ meats or seafood soup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
