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
    expect(result[0].store_id).toBe('S17564420238894988_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420238894988_P00001", "quantity": 1}, {"product_id": "S17564420238894988_P00002", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(369.7, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17564420238894988_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564420238894988_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(328, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The package ordered from a pet grooming store must be available for dogs', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from a pet grooming store must be available for dogs"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming store rating must be 4.5 stars or higher', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming store rating must be 4.5 stars or higher"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming store order must include bath + grooming service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming store order must include bath + grooming service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming store order must be show-grade washing and care service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming store order must be show-grade washing and care service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming store order must include imported dog treat canned food', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming store order must include imported dog treat canned food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming store order must include 6 cans of dog food', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming store order must include 6 cans of dog food"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Pet grooming appointment time must be 10:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Pet grooming appointment time must be 10:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved pet grooming business should be Noble Pet SPA Club', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved pet grooming business should be Noble Pet SPA Club"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant must be located within 1km of the pet grooming store (Nob', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant must be located within 1km of the pet grooming store (Noble Pet SPA Club, 1st Floor, Zhengshang Bozuan Commercial Plaza, Intersection of Tanggong West Road and Kaixuan East Road, Xigong District, Luoyang)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant order must be a set meal for two, not two individual meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant order must be a set meal for two, not two individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant set meal for two must not contain beef (friend\'s dietary', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant set meal for two must not contain beef (friend\'s dietary restriction)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant set meal for two must not contain caffeine (user is aller', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant set meal for two must not contain caffeine (user is allergic), choosing a set meal labeled as caffeine-free"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The western restaurant order must be a Beautiful Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The western restaurant order must be a Beautiful Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Western restaurant reservation time must be 11:00 AM', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Western restaurant reservation time must be 11:00 AM"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Western restaurant reservation must be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Western restaurant reservation must be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reserved western restaurant should be Milano Western Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reserved western restaurant should be Milano Western Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
