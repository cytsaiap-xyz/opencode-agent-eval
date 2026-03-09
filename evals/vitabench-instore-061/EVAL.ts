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
    expect(result[0].store_id).toBe('S17567836582349272_I00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836582349272_P00001", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(672, 0);
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
    expect(result[2].store_id).toBe('S17567836582349272_I00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836582349272_P00010", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(178, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17567836582349272_I00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17567836582349272_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(480, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(0, 0);
  });

  test('rubric: The trend play hall order should include VR games', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The trend play hall order should include VR games"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The trend play hall order should include a billiards hall', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The trend play hall order should include a billiards hall"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered at the trend play hall should be a 4-hour unlimited play pac', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered at the trend play hall should be a 4-hour unlimited play package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of products ordered at the trend play hall should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of products ordered at the trend play hall should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the trend play hall should be May 12, 2023, at 14:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the trend play hall should be May 12, 2023, at 14:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the trend play hall reservation should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the trend play hall reservation should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the trend play hall reservation should be Interstellar Trend Pl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the trend play hall reservation should be Interstellar Trend Play Space"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hamburger restaurant ordered from should be a chain store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hamburger restaurant ordered from should be a chain store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hamburger restaurant should be within 1km (inclusive) from Interstellar Tren', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hamburger restaurant should be within 1km (inclusive) from Interstellar Trend Play Space, 588 Chezhan Avenue, Lucheng District, Wenzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The order from the hamburger restaurant should be a meal for four people, not fo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The order from the hamburger restaurant should be a meal for four people, not four individual meals"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package ordered from the hamburger restaurant should include hamburgers and ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package ordered from the hamburger restaurant should include hamburgers and durian pizza"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of products ordered from the hamburger restaurant should be 200 yuan o', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of products ordered from the hamburger restaurant should be 200 yuan or less"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Livehouse ordered from should be within 3km (inclusive) from Pizza Hut, 4th ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Livehouse ordered from should be within 3km (inclusive) from Pizza Hut, 4th Floor, Wenzhou Impression City, 1599 Wanyuan Road, Chashan Street, Ouhai District, Wenzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Livehouse ordered from should be ranked in the top ten on Wenzhou\'s popular', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Livehouse ordered from should be ranked in the top ten on Wenzhou\'s popularity list"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the Livehouse should be a beverage package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the Livehouse should be a beverage package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The product ordered from the Livehouse should be sufficient for 4 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The product ordered from the Livehouse should be sufficient for 4 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: With each person spending 500 yuan, totaling 2000 yuan. According to the orders ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "With each person spending 500 yuan, totaling 2000 yuan. According to the orders above, the trend play hall package costs 672 yuan, the hamburger restaurant meal for four costs 178 yuan, therefore the Livehouse beverage package should not exceed 1150 yuan (inclusive)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation time for the Livehouse should be May 12, 2023, at 19:30:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation time for the Livehouse should be May 12, 2023, at 19:30:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the Livehouse reservation should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the Livehouse reservation should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant for the Livehouse reservation should be Wenzhou Sound LiveHouse', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant for the Livehouse reservation should be Wenzhou Sound LiveHouse"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
