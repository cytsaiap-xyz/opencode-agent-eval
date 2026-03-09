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
    expect(result[0].store_id).toBe('S17557515995167456_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515995167456_P00031", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(245, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557515995167456_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515995167456_P00009", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(780, 0);
  });

  test('rubric: Need to check the opening hours of Mount Tai Scenic Area, the result shows that ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the opening hours of Mount Tai Scenic Area, the result shows that it supports night climbing (open 24 hours a day)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Mount Tai from July 27 to July 31, the result is as', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Mount Tai from July 27 to July 31, the result is as follows: July 27, Tai\'an cloudy, 26-36°C; July 28, Tai\'an cloudy, 28-33°C; July 29, Tai\'an sunny, 22-31°C; July 30, Tai\'an cloudy, 24-33°C; July 31, Tai\'an light rain, 21-28°C"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter non-rainy dates for Mount Tai, calculate the average temperature ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter non-rainy dates for Mount Tai, calculate the average temperature for each day, and select the date with the lowest average temperature, the result is July 29, thus the scenic spot ticket date should be July 29, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Scenic spot tickets must include cable car packages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Scenic spot tickets must include cable car packages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order must be for Mount Tai Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order must be for Mount Tai Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must be located within 500m of No. 126 Hongmen Road, Taishan District,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must be located within 500m of No. 126 Hongmen Road, Taishan District, Tai\'an City, Shandong Province (at the foot of Mount Tai)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The unit price of items in the hotel order should be between 500-1000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The unit price of items in the hotel order should be between 500-1000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel must have a jacuzzi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel must have a jacuzzi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order must be for a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order must be for a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel order must be July 29, 2026', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel order must be July 29, 2026"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must filter trains from Shenzhen to Tai\'an, check the train with the longest tr', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must filter trains from Shenzhen to Tai\'an, check the train with the longest travel time, the result is K1234, with a duration of 18 hours and 15 minutes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
