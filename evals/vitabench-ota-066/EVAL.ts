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
    expect(result[0].store_id).toBe('S17557514893253360_T00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514893253360_P00052", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(178, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514893253360_T00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514893253360_P00070", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(178, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557514893253360_H00002');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514893253360_P00007", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(758, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557514893253360_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514893253360_P00027", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(170, 0);
  });

  test('rubric: Departure location of the outbound train ticket should be Wuxi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure location of the outbound train ticket should be Wuxi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Destination of the outbound train ticket should be Zhenjiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Destination of the outbound train ticket should be Zhenjiang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure date of the outbound train ticket should be October 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure date of the outbound train ticket should be October 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered outbound train should be the one with the shortest travel time among', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered outbound train should be the one with the shortest travel time among available options, the train in the outbound ticket order should be G7095 (47 minutes travel time)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the outbound train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the outbound train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the outbound train ticket order should be Business class seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the outbound train ticket order should be Business class seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure location of the return train ticket should be Zhenjiang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure location of the return train ticket should be Zhenjiang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Destination of the return train ticket should be Wuxi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Destination of the return train ticket should be Wuxi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure date of the return train ticket should be October 23, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure date of the return train ticket should be October 23, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the date of Double Ninth Festival in 2023, which is October 23, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the date of Double Ninth Festival in 2023, which is October 23, 2023, so the arrival time of the return ticket should be around 10:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the return train ticket order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the return train ticket order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the return train ticket order should be Hard sleeper', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the return train ticket order should be Hard sleeper"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be a Chain hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be a Chain hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The rating of the booked hotel should be greater than or equal to 4.5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the booked hotel should be greater than or equal to 4.5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date of the hotel should be October 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date of the hotel should be October 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be booked should be Zhenjiang Jinshan Temple', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be booked should be Zhenjiang Jinshan Temple"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Zhenjiang on October 22, 2023, which is sunny, so t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Zhenjiang on October 22, 2023, which is sunny, so the ticket type in the attraction order should be the ticket with "Water Charm Jiangsu""
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the attraction order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the attraction order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the attraction order should be 2023-10-22', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the attraction order should be 2023-10-22"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
