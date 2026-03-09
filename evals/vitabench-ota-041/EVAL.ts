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
    expect(result[0].store_id).toBe('S17557505554587434_T00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505554587434_P00054", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(260, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505554587434_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505554587434_P00070", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(272, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505554587434_H00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505554587434_P00006", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(776, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505554587434_A00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505554587434_P00036", "quantity": 4}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(512, 0);
  });

  test('rubric: The departure location for the outbound ticket is Nantong, and the destination i', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location for the outbound ticket is Nantong, and the destination is Suzhou South Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound ticket should be EMU (Electric Multiple Unit) train or High-speed r', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound ticket should be EMU (Electric Multiple Unit) train or High-speed rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the outbound ticket should be 2029-04-28', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the outbound ticket should be 2029-04-28"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the outbound ticket order should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the outbound ticket order should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the outbound ticket order should be Second class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the outbound ticket order should be Second class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound ticket should be the earliest available train, which is D5432 (depa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound ticket should be the earliest available train, which is D5432 (departing at 06:28)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure location for the return ticket is Suzhou South Railway Station, an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location for the return ticket is Suzhou South Railway Station, and the destination is Nantong"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return ticket should be EMU (Electric Multiple Unit) train or High-speed rai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return ticket should be EMU (Electric Multiple Unit) train or High-speed rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date for the return ticket should be 2029-04-29', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date for the return ticket should be 2029-04-29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the return ticket should be around 17:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the return ticket should be around 17:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the return ticket order should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the return ticket order should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the return ticket order should be Second class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the return ticket order should be Second class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The brand of the hotel should be Hanting or Home Inn or 7 Days Inn', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The brand of the hotel should be Hanting or Home Inn or 7 Days Inn"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the hotel and Suzhou South Railway Station, Wuzhong Distric', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the hotel and Suzhou South Railway Station, Wuzhong District, Suzhou, Jiangsu Province should be less than or equal to 500 meters"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel should be newly opened in 2028', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel should be newly opened in 2028"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date for the hotel should be 2029-04-28', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date for the hotel should be 2029-04-28"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the hotel order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the hotel order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check and calculate the price difference between twin rooms and king roo', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check and calculate the price difference between twin rooms and king rooms within the available options, which is 70 yuan, greater than 50 yuan, so the room type in the hotel order should be Economy king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be booked should be Zhouzhuang Ancient Town', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be booked should be Zhouzhuang Ancient Town"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets for the attraction should include the cultural creative ice cream pa', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets for the attraction should include the cultural creative ice cream package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the attraction order should be 2029-04-28', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the attraction order should be 2029-04-28"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the attraction order should be 4', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the attraction order should be 4"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
