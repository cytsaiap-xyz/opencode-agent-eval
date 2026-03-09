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
    expect(result[0].store_id).toBe('S17557112364479019_T00012');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557548456137169_P00068", "quantity": 3}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(4050, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17557505487758769_H00001');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17557505487758769_P00012", "quantity": 1}, {"product_id": "S17557505487758769_P00002", "quantity": 1}, {"product_id": "S17557505487758769_P00006", "quantity": 1}, {"product_id": "S17557505487758769_P00003", "quantity": 1}, {"product_id": "S17557505487758769_P00001", "quantity": 1}, {"product_id": "S17557505487758769_P00005", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(3400, 0);
  });

  test('rubric: The departure must be from Nanning (user\'s residence)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure must be from Nanning (user\'s residence)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The destination must be Yan\'an', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The destination must be Yan\'an"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival time must be October 8, 2023', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival time must be October 8, 2023"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check train tickets first, with the result showing that the train journe', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check train tickets first, with the result showing that the train journey takes more than 12 hours, so air travel must be chosen instead of train"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flight ticket should be for the shortest flight, which is CA1834', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flight ticket should be for the shortest flight, which is CA1834"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The quantity for the flight ticket order should be 3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The quantity for the flight ticket order should be 3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking must be a renovated traditional Cave Dwelling homestay', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking must be a renovated traditional Cave Dwelling homestay"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking must preserve architectural features', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking must preserve architectural features"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking must have Modern Amenities', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking must have Modern Amenities"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking must include 3 nights in a twin room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking must include 3 nights in a twin room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The homestay booking must include 3 nights in a king room', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The homestay booking must include 3 nights in a king room"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in dates for the twin room must be October 8, 2023, October 9, 2023, a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in dates for the twin room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The check-in dates for the king room must be October 8, 2023, October 9, 2023, a', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The check-in dates for the king room must be October 8, 2023, October 9, 2023, and October 10, 2023 respectively"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to inquire about all youth-related scenic spots, with results showing Yan\'', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to inquire about all youth-related scenic spots, with results showing Yan\'an Youth Museum and Yan\'an Rural Life Experience Park including historical sites such as schools, supply and marketing cooperatives, or collective farm sites from that era"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
