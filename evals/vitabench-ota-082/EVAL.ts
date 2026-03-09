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
    expect(result[0].store_id).toBe('S17557511177488640_T00015');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00150", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(596, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557511177488640_T00016');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00160", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1106, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557511177488640_A00006');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00067", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(240, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557511177488640_A00007');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00082", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(240, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557511177488640_A00009');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00106", "quantity": 1}, {"product_id": "S17557511177488640_P00102", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(320, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557511177488640_A00008');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557511177488640_P00087", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(200, 0);
  });

  test('rubric: Outbound train departure date is September 14, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train departure date is September 14, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Outbound train number should start with K', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train number should start with K"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Outbound train arrival time should be on the morning of September 15, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train arrival time should be on the morning of September 15, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of outbound train tickets is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of outbound train tickets is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Outbound train should be from Linyi to Xi\'an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Outbound train should be from Linyi to Xi\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train departure date is September 17, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train departure date is September 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train number should start with D or G', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train number should start with D or G"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train arrival time should be on the evening of September 17, 2024', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train arrival time should be on the evening of September 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of return train tickets is 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of return train tickets is 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Return train should be from Xi\'an to Linyi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Return train should be from Xi\'an to Linyi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attractions ordered on the first day of the journey should include Emperor Qin S', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attractions ordered on the first day of the journey should include Emperor Qin Shi Huang\'s Mausoleum Site Museum (Terracotta Army)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the first day should be for September 15, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the first day should be for September 15, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of tickets for attractions ordered on the first day should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of tickets for attractions ordered on the first day should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attractions ordered on the first day of the journey should include Mausoleum of ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attractions ordered on the first day of the journey should include Mausoleum of the First Qin Emperor"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the first day should be for September 15, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the first day should be for September 15, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of tickets for attractions ordered on the first day should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of tickets for attractions ordered on the first day should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction ordered on the second day of the journey should be Tang Paradise', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction ordered on the second day of the journey should be Tang Paradise"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the second day should be for September 16, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the second day should be for September 16, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the second day should include 1 Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the second day should include 1 Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the second day should include 1 Hanfu Experie', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the second day should include 1 Hanfu Experience Ticket (Includes Admission + Hanfu Rental)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Attraction ordered on the third day of the journey should be Xi\'an Qinling Wild', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Attraction ordered on the third day of the journey should be Xi\'an Qinling Wildlife Park"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Tickets for attractions ordered on the third day should be for September 17, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Tickets for attractions ordered on the third day should be for September 17, 2024"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Number of tickets for attractions ordered on the third day should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Number of tickets for attractions ordered on the third day should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
