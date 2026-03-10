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

1. **`create_order(items)`** — Create a new order with status 'created' and empty history.

2. **`transition_order(order, new_status, options=None)`** — Transition an order to a new status following strict rules:
   - `created -> confirmed`: requires `options["payment_info"]`
   - `confirmed -> preparing`: requires `options["items_in_stock"] == True`
   - `preparing -> delivering`: requires `options["driver_id"]`
   - `delivering -> delivered`: sets `delivered_at` (use `options["delivered_at"]` or current time)
   - `delivered -> refunded`: only if within 24 hours of `delivered_at` (use `options["current_time"]` or current time to check)
   - Cancellation allowed from: created, confirmed, preparing (NOT delivering or delivered)
   - All other transitions should raise an Exception
   - Record each transition in the order's `history` list

3. **`get_order_total(order)`** — Sum of quantity * unit_price for all items.

4. **`get_order_lifecycle(order)`** — Return the order's status path as a string like `"created -> confirmed -> preparing"` based on history.

5. **`get_order_stats(orders)`** — Count orders by status.
