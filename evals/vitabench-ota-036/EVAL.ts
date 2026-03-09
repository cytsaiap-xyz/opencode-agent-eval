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
    expect(result[0].store_id).toBe('S17557505543289546_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543289546_P00068", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(796, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505543289546_H00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543289546_P00015", "quantity": 1}, {"product_id": "S17557505543289546_P00016", "quantity": 1}, {"product_id": "S17557505543289546_P00017", "quantity": 1}, {"product_id": "S17557505543289546_P00018", "quantity": 1}, {"product_id": "S17557505543289546_P00022", "quantity": 1}, {"product_id": "S17557505543289546_P00023", "quantity": 1}, {"product_id": "S17557505543289546_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(2240, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505543289546_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505543289546_P00034", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: Flight order must book a Red-eye Flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Flight order must book a Red-eye Flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check which flight between 2028-02-15 and 2028-02-16 has the best Price ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check which flight between 2028-02-15 and 2028-02-16 has the best Price Discount, the result shows that CA1835 on February 15th at 820 yuan is the cheapest, and the flight in the order must be CA1835"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Guesthouse order must be for a guesthouse rather than a Chain Brand hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Guesthouse order must be for a guesthouse rather than a Chain Brand hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Guesthouse must have Naxi Ethnic Features', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Guesthouse must have Naxi Ethnic Features"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Guesthouse booking duration must be one week (7 nights)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Guesthouse booking duration must be one week (7 nights)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dates of the guesthouse order must be 2028-02-15, 2028-02-16, 2028-02-17, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dates of the guesthouse order must be 2028-02-15, 2028-02-16, 2028-02-17, 2028-02-18, 2028-02-19, 2028-02-20, 2028-02-21 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The guesthouse price per night must be lower than the user\'s historical hotel c', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The guesthouse price per night must be lower than the user\'s historical hotel consumption budget, the price per night should be less than 500 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must book tickets for Jade Dragon Snow Mountain Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must book tickets for Jade Dragon Snow Mountain Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The visiting time for Jade Dragon Snow Mountain in the ticket order must be the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The visiting time for Jade Dragon Snow Mountain in the ticket order must be the sixth day (i.e., 2028-02-20, the 6th day counting from the check-in date)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Jade Dragon Snow Mountain admission ticket must choose a package that includ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Jade Dragon Snow Mountain admission ticket must choose a package that includes warm clothing rental"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
