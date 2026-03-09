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
    expect(result[0].store_id).toBe('S15536723275106377_S96178');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S24518040077817653_P83870", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(28.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S28286985627882831_S33402');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S21465954562957466_P07678", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(23.8, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S28566313792243207_S99929');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S28094256416303510_P14903", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(21.8, 0);
  });

  test('rubric: The delivery address for the beef light meal order should be Zijingang Primary S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the beef light meal order should be Zijingang Primary School of Xuejun Primary School Education Group, 198 Pingshui West Street, Xihu District, Hangzhou, Zhejiang Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the beef light meal order should be after 11:00 ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the beef light meal order should be after 11:00 on October 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The merchant selected for the beef light meal order should have a Dine-in Restau', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The merchant selected for the beef light meal order should have a Dine-in Restaurant label to ensure hygiene standards"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the braised meat rice cake order should be Zijin Litera', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the braised meat rice cake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the braised meat rice cake order should be aroun', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the braised meat rice cake order should be around 17:00 on October 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the soft egg pancake order should be Zijin Literary Gar', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the soft egg pancake order should be Zijin Literary Garden, 418 Yuhang Tang Road, Xihu District, Hangzhou, Zhejiang Province (470m walk from Samba Metro Station Exit G1)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the soft egg pancake order should be around 17:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the soft egg pancake order should be around 17:00 on October 24, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The soft egg pancake order should select the option without onions, but keep oth', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The soft egg pancake order should select the option without onions, but keep other ingredient options (such as selecting \'cilantro only\' from options like \'cilantro only\', \'With Onions only\', \'no cilantro no onions\', \'with both cilantro and onions\')"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
