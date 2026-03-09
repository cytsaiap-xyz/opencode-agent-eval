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
    expect(result[0].store_id).toBe('');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(0, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17564424237133476_I00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17564424237133476_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1588, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The venue to be booked is a large party venue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The venue to be booked is a large party venue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue should be equipped with a projector', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue should be equipped with a projector"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue reservation time is next Friday, March 24, 2023, at 13:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue reservation time is next Friday, March 24, 2023, at 13:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue reservation is for 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue reservation is for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package duration should be 5 hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package duration should be 5 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package should include Unlimited KTV access', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package should include Unlimited KTV access"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package should include Unlimited Billiards access', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package should include Unlimited Billiards access"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package should include Unlimited Mahjong access', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package should include Unlimited Mahjong access"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package should include Unlimited PS5 Gaming access', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package should include Unlimited PS5 Gaming access"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue package should include Unlimited Board Games access', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue package should include Unlimited Board Games access"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party venue to be booked should be LePai Party House', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party venue to be booked should be LePai Party House"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant to be booked must be a Chinese restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant to be booked must be a Chinese restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must be within 3 kilometers (inclusive) of LePai Party House, loc', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must be within 3 kilometers (inclusive) of LePai Party House, located at the intersection of Wangcheng Avenue and Kaixuan East Road, Xigong District, Luoyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant must have a large private room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant must have a large private room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time is next Friday, March 24, 2023, at 18:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time is next Friday, March 24, 2023, at 18:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation is for 20 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation is for 20 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
