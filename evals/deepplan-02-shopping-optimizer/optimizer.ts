import catalogData from './catalog.json';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  color: string;
  size: string;
  totalReviews: number;
  fiveStarReviews: number;
  oneStarReviews: number;
  monthlySales: number;
  inStock: boolean;
}

export interface Coupon {
  id: string;
  type: 'cross-store' | 'same-brand';
  name: string;
  minSpend: number;
  discount: number;
  applicableBrands: string[] | null; // null = all brands
}

export interface ProductRequirement {
  /** Filter by brand */
  brand?: string;
  /** Filter by category */
  category?: string;
  /** Filter by color */
  color?: string;
  /** Filter by size */
  size?: string;
  /** Minimum rating */
  minRating?: number;
  /** Maximum one-star reviews allowed */
  maxOneStarReviews?: number;
  /** Minimum five-star reviews required */
  minFiveStarReviews?: number;
  /** Minimum total reviews */
  minTotalReviews?: number;
  /** Minimum monthly sales */
  minMonthlySales?: number;
  /** Must be in stock */
  mustBeInStock?: boolean;
  /** Name must contain this substring (case-insensitive) */
  nameContains?: string;
}

export interface ShoppingRequest {
  requirements: ProductRequirement[];
  budget?: number;
  optimizeCoupons?: boolean;
}

export interface ShoppingCart {
  items: Product[];
  subtotal: number;
  appliedCoupons: Coupon[];
  totalDiscount: number;
  finalPrice: number;
}

/**
 * Find products matching a single requirement.
 * Return matching products sorted by price ascending (cheapest first).
 * Only include in-stock products if mustBeInStock is true (default: true if not specified).
 */
export function findMatchingProducts(req: ProductRequirement): Product[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Find the cheapest product matching a requirement.
 * Returns null if no match.
 */
export function findCheapest(req: ProductRequirement): Product | null {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Calculate which coupons can be applied to a set of products.
 *
 * Coupon rules:
 * - "cross-store" coupon: applies if total price of ALL items >= minSpend
 * - "same-brand" coupon: applies if total price of items of the matching brand >= minSpend
 * - Multiple coupons can stack (both cross-store and same-brand can apply)
 * - Only one coupon of each type per brand (pick the best discount)
 *
 * Return applicable coupons sorted by discount descending.
 */
export function findApplicableCoupons(items: Product[]): Coupon[] {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Build the optimal shopping cart:
 * 1. For each requirement, find the cheapest matching product.
 * 2. If budget is specified, total must not exceed budget (before coupons).
 * 3. If optimizeCoupons is true, apply all applicable coupons.
 * 4. Calculate subtotal, discounts, and final price.
 *
 * Return null if any requirement can't be met or budget exceeded.
 */
export function buildOptimalCart(request: ShoppingRequest): ShoppingCart | null {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Advanced: Given a budget range [min, max], find if spending slightly more
 * (choosing a pricier product variant) could unlock a coupon that results
 * in a lower final price after discount.
 *
 * Compare the basic cheapest cart vs. trying each requirement with the
 * next-cheapest product. Return the cart with the lowest final price.
 */
export function buildSmartCart(request: ShoppingRequest): ShoppingCart | null {
  // TODO: implement
  throw new Error('Not implemented');
}
