import { expect, test, describe } from 'vitest';
import {
  createOrder, transitionOrder, getOrderTotal, getOrderLifecycle, getOrderStats,
  type Order, type OrderItem
} from './order';

const sampleItems: OrderItem[] = [
  { productId: 'p1', name: 'Widget', quantity: 2, unitPrice: 10 },
  { productId: 'p2', name: 'Gadget', quantity: 1, unitPrice: 25 },
];

describe('createOrder', () => {
  test('creates order with correct initial state', () => {
    const order = createOrder(sampleItems);
    expect(order.status).toBe('created');
    expect(order.items).toEqual(sampleItems);
    expect(order.history).toEqual([]);
    expect(order.id).toBeTruthy();
    expect(order.createdAt).toBeInstanceOf(Date);
  });

  test('each order gets unique id', () => {
    const o1 = createOrder(sampleItems);
    const o2 = createOrder(sampleItems);
    expect(o1.id).not.toBe(o2.id);
  });
});

describe('transitionOrder - happy path', () => {
  test('created -> confirmed with payment', () => {
    const order = createOrder(sampleItems);
    const updated = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    expect(updated.status).toBe('confirmed');
    expect(updated.paymentInfo).toEqual({ method: 'card', amount: 45 });
    expect(updated.history).toHaveLength(1);
    expect(updated.history[0].from).toBe('created');
    expect(updated.history[0].to).toBe('confirmed');
  });

  test('confirmed -> preparing with stock', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    expect(order.status).toBe('preparing');
    expect(order.history).toHaveLength(2);
  });

  test('preparing -> delivering with driver', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-42' });
    expect(order.status).toBe('delivering');
    expect(order.driverId).toBe('driver-42');
  });

  test('delivering -> delivered', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-42' });
    order = transitionOrder(order, 'delivered');
    expect(order.status).toBe('delivered');
    expect(order.deliveredAt).toBeInstanceOf(Date);
  });

  test('delivered -> refunded within window', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-42' });
    const deliveredTime = new Date('2025-01-01T10:00:00Z');
    order = transitionOrder(order, 'delivered', { deliveredAt: deliveredTime });
    // Refund 2 hours later - within 24h window
    const refundTime = new Date('2025-01-01T12:00:00Z');
    order = transitionOrder(order, 'refunded', { currentTime: refundTime });
    expect(order.status).toBe('refunded');
  });
});

describe('transitionOrder - cancellation', () => {
  test('cancel from created', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'cancelled', { reason: 'changed mind' });
    expect(order.status).toBe('cancelled');
    expect(order.history[0].reason).toBe('changed mind');
  });

  test('cancel from confirmed', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'cancelled');
    expect(order.status).toBe('cancelled');
  });

  test('cancel from preparing', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'cancelled');
    expect(order.status).toBe('cancelled');
  });
});

describe('transitionOrder - invalid transitions', () => {
  test('cannot cancel from delivering', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-1' });
    expect(() => transitionOrder(order, 'cancelled')).toThrow();
  });

  test('cannot cancel from delivered', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-1' });
    order = transitionOrder(order, 'delivered');
    expect(() => transitionOrder(order, 'cancelled')).toThrow();
  });

  test('cannot confirm without payment', () => {
    const order = createOrder(sampleItems);
    expect(() => transitionOrder(order, 'confirmed')).toThrow();
  });

  test('cannot prepare without stock', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    expect(() => transitionOrder(order, 'preparing', { itemsInStock: false })).toThrow();
  });

  test('cannot deliver without driver', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    expect(() => transitionOrder(order, 'delivering')).toThrow();
  });

  test('cannot refund outside window', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-1' });
    const deliveredTime = new Date('2025-01-01T10:00:00Z');
    order = transitionOrder(order, 'delivered', { deliveredAt: deliveredTime });
    // Try to refund 48 hours later
    const lateRefund = new Date('2025-01-03T10:00:00Z');
    expect(() => transitionOrder(order, 'refunded', { currentTime: lateRefund })).toThrow();
  });

  test('cannot skip states (created -> delivering)', () => {
    const order = createOrder(sampleItems);
    expect(() => transitionOrder(order, 'delivering')).toThrow();
  });

  test('cannot go backwards (confirmed -> created)', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    expect(() => transitionOrder(order, 'created')).toThrow();
  });
});

describe('getOrderTotal', () => {
  test('calculates correct total', () => {
    const order = createOrder(sampleItems);
    expect(getOrderTotal(order)).toBe(45); // 2*10 + 1*25
  });

  test('handles single item', () => {
    const order = createOrder([{ productId: 'p1', name: 'X', quantity: 3, unitPrice: 7 }]);
    expect(getOrderTotal(order)).toBe(21);
  });
});

describe('getOrderLifecycle', () => {
  test('shows full lifecycle', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'preparing', { itemsInStock: true });
    order = transitionOrder(order, 'delivering', { driverId: 'driver-1' });
    order = transitionOrder(order, 'delivered');
    const lifecycle = getOrderLifecycle(order);
    expect(lifecycle).toBe('created -> confirmed -> preparing -> delivering -> delivered');
  });

  test('shows cancelled lifecycle', () => {
    let order = createOrder(sampleItems);
    order = transitionOrder(order, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    order = transitionOrder(order, 'cancelled');
    const lifecycle = getOrderLifecycle(order);
    expect(lifecycle).toBe('created -> confirmed -> cancelled');
  });

  test('shows just status if no transitions', () => {
    const order = createOrder(sampleItems);
    expect(getOrderLifecycle(order)).toBe('created');
  });
});

describe('getOrderStats', () => {
  test('counts orders by status', () => {
    const orders: Order[] = [];
    orders.push(createOrder(sampleItems)); // created

    let o2 = createOrder(sampleItems);
    o2 = transitionOrder(o2, 'confirmed', {
      paymentInfo: { method: 'card', amount: 45 }
    });
    orders.push(o2); // confirmed

    orders.push(createOrder(sampleItems)); // created

    let o4 = createOrder(sampleItems);
    o4 = transitionOrder(o4, 'cancelled');
    orders.push(o4); // cancelled

    const stats = getOrderStats(orders);
    expect(stats.created).toBe(2);
    expect(stats.confirmed).toBe(1);
    expect(stats.cancelled).toBe(1);
  });
});
