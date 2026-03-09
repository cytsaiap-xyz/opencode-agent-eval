import { expect, test, describe } from 'vitest';
import { buildCart } from './solution';
import taskData from './task-data.json';

describe('DeepPlanning Shopping Task', () => {
  const cart = buildCart();

  test('cart has items', () => {
    expect(cart.items.length).toBeGreaterThan(0);
  });

  test('all items have required fields', () => {
    for (const item of cart.items) {
      expect(item.name).toBeTruthy();
      expect(item.brand).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.matchedRequirement).toBeTruthy();
    }
  });

  test('subtotal matches sum of item prices', () => {
    const sum = cart.items.reduce((s, i) => s + i.price, 0);
    expect(cart.subtotal).toBeCloseTo(sum, 2);
  });

  test('final price is subtotal minus discount', () => {
    expect(cart.finalPrice).toBeCloseTo(cart.subtotal - cart.totalDiscount, 2);
  });

  test('correct level', () => {
    expect(cart.level).toBe(2);
  });

  test('within budget', () => {
    expect(cart.finalPrice).toBeLessThanOrEqual(2458);
  });

  test('no free items unless explicitly free', () => {
    for (const item of cart.items) {
      expect(item.price).toBeGreaterThan(0);
    }
  });

  test('no duplicate matched requirements', () => {
    const reqs = cart.items.map(i => i.matchedRequirement);
    const unique = new Set(reqs);
    expect(unique.size).toBe(reqs.length);
  });
});
