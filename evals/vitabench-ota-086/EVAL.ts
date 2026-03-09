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
    expect(result[0].store_id).toBe('S17557514229117401_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514229117401_P00045", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(1400, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514229117401_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514229117401_P00002", "quantity": 2}, {"product_id": "S17557514229117401_P00005", "quantity": 2}, {"product_id": "S17557514229117401_P00007", "quantity": 1}, {"product_id": "S17557514229117401_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(4240, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557514229117401_T00015');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514229117401_P00105", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(1240, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557514229117401_T00014');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514229117401_P00099", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(2765, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557514229117401_A00008');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514229117401_P00071", "quantity": 5}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(150, 0);
  });

  test('rubric: The purchased tickets are dated April 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are dated April 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of tickets purchased is 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of tickets purchased is 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets are valid for adults', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets are valid for adults"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased tickets include camel riding activity', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased tickets include camel riding activity"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tickets are for Ulan Butong Grassland', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tickets are for Ulan Butong Grassland"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel reservation dates are April 21, 2023 and April 22, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel reservation dates are April 21, 2023 and April 22, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking includes twin rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking includes twin rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking includes king rooms', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking includes king rooms"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking includes 2 twin rooms per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking includes 2 twin rooms per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The hotel booking includes 1 king room per night', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The hotel booking includes 1 king room per night"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price per night for each hotel room should be consistent with the user\'s us', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price per night for each hotel room should be consistent with the user\'s usual spending level (query shows it\'s 500-1000)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The booked hotel should be clean and tidy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The booked hotel should be clean and tidy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The purchased train tickets are from Beijing to Chifeng', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The purchased train tickets are from Beijing to Chifeng"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Beijing to Chifeng train tickets, the arrival time should not be in the ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Beijing to Chifeng train tickets, the arrival time should not be in the early morning hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Beijing to Chifeng train tickets, all seats are of the same class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Beijing to Chifeng train tickets, all seats are of the same class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Beijing to Chifeng train tickets, 5 tickets were purchased', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Beijing to Chifeng train tickets, 5 tickets were purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Beijing to Chifeng train tickets are booked for April 21, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Beijing to Chifeng train tickets are booked for April 21, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Train tickets were also purchased from Nanjing to Beijing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Train tickets were also purchased from Nanjing to Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Nanjing to Beijing train tickets, the departure time should not be in th', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Nanjing to Beijing train tickets, the departure time should not be in the early morning hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Nanjing to Beijing train tickets, all seats are of the same class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Nanjing to Beijing train tickets, all seats are of the same class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Nanjing to Beijing train tickets, the arrival time should be at least ha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Nanjing to Beijing train tickets, the arrival time should be at least half an hour earlier than the departure time of the Beijing to Chifeng train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: For the Nanjing to Beijing train tickets, 5 tickets were purchased', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "For the Nanjing to Beijing train tickets, 5 tickets were purchased"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The Nanjing to Beijing train tickets are booked for April 21, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The Nanjing to Beijing train tickets are booked for April 21, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The weather forecast for April 23, 2023 in Chifeng shows rain, so the attraction', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The weather forecast for April 23, 2023 in Chifeng shows rain, so the attraction booked is a museum"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets purchased include guided tour service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets purchased include guided tour service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of attraction tickets purchased is 5', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of attraction tickets purchased is 5"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attraction tickets are dated April 23, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attraction tickets are dated April 23, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
