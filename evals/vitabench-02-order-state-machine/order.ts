/**
 * Order State Machine
 *
 * Valid states: created -> confirmed -> preparing -> delivering -> delivered
 *                  \          \           \
 *                   -> cancelled  -> cancelled -> cancelled
 *
 * delivered -> refunded (only within refund window)
 *
 * State transition rules:
 * - created -> confirmed: requires payment info
 * - created -> cancelled: always allowed
 * - confirmed -> preparing: only if items are in stock
 * - confirmed -> cancelled: refund is issued automatically
 * - preparing -> delivering: requires driver assignment
 * - preparing -> cancelled: refund + restock
 * - delivering -> delivered: requires delivery confirmation
 * - delivering -> cancelled: NOT allowed (too late)
 * - delivered -> refunded: only within REFUND_WINDOW_HOURS
 */

export type OrderStatus =
  | 'created'
  | 'confirmed'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface StatusChange {
  from: OrderStatus;
  to: OrderStatus;
  timestamp: Date;
  reason?: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: Date;
  paymentInfo?: { method: string; amount: number };
  driverId?: string;
  deliveredAt?: Date;
  history: StatusChange[];
}

export const REFUND_WINDOW_HOURS = 24;

/**
 * Create a new order with the given items. Status should be 'created'.
 * The order id should be a unique string (use a counter or random).
 * Initialize history as empty array.
 */
export function createOrder(items: OrderItem[]): Order {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Transition an order to a new status.
 * Throws an Error with a descriptive message if the transition is invalid.
 *
 * Validation rules:
 * - created -> confirmed: options.paymentInfo must be provided
 * - confirmed -> preparing: options.itemsInStock must be true
 * - preparing -> delivering: options.driverId must be provided
 * - delivering -> delivered: sets deliveredAt to current time (or options.deliveredAt)
 * - delivered -> refunded: only if within REFUND_WINDOW_HOURS of deliveredAt
 * - *-> cancelled: allowed from created, confirmed, preparing (not delivering/delivered)
 * - All other transitions are invalid
 *
 * On success: update order status, add to history, set relevant fields.
 * Return the updated order.
 */
export function transitionOrder(
  order: Order,
  newStatus: OrderStatus,
  options?: {
    reason?: string;
    paymentInfo?: { method: string; amount: number };
    itemsInStock?: boolean;
    driverId?: string;
    deliveredAt?: Date;
    currentTime?: Date;
  }
): Order {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Calculate the total price of an order (sum of quantity * unitPrice for all items).
 */
export function getOrderTotal(order: Order): number {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Get a summary string of the order's lifecycle.
 * Format: "created -> confirmed -> preparing -> delivering -> delivered"
 * (based on actual history, showing each status the order went through)
 * If order has no history transitions, just return the current status.
 */
export function getOrderLifecycle(order: Order): string {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Given an array of orders, return counts by status.
 * Example: { created: 2, confirmed: 1, delivering: 3, ... }
 * Include all statuses that have at least one order.
 */
export function getOrderStats(orders: Order[]): Partial<Record<OrderStatus, number>> {
  // TODO: implement
  throw new Error('Not implemented');
}
