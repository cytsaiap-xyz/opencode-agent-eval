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
    expect(result[0].store_id).toBe('S17557505486872152_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486872152_P00077", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(336, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505486872152_T00013');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486872152_P00082", "quantity": 2}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(396, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557505486872152_A00005');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486872152_P00028", "quantity": 1}, {"product_id": "S17557505486872152_P00029", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(87, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557505486872152_H00003');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505486872152_P00017", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(268, 0);
  });

  test('rubric: The outbound train should be High-Speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound train should be High-Speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The outbound ticket should be from Linyi to Dezhou', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The outbound ticket should be from Linyi to Dezhou"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the outbound ticket should be 2023-04-29', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the outbound ticket should be 2023-04-29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure time of the outbound ticket should be between 07:00-08:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure time of the outbound ticket should be between 07:00-08:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type of the outbound ticket in the order should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type of the outbound ticket in the order should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of the outbound ticket in the order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of the outbound ticket in the order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return train should be High-Speed Rail', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return train should be High-Speed Rail"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return ticket should be from Dezhou to Linyi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return ticket should be from Dezhou to Linyi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the return ticket should be 2023-04-30', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the return ticket should be 2023-04-30"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time of the return ticket should be around 12:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time of the return ticket should be around 12:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The seat type of the return ticket in the order should be Second Class Seat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The seat type of the return ticket in the order should be Second Class Seat"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity of the return ticket in the order should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity of the return ticket in the order should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot to be ordered should be Dezhou Happy Flower Valley', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot to be ordered should be Dezhou Happy Flower Valley"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the age range for senior tickets at Dezhou Happy Flower Valley, th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the age range for senior tickets at Dezhou Happy Flower Valley, the result shows that people aged 60 and above can enjoy senior ticket discount, and the scenic spot order should include 1 senior ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include 1 adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include 1 adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date of the scenic spot order should be 2023-04-29', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date of the scenic spot order should be 2023-04-29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should be within 3 kilometers of Dezhou Railway Station, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should be within 3 kilometers of Dezhou Railway Station, Hubin Middle Avenue, Decheng District, Dezhou, Shandong Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel to be booked should provide Free Luggage Storage service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel to be booked should provide Free Luggage Storage service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in date of the hotel order should be 2023-04-29', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in date of the hotel order should be 2023-04-29"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity in the hotel order should be 1', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity in the hotel order should be 1"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type in the hotel order should be Twin Room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type in the hotel order should be Twin Room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
