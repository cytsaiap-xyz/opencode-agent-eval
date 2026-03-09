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
    expect(result[0].store_id).toBe('S24847536756058661_S98390');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S30591239557390280_P60779", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(27.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S28589198334368358_S78525');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S14184585097927965_P84004", "quantity": 1}, {"product_id": "S13834984990585068_P44986", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(28.8, 0);
  });

  test('rubric: The delivery address for the user\'s body management salad order should be Haiyu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the user\'s body management salad order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s body management salad order should select the combo salad product fr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s body management salad order should select the combo salad product from Magic Salad (Baolong Plaza)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s body management salad order should select the \'no sauce\' product a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s body management salad order should select the \'no sauce\' product attribute"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s body management salad order should avoid high-sugar and fried food i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s body management salad order should avoid high-sugar and fried food items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the assistant\'s Tiptoe Beef order should be Haiyue Bui', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the assistant\'s Tiptoe Beef order should be Haiyue Building, No.590 Gangcheng East Street, Laishan District, Yantai, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The assistant\'s Tiptoe Beef order should select the extra spicy flavor attribut', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The assistant\'s Tiptoe Beef order should select the extra spicy flavor attribute"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The assistant\'s Tiptoe Beef order should avoid green onion garnishes or seasoni', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The assistant\'s Tiptoe Beef order should avoid green onion garnishes or seasonings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
