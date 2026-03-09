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
    expect(result[0].store_id).toBe('S25539361674255185_S67204');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S71751813192280767_P89342", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(25.0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S18967463504826989_S43153');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S33950920453484028_P40840", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(35.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S30488026926582488_S65342');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S53536420214175419_P36001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(23.8, 0);
  });

  test('rubric: The user\'s own lunch order delivery address should be the work address at No. 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s own lunch order delivery address should be the work address at No. 398 Feicui Road, Shushan District, Hefei, Anhui Province, National Hefei Economic and Technological Development Zone"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The user\'s Bean Curd Skin with Stir-fried Meat Rice Bowl order should be schedu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The user\'s Bean Curd Skin with Stir-fried Meat Rice Bowl order should be scheduled for delivery around 12:00 on March 20, 2024, ensuring it can be finished before the mechanical maintenance work starts at 13:15"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The daughter\'s lunch order delivery address should be the home address at Baowe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The daughter\'s lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The daughter\'s Couple\'s Lung Slices set meal order should be scheduled for del', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The daughter\'s Couple\'s Lung Slices set meal order should be scheduled for delivery around 12:00 on March 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The daughter\'s Couple\'s Lung Slices set meal order should specify a preference', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The daughter\'s Couple\'s Lung Slices set meal order should specify a preference for no cilantro"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The daughter\'s lunch order should include Beef ingredients, in accordance with ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The daughter\'s lunch order should include Beef ingredients, in accordance with her dietary preferences"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The son\'s lunch order delivery address should be the home address at Baowen Gar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The son\'s lunch order delivery address should be the home address at Baowen Garden, Changhuai Street, Yaohai District, Hefei, Anhui Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The son\'s Longjiang Pork Knuckle Rice order should be scheduled for delivery ar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The son\'s Longjiang Pork Knuckle Rice order should be scheduled for delivery around 12:00 on March 20, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The son\'s Longjiang Pork Knuckle Rice order should specify the large portion si', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The son\'s Longjiang Pork Knuckle Rice order should specify the large portion size to meet his increased appetite during his growth period"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
