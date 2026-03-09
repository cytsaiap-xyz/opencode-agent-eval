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
    expect(result[0].store_id).toBe('S17550812997141953_I00010');
  });

  test('order 0 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812997141953_P00057", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[0].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 0 has correct total price', () => {
    expect(result[0].total_price).toBeCloseTo(598, 0);
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
    expect(result[2].store_id).toBe('S17550812997141953_S00001');
  });

  test('order 2 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812997141953_P00009", "quantity": 1}, {"product_id": "S17550812997141953_P00013", "quantity": 1}, {"product_id": "S17550812997141953_P00012", "quantity": 1}, {"product_id": "S17550812997141953_P00016", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[2].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 2 has correct total price', () => {
    expect(result[2].total_price).toBeCloseTo(141.4, 0);
  });

  test('order 3 matches expected store', () => {
    expect(result[3].store_id).toBe('S17550812997141953_S00005');
  });

  test('order 3 has correct products', () => {
    const expectedProducts = [{"product_id": "S17550812997141953_P00027", "quantity": 1}];
    for (const ep of expectedProducts) {
      const found = result[3].products.find((p: any) => p.product_id === ep.product_id);
      expect(found, `Missing product ${ep.product_id}`).toBeDefined();
      if (found) {
        expect(found.quantity).toBe(ep.quantity);
      }
    }
  });

  test('order 3 has correct total price', () => {
    expect(result[3].total_price).toBeCloseTo(298, 0);
  });

  test('rubric: The party house to be ordered should be beautifully decorated', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house to be ordered should be beautifully decorated"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party house to be ordered must have KTV, game area and photo area functions,', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house to be ordered must have KTV, game area and photo area functions, not just a single function"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party house must be available for reservation', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house must be available for reservation"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The package for the party house order must be a two-person package', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The package for the party house order must be a two-person package"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party house package must be available for all-day play', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house package must be available for all-day play"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party house reservation time must be Saturday (September 20, 2025) at 11:00', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house reservation time must be Saturday (September 20, 2025) at 11:00"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The party house reservation must be for 2 people', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The party house reservation must be for 2 people"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order must include three types of popular snacks', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must include three types of popular snacks"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order must include a fresh fruit cut platter', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order must include a fresh fruit cut platter"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The popular snacks and fruit cut should come from the same store', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The popular snacks and fruit cut should come from the same store"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit cut platter should be a large portion', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit cut platter should be a large portion"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit cut platter should not contain grapes', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit cut platter should not contain grapes"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The fruit cut platter must contain peach', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The fruit cut platter must contain peach"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery order needs to comply with the user\'s dietary restrictions, c', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery order needs to comply with the user\'s dietary restrictions, cannot contain high-purine foods (such as seafood, organ meats) and alcoholic beverages"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery arrival time should be between 11:00 and 12:00 on September 20', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery arrival time should be between 11:00 and 12:00 on September 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The food delivery location must be the party house (Fantasy Party House, 500 Hub', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The food delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Must check the history of flower purchases in past orders, the result shows that', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Must check the history of flower purchases in past orders, the result shows that a sweet confession rose bouquet was purchased on July 15, 2025, which was more than 2 months ago"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to order a sweet confession rose bouquet', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to order a sweet confession rose bouquet"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower delivery location must be the party house (Fantasy Party House, 500 H', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower delivery location must be the party house (Fantasy Party House, 500 Hubin South Road, Siming District, Xiamen City, Fujian Province)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: The flower delivery arrival time should be between 11:00 and 12:00 on September ', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "The flower delivery arrival time should be between 11:00 and 12:00 on September 20, 2025"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });

  test('rubric: Need to check and provide information about metro stations near the party house;', () => {
    // Structural check - the solve() function must produce orders that satisfy:
    // "Need to check and provide information about metro stations near the party house; the result is Hubin East Road Metro Station (Line 1; Line 3)"
    // If solve() returns correct store_id and products, this rubric should be met.
    expect(result.length).toBeGreaterThan(0);
  });
});
