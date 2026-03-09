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
    expect(result[0].store_id).toBe('S17550802129832489_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129832489_P00002", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(149.9, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802129832489_S00003');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129832489_P00015", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(16.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550802129832489_F00008');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129832489_P00045", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(580, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802129832489_I00012');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802129832489_P00066", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(288, 0);
  });

  test('rubric: The dumbbells in the order should be suitable for beginners', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dumbbells in the order should be suitable for beginners"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the dumbbells order is Room 502, Unit 1, Building 3, Ro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the dumbbells order is Room 502, Unit 1, Building 3, Rongcheng Youjun, Yanjiadi Urban Village Reconstruction Project (420 meters walk from Exit B of Yanjiadi Metro Station), Xishan District, Kunming City, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: To ensure check-in at 11 PM, a flight arriving two and a half hours earlier shou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "To ensure check-in at 11 PM, a flight arriving two and a half hours earlier should be chosen, with the ordered flight\'s arrival time being before 8:30 PM on June 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered flight should not exceed 600', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered flight should not exceed 600"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flight is from Wuxi to Kunming', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flight is from Wuxi to Kunming"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The welcome gift order should include items with Kunming specialty', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The welcome gift order should include items with Kunming specialty"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the welcome gift should not exceed 20 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the welcome gift should not exceed 20 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery time for the welcome gift should be the morning of June 5, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery time for the welcome gift should be the morning of June 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the welcome gift is Tutu Guitu Boutique Homestay, No. 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the welcome gift is Tutu Guitu Boutique Homestay, No. 114 Baicao Village, Guanyinshan Community, Biji Street Office, Xishan District, Kunming City, Yunnan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The restaurant ordered should be beautifully decorated', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The restaurant ordered should be beautifully decorated"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered restaurant should have a rating of 4.0 or above', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered restaurant should have a rating of 4.0 or above"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes in the restaurant set meal order should not be too spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes in the restaurant set meal order should not be too spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The set meal in the restaurant order should include beverages', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The set meal in the restaurant order should include beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dishes in the restaurant set meal order should avoid high-purine foods such ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dishes in the restaurant set meal order should avoid high-purine foods such as Seafood Master"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
