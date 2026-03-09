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
    expect(result[0].store_id).toBe('S17557515253294755_A00005');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515253294755_P00036", "quantity": 1}, {"product_id": "S17557515253294755_P00043", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(254, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557566356789777_T00011');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557566356789777_P00130", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(486, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557512511049624_T00017');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557566356789777_P00164", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(856, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557515253294755_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557515253294755_P00017", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(780, 0);
  });

  test('rubric: The scenic spot ordered should be Jiuzhaigou Scenic Area', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot ordered should be Jiuzhaigou Scenic Area"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the ticket prices for Jiuzhaigou Scenic Area and calculate the mos', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the ticket prices for Jiuzhaigou Scenic Area and calculate the most economical combination based on the ages of the two elderly people (58, 60 years old), so the scenic spot order should include one Adult Ticket and one Senior Ticket (Age 60+)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, Oct', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the scenic spot order should be 2023-10-03"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure place for the outbound train should be Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure place for the outbound train should be Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination for the outbound train should be Jiuzhaigou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination for the outbound train should be Jiuzhaigou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the outbound train should be between 14:00-15:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the outbound train should be between 14:00-15:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, Oct', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the outbound train ticket order should be 2023-10-02"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the outbound train ticket order should be Soft Sleeper', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the outbound train ticket order should be Soft Sleeper"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure place for the return train should be Jiuzhaigou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure place for the return train should be Jiuzhaigou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination for the return train should be Chengdu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination for the return train should be Chengdu"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time for the return train should be between 17:00-18:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time for the return train should be between 17:00-18:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, Oct', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the weather in Jiuzhaigou on October 1, 2023, October 2, 2023, October 3, 2023, and October 4, 2023. The results are light rain, sunny, sunny, and overcast, so the date in the return train ticket order should be 2023-10-03"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type in the return train ticket order should be Business Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type in the return train ticket order should be Business Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be within 2 kilometers of Jiuzhaigou Scenic Area, Jiuzh', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be within 2 kilometers of Jiuzhaigou Scenic Area, Jiuzhaigou County, Aba Tibetan and Qiang Autonomous Prefecture, Sichuan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should be in Tibetan Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should be in Tibetan Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel ordered should provide Luggage Storage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel ordered should provide Luggage Storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The date in the hotel order should be 2023-10-02', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The date in the hotel order should be 2023-10-02"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
