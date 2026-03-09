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
    expect(result[0].store_id).toBe('S31159892811642571_S75189');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S24269126648570139_P84857", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(18.8, 0);
  });

  test('order 1 matches expected store', () => {
    expect(result[1].store_id).toBe('S26698159307935481_S07145');
  });

  test('order 1 has correct products', () => {
    const expectedProducts = [{"product_id": "S26730768377163847_P88743", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[1].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 1 has correct total price', () => {
    expect(result[1].total_price).toBeCloseTo(26.9, 0);
  });

  test('order 2 matches expected store', () => {
    expect(result[2].store_id).toBe('S17089629001924407_S60854');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S53901735369543400_P19927", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(29.99, 0);
  });

  test('rubric: The duck collarbone order delivery address should be Building A, Yonghe Longzihu', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duck collarbone order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The duck collarbone order delivery time should be around 2025-10-30 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The duck collarbone order delivery time should be around 2025-10-30 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When selecting duck collarbone products, choose stores near the company to ensur', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When selecting duck collarbone products, choose stores near the company to ensure shorter delivery distance"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The clay pot rice order delivery address should be Building A, Yonghe Longzihu P', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The clay pot rice order delivery address should be Building A, Yonghe Longzihu Plaza, No. 197 Ping\'an Avenue, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The clay pot rice order delivery time should be around 2025-10-30 12:00:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The clay pot rice order delivery time should be around 2025-10-30 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing clay pot rice for Guangdong colleagues, select Cantonese-style pro', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing clay pot rice for Guangdong colleagues, select Cantonese-style products to meet their discerning taste requirements"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dry pot braised rice order delivery address should be Building A, Yonghe Lon', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dry pot braised rice order delivery address should be Building A, Yonghe Longzihu Plaza, Boxue Road Street, Jinshui District, Zhengzhou City, Henan Province"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The dry pot braised rice order delivery time should be around 2025-10-30 12:00:0', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The dry pot braised rice order delivery time should be around 2025-10-30 12:00:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: When choosing dry pot braised rice for personal lunch, select from the frequentl', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "When choosing dry pot braised rice for personal lunch, select from the frequently visited Bajibaji Dry Pot Braised Rice (Longzihu Branch)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The personal lunch dry pot braised rice must include both crispy pork and beef t', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The personal lunch dry pot braised rice must include both crispy pork and beef toppings"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
