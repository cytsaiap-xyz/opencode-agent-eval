import { expect, test, describe } from 'vitest';
import {
  findMatchingProducts, findCheapest, findApplicableCoupons,
  buildOptimalCart, buildSmartCart
} from './optimizer';

describe('findMatchingProducts', () => {
  test('filter by brand', () => {
    const results = findMatchingProducts({ brand: 'Nike' });
    expect(results.length).toBeGreaterThanOrEqual(4);
    expect(results.every(p => p.brand === 'Nike')).toBe(true);
  });

  test('filter by category', () => {
    const results = findMatchingProducts({ category: 'shoes' });
    expect(results.length).toBeGreaterThanOrEqual(6);
    expect(results.every(p => p.category === 'shoes')).toBe(true);
  });

  test('filter by color', () => {
    const results = findMatchingProducts({ color: 'white', category: 'shoes' });
    expect(results.every(p => p.color === 'white')).toBe(true);
  });

  test('filter by min rating', () => {
    const results = findMatchingProducts({ minRating: 4.5 });
    expect(results.every(p => p.rating >= 4.5)).toBe(true);
  });

  test('filter by review counts', () => {
    const results = findMatchingProducts({
      minFiveStarReviews: 3000,
      maxOneStarReviews: 50
    });
    expect(results.every(p =>
      p.fiveStarReviews >= 3000 && p.oneStarReviews <= 50
    )).toBe(true);
  });

  test('name contains filter (case insensitive)', () => {
    const results = findMatchingProducts({ nameContains: 'air' });
    expect(results.every(p => p.name.toLowerCase().includes('air'))).toBe(true);
    expect(results.length).toBeGreaterThanOrEqual(2); // Air Max + Air Force
  });

  test('excludes out-of-stock by default', () => {
    const results = findMatchingProducts({ brand: 'Puma', category: 'shoes' });
    // p12 (Puma Suede Classic) is out of stock
    expect(results.every(p => p.inStock)).toBe(true);
  });

  test('sorted by price ascending', () => {
    const results = findMatchingProducts({ brand: 'Nike' });
    for (let i = 1; i < results.length; i++) {
      expect(results[i].price).toBeGreaterThanOrEqual(results[i - 1].price);
    }
  });

  test('combined filters', () => {
    const results = findMatchingProducts({
      brand: 'Nike',
      category: 'shoes',
      minRating: 4.5,
      minTotalReviews: 3000,
    });
    expect(results.every(p =>
      p.brand === 'Nike' && p.category === 'shoes' &&
      p.rating >= 4.5 && p.totalReviews >= 3000
    )).toBe(true);
  });
});

describe('findCheapest', () => {
  test('finds cheapest Nike shoe', () => {
    const product = findCheapest({ brand: 'Nike', category: 'shoes' });
    expect(product).not.toBeNull();
    expect(product!.brand).toBe('Nike');
    expect(product!.price).toBe(100); // Air Force 1
  });

  test('returns null for impossible requirement', () => {
    const product = findCheapest({ brand: 'Reebok' });
    expect(product).toBeNull();
  });
});

describe('findApplicableCoupons', () => {
  test('cross-store coupon triggers at threshold', () => {
    // Two items totaling > $200
    const items = [
      { id: 'p1', name: 'Nike Air Max 90', brand: 'Nike', category: 'shoes', price: 130, rating: 4.5, color: 'white', size: '10', totalReviews: 3500, fiveStarReviews: 2100, oneStarReviews: 45, monthlySales: 450, inStock: true },
      { id: 'p3', name: 'Adidas Ultraboost', brand: 'Adidas', category: 'shoes', price: 190, rating: 4.7, color: 'white', size: '10', totalReviews: 5000, fiveStarReviews: 3800, oneStarReviews: 25, monthlySales: 600, inStock: true },
    ];
    const coupons = findApplicableCoupons(items);
    // Total is 320, so $20 off $200+ should apply
    expect(coupons.some(c => c.id === 'c1')).toBe(true);
  });

  test('same-brand coupon applies', () => {
    const items = [
      { id: 'p1', name: 'Nike Air Max 90', brand: 'Nike', category: 'shoes', price: 130, rating: 4.5, color: 'white', size: '10', totalReviews: 3500, fiveStarReviews: 2100, oneStarReviews: 45, monthlySales: 450, inStock: true },
    ];
    const coupons = findApplicableCoupons(items);
    // Nike total 130 >= 100, so Nike $15 off should apply
    expect(coupons.some(c => c.id === 'c2')).toBe(true);
  });

  test('sorted by discount descending', () => {
    const items = [
      { id: 'p1', name: 'Nike Air Max 90', brand: 'Nike', category: 'shoes', price: 130, rating: 4.5, color: 'white', size: '10', totalReviews: 3500, fiveStarReviews: 2100, oneStarReviews: 45, monthlySales: 450, inStock: true },
      { id: 'p3', name: 'Adidas Ultraboost', brand: 'Adidas', category: 'shoes', price: 190, rating: 4.7, color: 'white', size: '10', totalReviews: 5000, fiveStarReviews: 3800, oneStarReviews: 25, monthlySales: 600, inStock: true },
      { id: 'p7', name: 'Adidas Trefoil Hoodie', brand: 'Adidas', category: 'tops', price: 65, rating: 4.5, color: 'gray', size: 'L', totalReviews: 3200, fiveStarReviews: 2000, oneStarReviews: 40, monthlySales: 500, inStock: true },
    ];
    const coupons = findApplicableCoupons(items);
    for (let i = 1; i < coupons.length; i++) {
      expect(coupons[i].discount).toBeLessThanOrEqual(coupons[i - 1].discount);
    }
  });

  test('no coupons when under all thresholds', () => {
    const items = [
      { id: 'p8', name: 'Puma Essential Tee', brand: 'Puma', category: 'tops', price: 25, rating: 4.1, color: 'white', size: 'M', totalReviews: 4500, fiveStarReviews: 2500, oneStarReviews: 120, monthlySales: 800, inStock: true },
    ];
    const coupons = findApplicableCoupons(items);
    expect(coupons).toHaveLength(0);
  });
});

