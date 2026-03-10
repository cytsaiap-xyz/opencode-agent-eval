# Order State Machine

Implement an order management system in `order.py`. Orders follow a strict state machine with these transitions:

```
created -> confirmed -> preparing -> delivering -> delivered
  \           \            \
   -> cancelled  -> cancelled  -> cancelled

delivered -> refunded (only within 24-hour refund window)
```

## Your Task

Implement all functions in `order.py`:

1. **`createOrder(items)`** — Create a new order with status 'created' and empty history.

2. **`transitionOrder(order, newStatus, options?)`** — Transition an order to a new status following strict rules:
   - `created -> confirmed`: requires `options.paymentInfo`
   - `confirmed -> preparing`: requires `options.itemsInStock === true`
   - `preparing -> delivering`: requires `options.driverId`
   - `delivering -> delivered`: sets `deliveredAt` (use `options.deliveredAt` or current time)
   - `delivered -> refunded`: only if within 24 hours of `deliveredAt` (use `options.currentTime` or current time to check)
   - Cancellation allowed from: created, confirmed, preparing (NOT delivering or delivered)
   - All other transitions should throw an Error
   - Record each transition in the order's `history` array

3. **`getOrderTotal(order)`** — Sum of quantity * unitPrice for all items.

4. **`getOrderLifecycle(order)`** — Return the order's status path as a string like `"created -> confirmed -> preparing"` based on history.

5. **`getOrderStats(orders)`** — Count orders by status.
