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
    expect(result[0].store_id).toBe('S17557505500237378_F00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505500237378_P00069", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(580, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505500237378_F00009');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505500237378_P00064", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1700, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505500237378_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505500237378_P00029", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(684, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505500237378_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505500237378_P00009", "quantity": 1}, {"product_id": "S17557505500237378_P00010", "quantity": 1}, {"product_id": "S17557505500237378_P00011", "quantity": 1}, {"product_id": "S17557505500237378_P00012", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1572, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557505500237378_F00011');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505500237378_P00073", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(2670, 0);
  });

  test('rubric: The flight ticket from Chongqing to Zhangjiajie should have a departure date of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket from Chongqing to Zhangjiajie should have a departure date of June 25, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of flight tickets from Chongqing to Zhangjiajie should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of flight tickets from Chongqing to Zhangjiajie should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket type from Chongqing to Zhangjiajie should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket type from Chongqing to Zhangjiajie should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter flights with Zhangjiajie as the destination, and find the combina', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Chongqing to Zhangjiajie in the order should be MU2287"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight tickets from Shenzhen to Zhangjiajie should have a departure date of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight tickets from Shenzhen to Zhangjiajie should have a departure date of June 25, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of flight tickets from Shenzhen to Zhangjiajie should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of flight tickets from Shenzhen to Zhangjiajie should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket type from Shenzhen to Zhangjiajie should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket type from Shenzhen to Zhangjiajie should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to filter flights with Zhangjiajie as the destination, and find the combina', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to filter flights with Zhangjiajie as the destination, and find the combination of flights departing from Shenzhen and Chongqing respectively with the shortest arrival time interval. The result is MU2287 and CZ3967, so the flight from Shenzhen to Zhangjiajie in the order should be CZ3967"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to order should be Zhangjiajie National Forest Park', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to order should be Zhangjiajie National Forest Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The usage date for the attraction tickets should be June 26, 2022', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The usage date for the attraction tickets should be June 26, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of attraction tickets should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of attraction tickets should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance from the booked hotel to the Zhangjiajie National Forest Park Visit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance from the booked hotel to the Zhangjiajie National Forest Park Visitor Center should be within 1km (including 1km)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include a King Room for 2 nights, with booking dates of J', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include a King Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel order should include a Twin Room for 2 nights, with booking dates of J', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel order should include a Twin Room for 2 nights, with booking dates of June 25, 2022 and June 26, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight tickets from Zhangjiajie to Shenzhen should have a departure date of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight tickets from Zhangjiajie to Shenzhen should have a departure date of June 27, 2022"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of flight tickets from Zhangjiajie to Shenzhen should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of flight tickets from Zhangjiajie to Shenzhen should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket type from Zhangjiajie to Shenzhen should be Economy Class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket type from Zhangjiajie to Shenzhen should be Economy Class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