describe('buildOptimalCart', () => {
  test('builds cart for simple requirements', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Adidas', category: 'tops' },
      ],
    });
    expect(cart).not.toBeNull();
    if (!cart) return;
    expect(cart.items).toHaveLength(2);
    expect(cart.items[0].brand).toBe('Nike');
    expect(cart.items[1].brand).toBe('Adidas');
    expect(cart.subtotal).toBe(cart.items.reduce((s, i) => s + i.price, 0));
  });

  test('picks cheapest per requirement', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
      ],
    });
    expect(cart).not.toBeNull();
    if (!cart) return;
    expect(cart.items[0].price).toBe(100); // Air Force 1 is cheapest
  });

  test('respects budget', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Adidas', category: 'shoes' },
      ],
      budget: 150,
    });
    // Nike AF1 (100) + Adidas Stan Smith (85) = 185 > 150
    expect(cart).toBeNull();
  });

  test('applies coupons when optimizeCoupons is true', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Nike', category: 'tops' },
        { brand: 'Adidas', category: 'shoes' },
      ],
      optimizeCoupons: true,
    });
    expect(cart).not.toBeNull();
    if (!cart) return;
    expect(cart.totalDiscount).toBeGreaterThan(0);
    expect(cart.finalPrice).toBe(cart.subtotal - cart.totalDiscount);
    expect(cart.appliedCoupons.length).toBeGreaterThan(0);
  });

  test('no coupons when optimizeCoupons is false', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Adidas', category: 'shoes' },
      ],
      optimizeCoupons: false,
    });
    expect(cart).not.toBeNull();
    if (!cart) return;
    expect(cart.totalDiscount).toBe(0);
    expect(cart.appliedCoupons).toHaveLength(0);
  });

  test('returns null for impossible requirement', () => {
    const cart = buildOptimalCart({
      requirements: [
        { brand: 'Reebok' }, // doesn't exist
      ],
    });
    expect(cart).toBeNull();
  });
});

describe('buildSmartCart', () => {
  test('may find cheaper final price by upgrading products', () => {
    // With Nike shoes + Nike top, basic cart: AF1(100) + Dri-FIT(35) = 135
    // Nike brand coupon: $15 off $100+ -> 135 - 15 = 120
    // Cross-store: not triggered ($200 threshold)
    //
    // If upgrade to Air Max (130) + Dri-FIT(35) = 165
    // Nike coupon: $15 off -> 150
    // Still no cross-store. Net 150 > 120
    //
    // So basic might be better here. But smart cart should still work.
    const cart = buildSmartCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Nike', category: 'tops' },
      ],
      optimizeCoupons: true,
    });
    expect(cart).not.toBeNull();
    if (!cart) return;
    expect(cart.finalPrice).toBeLessThanOrEqual(cart.subtotal);
  });

  test('smart cart returns best option', () => {
    const smart = buildSmartCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Adidas', category: 'shoes' },
        { brand: 'Adidas', category: 'tops' },
      ],
      optimizeCoupons: true,
    });
    const basic = buildOptimalCart({
      requirements: [
        { brand: 'Nike', category: 'shoes' },
        { brand: 'Adidas', category: 'shoes' },
        { brand: 'Adidas', category: 'tops' },
      ],
      optimizeCoupons: true,
    });
    expect(smart).not.toBeNull();
    expect(basic).not.toBeNull();
    if (!smart || !basic) return;
    // Smart should be <= basic final price
    expect(smart.finalPrice).toBeLessThanOrEqual(basic.finalPrice);
  });
});
