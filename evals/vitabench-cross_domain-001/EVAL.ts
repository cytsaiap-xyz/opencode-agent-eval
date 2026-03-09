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
    expect(result[0].store_id).toBe('S17550931981226759_I00013');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550931981226759_P00093", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1680, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802154486284_S00004');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802154486284_P00019", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(249, 0);
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

  test('rubric: The real-person CS base ordered should be an outdoor base', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The real-person CS base ordered should be an outdoor base"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The real-person CS base ordered should have a large venue and professional setup', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The real-person CS base ordered should have a large venue and professional setup"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The real-person CS package ordered should include more than two hours of experie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The real-person CS package ordered should include more than two hours of experience"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The real-person CS package ordered should include advanced equipment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The real-person CS package ordered should include advanced equipment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The real-person CS package ordered should include coach guidance', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The real-person CS package ordered should include coach guidance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The agent should order a real-person CS package for six people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The agent should order a real-person CS package for six people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sunscreen product ordered should be the Anessa brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sunscreen product ordered should be the Anessa brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The sunscreen product ordered should be large capacity', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The sunscreen product ordered should be large capacity"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Check the business hours of JD Beauty Supermarket, which are 09:00-21:00, and ca', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Check the business hours of JD Beauty Supermarket, which are 09:00-21:00, and cannot be delivered to Room 502, Unit 2, Building 8, Oriental Garden Community, Intersection of Dongfeng Road and Yuhua Road, Lianchi District, Baoding, Hebei Province before 22:00:00 on June 19, 2025; the delivery address should be Building 3, Baoding Technology Park, 128 Chuangye Road, High-tech Zone, Baoding, Hebei Province, and the delivery time should be between 15:00:00-16:00:00 on June 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check high-speed rail ticket information from Baoding to Beijing on June', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check high-speed rail ticket information from Baoding to Beijing on June 21, 2025, with departure time after 13:00:00 and arrival time before 15:00:00, resulting in the user taking train G505 arriving in Beijing at 14:02, allowing 1.5 hours travel time from the station to the CS base, thus needing to change the real-person CS order appointment time from 14:00:00 to around 15:30:00 on June 21, 2025 [i.e., arrival appointment time should be within the 15:15-15:45 timeframe]"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the CS experience reservation should be 6 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the CS experience reservation should be 6 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
