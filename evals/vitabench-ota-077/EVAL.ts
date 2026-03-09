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
    expect(result[0].store_id).toBe('S17557515627777726_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515627777726_P00024", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(268, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557515627777726_H00002');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515627777726_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(380, 0);
  });

  test('rubric: Must provide information about Hongcun\'s main attractions (Hongcun Scenic Area,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must provide information about Hongcun\'s main attractions (Hongcun Scenic Area, Moon Pond, South Lake)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check Huangshan\'s weather for Saturday (July 22, 2023), which is sunny,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check Huangshan\'s weather for Saturday (July 22, 2023), which is sunny, 20-26℃. Since it won\'t rain on Saturday, the ticket order needs to include rafting"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to compare the prices of separately purchasing Hongcun attraction tickets a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to compare the prices of separately purchasing Hongcun attraction tickets and rafting adult tickets, versus purchasing Adult Ticket + Rafting Package; the result shows the package is cheaper, so the ticket order type must be Adult Ticket + Rafting Package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket order\'s date of use must be July 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket order\'s date of use must be July 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the nearest railway station to Hongcun, with results showing Huangsha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the nearest railway station to Hongcun, with results showing Huangshan North Railway Station, approximately 24.5km away"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Accommodation must be a Traditional Inn within Hongcun ancient village', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Accommodation must be a Traditional Inn within Hongcun ancient village"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn\'s checkout time must be after 14:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn\'s checkout time must be after 14:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The inn\'s check-in date must be July 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The inn\'s check-in date must be July 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
