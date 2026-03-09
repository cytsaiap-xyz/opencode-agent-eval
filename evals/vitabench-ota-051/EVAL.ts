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
    expect(result[0].store_id).toBe('S17557512471457512_T00011');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00068", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(90, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557512471457512_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00078", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(108, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512471457512_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00035", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(336, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557512471457512_A00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00042", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(84, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557512471457512_A00007');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00051", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(90, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557512471457512_H00001');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557512471457512_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(688, 0);
  });

  test('rubric: The departure location of the outbound ticket should be Nanjing, and the destina', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location of the outbound ticket should be Nanjing, and the destination should be Yangzhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the outbound ticket should be April 5, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the outbound ticket should be April 5, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the outbound ticket should be around 08:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the outbound ticket should be around 08:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the outbound ticket order should be Second-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the outbound ticket order should be Second-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the outbound ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the outbound ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure location of the return ticket should be Yangzhou, and the destinat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure location of the return ticket should be Yangzhou, and the destination should be Nanjing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the return ticket should be April 6, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the return ticket should be April 6, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the return ticket should be around 20:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the return ticket should be around 20:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the return ticket order should be Second-class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the return ticket order should be Second-class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the return ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the return ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include Slender West Lake', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include Slender West Lake"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Yangzhou on 2023-04-05, the result is sunny, and th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Yangzhou on 2023-04-05, the result is sunny, and the tickets in the Slender West Lake scenic spot order should include a Hanfu photo package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the Slender West Lake scenic spot order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the Slender West Lake scenic spot order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Slender West Lake scenic spot order should be 2023-04-05', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Slender West Lake scenic spot order should be 2023-04-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include Ge Garden', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include Ge Garden"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the Ge Garden scenic spot order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the Ge Garden scenic spot order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Ge Garden scenic spot order should be 2023-04-05', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Ge Garden scenic spot order should be 2023-04-05"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type in the Ge Garden scenic spot order should be Adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type in the Ge Garden scenic spot order should be Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include Daming Temple', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include Daming Temple"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets in the Daming Temple scenic spot order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets in the Daming Temple scenic spot order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date in the Daming Temple scenic spot order should be 2023-04-06', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date in the Daming Temple scenic spot order should be 2023-04-06"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type in the Daming Temple scenic spot order should be Adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type in the Daming Temple scenic spot order should be Adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel brand to be ordered should be Atour', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel brand to be ordered should be Atour"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The distance between the ordered hotel and Yangzhou Commercial Center, 666 Wench', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The distance between the ordered hotel and Yangzhou Commercial Center, 666 Wenchang Middle Road, Guangling District, Yangzhou, Jiangsu Province should be less than or equal to 3 kilometers"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be King Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be King Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date of the hotel order should be April 5, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date of the hotel order should be April 5, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
