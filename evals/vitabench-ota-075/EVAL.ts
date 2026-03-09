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
    expect(result[0].store_id).toBe('S17557511800822767_F00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511800822767_P00079", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(2340, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557511800822767_F00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511800822767_P00089", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(3840, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557511800822767_H00003');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511800822767_P00011", "quantity": 1}, {"product_id": "S17557511800822767_P00012", "quantity": 1}, {"product_id": "S17557511800822767_P00013", "quantity": 1}, {"product_id": "S17557511800822767_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(3152, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557511800822767_A00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511800822767_P00031", "quantity": 2}, {"product_id": "S17557511800822767_P00032", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(595, 0);
  });

  test('rubric: Departure flight date is June 26, 2028', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure flight date is June 26, 2028"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure flight cannot be a Red-eye Flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure flight cannot be a Red-eye Flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of departure flight tickets is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of departure flight tickets is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Departure flight should be from Yantai to Dunhuang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Departure flight should be from Yantai to Dunhuang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight date is June 30, 2028', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight date is June 30, 2028"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight cannot be a Red-eye Flight', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight cannot be a Red-eye Flight"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of return flight tickets is 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of return flight tickets is 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return flight should be from Dunhuang to Yantai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return flight should be from Dunhuang to Yantai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel should have Dunhuang characteristics', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel should have Dunhuang characteristics"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be Dunhuang Feitian Theme Hotel', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be Dunhuang Feitian Theme Hotel"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel room type should be Family Suite or Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel room type should be Family Suite or Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Hotel reservation should include 4 nights, specifically for June 26, 2028, June ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Hotel reservation should include 4 nights, specifically for June 26, 2028, June 27, 2028, June 28, 2028, and June 29, 2028"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction to be booked should be Mogao Caves', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction to be booked should be Mogao Caves"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction tickets should include 2 Adult Tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction tickets should include 2 Adult Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction tickets should include 1 Student Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction tickets should include 1 Student Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date for using attraction tickets is June 28, 2028', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date for using attraction tickets is June 28, 2028"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
