# Order State Machine

You are a service agent that processes order management scenarios. Orders follow a strict state machine with these transitions:

```
created -> confirmed -> preparing -> delivering -> delivered
  \           \            \
   -> cancelled  -> cancelled  -> cancelled

delivered -> refunded (only within 24-hour refund window)
```

## State Transition Rules

- `created -> confirmed`: requires payment info
- `confirmed -> preparing`: requires items to be in stock
- `preparing -> delivering`: requires a driver assignment
- `delivering -> delivered`: sets delivery timestamp
- `delivered -> refunded`: only if within 24 hours of delivery time
- Cancellation allowed from: created, confirmed, preparing (NOT from delivering or delivered)
- All other transitions are invalid

## Your Task

Analyze the order state machine rules above and trace through the following scenarios. Write your results to `answer.json`.

### Scenarios

1. **full_lifecycle**: An order with items `[{product_id: "p1", name: "Widget", quantity: 2, unit_price: 10}, {product_id: "p2", name: "Gadget", quantity: 1, unit_price: 25}]` goes through the full happy path: created -> confirmed (with card payment) -> preparing (items in stock) -> delivering (driver "driver-42") -> delivered. Provide the final order state including: `status`, `total` (sum of qty*price), `lifecycle` (string like "created -> confirmed -> preparing -> delivering -> delivered"), `history_length`.

2. **cancel_from_created**: Same items, order is created then immediately cancelled with reason "changed mind". Provide: `status`, `lifecycle`, `cancel_reason`.

3. **cancel_from_confirmed**: Same items, order is created -> confirmed -> cancelled. Provide: `status`, `lifecycle`.

4. **cancel_from_preparing**: Same items, created -> confirmed -> preparing -> cancelled. Provide: `status`, `lifecycle`.

5. **refund_within_window**: Full lifecycle order delivered at "2025-01-01 10:00:00". Refund requested at "2025-01-01 12:00:00" (2 hours later, within 24h). Provide: `status`, `lifecycle`.

6. **refund_outside_window**: Full lifecycle order delivered at "2025-01-01 10:00:00". Refund requested at "2025-01-03 10:00:00" (48 hours later). Provide: `status` ("rejected"), `error` (description of why).

7. **invalid_cancel_from_delivering**: Order in delivering state, attempt to cancel. Provide: `status` ("rejected"), `error`.

8. **invalid_skip_states**: Order just created, attempt to go directly to delivering. Provide: `status` ("rejected"), `error`.

9. **invalid_backwards**: Order confirmed, attempt to go back to created. Provide: `status` ("rejected"), `error`.

10. **order_total**: For items `[{quantity: 2, unit_price: 10}, {quantity: 1, unit_price: 25}]`, what is the total? Provide: `total`.

11. **order_stats**: Given 4 orders: 2 in "created" state, 1 in "confirmed" state, 1 in "cancelled" state. Provide: `stats` object with counts per status.

## Output Format

Write `answer.json` with scenario names as keys, each containing the requested fields.
