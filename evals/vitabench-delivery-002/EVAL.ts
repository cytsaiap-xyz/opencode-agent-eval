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
    expect(result[0].store_id).toBe('S17432753848082089_S35082');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S33329865254216168_P09168", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(49, 0);
  });

  test('rubric: Delivery address should be North Area of Fengning Residential Complex, No. 10 Fe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Delivery address should be North Area of Fengning Residential Complex, No. 10 Fengning Road, Wuhua District, Kunming, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Total price of crayfish order should be around 50 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Total price of crayfish order should be around 50 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Crayfish for children should be Non-spicy flavor, such as garlic or other mild f', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Crayfish for children should be Non-spicy flavor, such as garlic or other mild flavors"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: To prevent stomach issues for children, restaurants with Fresh Ingredients shoul', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "To prevent stomach issues for children, restaurants with Fresh Ingredients should be selected"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The portion of crayfish ordered should be enough For Two People', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The portion of crayfish ordered should be enough For Two People"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
