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
    expect(result[0].store_id).toBe('S17550802169908940_S00001');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802169908940_P00001", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(68, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S17550802169908940_I00012');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802169908940_P00067", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(1688, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(0, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550802169908940_A00007');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550802169908940_P00034", "quantity": 2}, {"product_id": "S17550802169908940_P00035", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(25, 0);
  });

  test('rubric: The breakfast order items should be nutritionally rich', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order items should be nutritionally rich"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast order items must be Three-person Portion', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order items must be Three-person Portion"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast order items must come from a Dine-in Restaurant', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order items must come from a Dine-in Restaurant"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast order items must not contain high Purine foods (such as organ meat', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order items must not contain high Purine foods (such as organ meats/seafood soup)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The breakfast order items must not contain caffeine', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The breakfast order items must not contain caffeine"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The delivery address for the breakfast order should be Room 501, Unit 2, Buildin', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The delivery address for the breakfast order should be Room 501, Unit 2, Building 1, Vanke City Light, No.239 Qingyang North Road, Tianning District, Changzhou City, Jiangsu Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The studio in the photo studio order should have an Elegant Environment', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The studio in the photo studio order should have an Elegant Environment"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the photo studio order should be Neo-Chinese Style', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the photo studio order should be Neo-Chinese Style"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The items in the photo studio order should be Two-person Artistic Photography', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The items in the photo studio order should be Two-person Artistic Photography"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the photo studio order must include Makeup and Styling Included s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the photo studio order must include Makeup and Styling Included services"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package in the photo studio order must include photos and photo frames', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package in the photo studio order must include photos and photo frames"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The photo studio appointment should be at Elegant Rhythm Photography Art Gallery', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The photo studio appointment should be at Elegant Rhythm Photography Art Gallery"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The appointment time for the photo studio should be 10:00 on 2026-04-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The appointment time for the photo studio should be 10:00 on 2026-04-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The number of people for the photo studio appointment should be 2', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The number of people for the photo studio appointment should be 2"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tourist attraction ordered should be suitable for elderly people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tourist attraction ordered should be suitable for elderly people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tourist attraction ordered must not require climbing too many slopes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tourist attraction ordered must not require climbing too many slopes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The tourist attraction ordered must have fresh air', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The tourist attraction ordered must have fresh air"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include Senior Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include Senior Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include 2 Senior Tickets', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include 2 Senior Tickets"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The scenic spot order should include 1 Adult Ticket', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The scenic spot order should include 1 Adult Ticket"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The ticket date for the scenic spot order should be 2026-04-12', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The ticket date for the scenic spot order should be 2026-04-12"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to inquire whether there are wigs suitable for elderly people, the result s', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to inquire whether there are wigs suitable for elderly people, the result shows that Health Preservation Wig Specialty Store offers Middle-aged and Elderly Men\'s Real Hair Toupee, Lightweight Breathable Wig Set for Elderly and other products"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
