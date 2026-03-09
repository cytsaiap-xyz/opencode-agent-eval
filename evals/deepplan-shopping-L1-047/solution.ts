import taskData from './task-data.json';

export interface CartItem {
  name: string;
  brand: string;
  price: number;
  color?: string;
  size?: string;
  rating?: number;
  totalReviews?: number;
  monthlySales?: number;
  matchedRequirement: string;  // which requirement this item satisfies
}

export interface AppliedCoupon {
  type: 'cross-store' | 'same-brand';
  discount: number;
  description: string;
}

export interface ShoppingCart {
  items: CartItem[];
  subtotal: number;
  appliedCoupons: AppliedCoupon[];
  totalDiscount: number;
  finalPrice: number;
  level: number;
}

/**
 * Parse the shopping query and build the optimal cart.
 * Level 1: Find the cheapest products matching all requirements.
 *
 * Read taskData.query for the full shopping request.
 * Extract each product requirement and find matching items.
 */
export function buildCart(): ShoppingCart {
  // TODO: implement
  // Parse the query to extract product requirements
  // For each requirement, find/define the matching product
  // Apply budget constraints (Level 2+)
  // Optimize coupons (Level 3)
  throw new Error('Not implemented');
}
