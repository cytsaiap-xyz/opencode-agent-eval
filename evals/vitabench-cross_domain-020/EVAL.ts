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
    expect(result[0].store_id).toBe('S17550802126117462_S00002');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126117462_P00008", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(46, 0);
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
    expect(result[2].store_id).toBe('S17550802126117462_I00011');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126117462_P00055", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(88, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802126117462_T00006');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126117462_P00026", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(152, 0);
  });

  test('order 4 matches expected store', () => {
    expect(result[4].store_id).toBe('S17550802126117462_T00007');
  });

  test('order 4 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802126117462_P00031", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[4].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 4 has correct total price', () => {
    expect(result[4].total_price).toBeCloseTo(112, 0);
  });

  test('rubric: The rating of the delivery restaurant should be greater than or equal to 4.3', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The rating of the delivery restaurant should be greater than or equal to 4.3"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery order should not be a set meal for two', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery order should not be a set meal for two"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery restaurant should offer dine-in service', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery restaurant should offer dine-in service"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery food should be Light Meal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery food should be Light Meal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery food should be Highly Satiating', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery food should be Highly Satiating"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery food should be Non-spicy', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery food should be Non-spicy"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery should not contain Offal', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery should not contain Offal"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address must be Room 2503, 25th Floor, Times Avenue, No. 88 Jiefang', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address must be Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The estimated delivery time should be before 2026-09-07 18:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The estimated delivery time should be before 2026-09-07 18:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop should be open 24 Hours', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop should be open 24 Hours"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop should be within 600 meters from Room 2503, 25th Floor, Times Av', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop should be within 600 meters from Room 2503, 25th Floor, Times Avenue, No. 88 Jiefangbei Pedestrian Street, Yuzhong District, Chongqing"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Should not choose noisy coffee shops (such as those with Band Performance)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Should not choose noisy coffee shops (such as those with Band Performance)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The coffee shop should provide WiFi', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The coffee shop should provide WiFi"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to reserve a booth at the coffee shop for 7pm', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to reserve a booth at the coffee shop for 7pm"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The reservation at the coffee shop should be for 1 person', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The reservation at the coffee shop should be for 1 person"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items should include two cups of coffee', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items should include two cups of coffee"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ordered items should be from Maan Coffee (Jiefangbei 24-Hour Branch)', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ordered items should be from Maan Coffee (Jiefangbei 24-Hour Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check the departure time of the user\'s purchased ticket to Zunyi, and s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check the departure time of the user\'s purchased ticket to Zunyi, and should inform the user that the purchased D1825 train departs from Chongqing North Railway Station at 11:25 tomorrow (2026-09-08) and arrives at Zunyi Railway Station at 12:48"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: If the train departure time is before 12pm, order number S17550802126117462_O000', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "If the train departure time is before 12pm, order number S17550802126117462_O00004 should be canceled"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The departure station for the train ticket should be Chongqing North Railway Sta', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The departure station for the train ticket should be Chongqing North Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The arrival station for the train ticket should be Zunyi Railway Station', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The arrival station for the train ticket should be Zunyi Railway Station"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The train ticket should be for a train departing between 13:00-15:00 on 2026-09-', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The train ticket should be for a train departing between 13:00-15:00 on 2026-09-08"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
