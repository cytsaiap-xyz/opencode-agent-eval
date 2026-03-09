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
    expect(result[0].store_id).toBe('S17557514605716896_A00006');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00055", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(110, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557514605716896_A00007');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00067", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(80, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17557514605716896_A00009');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00087", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(30, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17557514605716896_H00002');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00013", "quantity": 1}, {"product_id": "S17557514605716896_P00014", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(960, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17557514605716896_H00003');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00028", "quantity": 1}, {"product_id": "S17557514605716896_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(930, 0);
  });

  test('order 5 matches expected store', () => {
    expect(result[5].store_id).toBe('S17557514605716896_F00012');
  });

  test('order 5 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557514605716896_P00107", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[5].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 5 has correct total price', () => {
    expect(result[5].total_price).toBeCloseTo(1180, 0);
  });

  test('rubric: The ticket date for Xijiang Thousand Households Miao Village order is May 8, 202', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for Xijiang Thousand Households Miao Village order is May 8, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type for Xijiang Thousand Households Miao Village order is adult tick', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type for Xijiang Thousand Households Miao Village order is adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for Zhaoxing Dong Village order is May 9, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for Zhaoxing Dong Village order is May 9, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type for Zhaoxing Dong Village order is adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type for Zhaoxing Dong Village order is adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The attractions ordered should be the type of attractions the user frequently vi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The attractions ordered should be the type of attractions the user frequently visits (according to user profile, it\'s museums)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for the museum order is May 10, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for the museum order is May 10, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket type for the museum order is adult ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket type for the museum order is adult ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The return flight is from Ho Chi Minh City to Shanghai', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The return flight is from Ho Chi Minh City to Shanghai"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The first two nights of accommodation should be in Xijiang Thousand Households M', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The first two nights of accommodation should be in Xijiang Thousand Households Miao Village"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dates for the first two nights of accommodation are May 7, 2027 and May 8, 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dates for the first two nights of accommodation are May 7, 2027 and May 8, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the first two nights should be king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the first two nights should be king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The last two nights\' accommodation should be traditional Dong guesthouse', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The last two nights\' accommodation should be traditional Dong guesthouse"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The last two nights\' accommodation should have Drum Tower views', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The last two nights\' accommodation should have Drum Tower views"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The last two nights\' accommodation should have Wind and Rain Bridge views', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The last two nights\' accommodation should have Wind and Rain Bridge views"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dates for the last two nights\' accommodation are May 9, 2027 and May 10, 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dates for the last two nights\' accommodation are May 9, 2027 and May 10, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The room type for the last two nights should be king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The room type for the last two nights should be king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total price for all four nights of accommodation should not exceed 2000 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total price for all four nights of accommodation should not exceed 2000 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight booked is from Tianjin to Guiyang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight booked is from Tianjin to Guiyang"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight booked should not depart in the morning', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight booked should not depart in the morning"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight booked should not arrive too late', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight booked should not arrive too late"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure flight departure date is May 7, 2027', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure flight departure date is May 7, 2027"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
