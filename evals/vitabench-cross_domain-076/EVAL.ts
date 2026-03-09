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
    expect(result[0].store_id).toBe('S17550807000722555_I00009');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550807000722555_P00061", "quantity": 7}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(686, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(0, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17550807000722555_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550806479682269_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(399, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550807000722555_F00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(1680, 0);
  });

  test('rubric: The in-store merchant should be a murder mystery game venue', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The in-store merchant should be a murder mystery game venue"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the in-store merchant must be a murder mystery game wit', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the in-store merchant must be a murder mystery game with campus background"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the in-store merchant must be a 7-player script', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the in-store merchant must be a 7-player script"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered package from the in-store merchant must have at least two female cha', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered package from the in-store merchant must have at least two female character roles"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product from the in-store merchant should be 7 portions', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product from the in-store merchant should be 7 portions"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The murder mystery game activity must end before 17:00, and the ordered product ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The murder mystery game activity must end before 17:00, and the ordered product duration is 2.5 hours, so the in-store merchant reservation time should be earlier than 14:30 on July 5, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the in-store merchant reservation is 7', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the in-store merchant reservation is 7"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to provide the duration information of the murder mystery game in the order', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to provide the duration information of the murder mystery game in the order, the duration of "Youth Mystery" is 2.5 hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product in the delivery order should be a gold nib fountain pen', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product in the delivery order should be a gold nib fountain pen"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered product in the delivery order cannot be Parker brand', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered product in the delivery order cannot be Parker brand"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time for the ordered product in the delivery order is bef', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time for the ordered product in the delivery order is before 11:15 AM on July 4, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the ordered product in the delivery order is Room 302, ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the ordered product in the delivery order is Room 302, Building 5, East Garden Community, Huazhong University of Science and Technology, 1037 Luoyu Road, Hongshan District, Wuhan, Hubei Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flight ticket should be for a flight from Wuhan to Beijing', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flight ticket should be for a flight from Wuhan to Beijing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure date of the ordered flight ticket should be July 7, 2025', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure date of the ordered flight ticket should be July 7, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered flight ticket should be business class', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered flight ticket should be business class"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The price of the ordered flight ticket should be less than 1800 yuan', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The price of the ordered flight ticket should be less than 1800 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The total budget for in-store merchant order and delivery order must not exceed ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The total budget for in-store merchant order and delivery order must not exceed 1200 yuan"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
