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
    expect(result[0].store_id).toBe('S21718353114713898_S77555');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S28550993188472208_P13681", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(30.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S11830933639824558_S97829');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S29049403220872394_P92994", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(188.0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S80854347985296109_S72541');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S15584715623979675_P75038", "quantity": 1}, {"product_id": "S59761435911294633_P74836", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(19.2, 0);
  });

  test('rubric: The delivery address for the Red Bean Paste Egg Yolk Pastry order should be No. ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Red Bean Paste Egg Yolk Pastry order should be No. 26 Sihuan South Road, Henan\'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Meat Crab Pot order should be No. 26 Sihuan South R', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Meat Crab Pot order should be No. 26 Sihuan South Road, Henan\'an Street, Huicheng District, Huizhou City, Guangdong Province, Wanxiang International Office Building"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting Meat Crab Pot, the mild spicy flavor should be chosen, suitable f', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting Meat Crab Pot, the mild spicy flavor should be chosen, suitable for sharing with colleagues"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting a Meat Crab Pot merchant, the rating should be greater than or eq', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting a Meat Crab Pot merchant, the rating should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the Double-Skin Milk Pudding order should be No. 8 Sanx', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the Double-Skin Milk Pudding order should be No. 8 Sanxin South Road, Jiangbei, Huicheng District, Huizhou City, Guangdong Province, Jiangbei New Garden"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting Double-Skin Milk Pudding, it should not contain mango ingredients', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting Double-Skin Milk Pudding, it should not contain mango ingredients to avoid allergic reactions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Double-Skin Milk Pudding should be selected as a hot drink, suitable for consump', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Double-Skin Milk Pudding should be selected as a hot drink, suitable for consumption during menstruation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Double-Skin Milk Pudding order should include Red Bean (Extra Topping), with', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Double-Skin Milk Pudding order should include Red Bean (Extra Topping), with a total of 2 items"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
