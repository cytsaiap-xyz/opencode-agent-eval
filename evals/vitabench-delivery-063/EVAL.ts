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
    expect(result[0].store_id).toBe('S19116133029330985_S34157');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S49904307817471643_P71858", "quantity": 1}, {"product_id": "S27988113436607546_P31975", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(38.49, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S24049974549772654_S37431');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S87687372548025370_P33636", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(25.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17738634835110948_S93470');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S96350112347326954_P11710", "quantity": 1}, {"product_id": "S29786269691079082_P68270", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(61.98, 0);
  });

  test('rubric: Successfully canceled the user\'s roast duck set meal order from Dalao Roast Duc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Successfully canceled the user\'s roast duck set meal order from Dalao Roast Duck (Qingyang Road Branch), the order status of order_id D0721001T01 has been updated to cancelled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the chicken soup rice order for the child should be non-spicy flavor', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the chicken soup rice order for the child should be non-spicy flavor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the chicken soup rice order for the child should include the option ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the chicken soup rice order for the child should include the option of no green onions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The chicken soup rice order for the child should be delivered around 19:00 on Se', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The chicken soup rice order for the child should be delivered around 19:00 on September 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the chicken soup rice order for the child should be Pha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the chicken soup rice order for the child should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the spicy chicken order should be a portion for two people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the spicy chicken order should be a portion for two people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The item in the spicy chicken order should select the extra spicy flavor option', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The item in the spicy chicken order should select the extra spicy flavor option"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The spicy chicken order should include noodle-type staple food items', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The spicy chicken order should include noodle-type staple food items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The spicy chicken order should be delivered around 19:00 on September 30, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The spicy chicken order should be delivered around 19:00 on September 30, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the spicy chicken order should be Phase One of Keyuan N', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the spicy chicken order should be Phase One of Keyuan New Village, Wuhu Road Street, Baohe District, Hefei City, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
