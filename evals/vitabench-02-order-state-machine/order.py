"""
Order State Machine

Valid states: created -> confirmed -> preparing -> delivering -> delivered
                 \\          \\           \\
                  -> cancelled  -> cancelled -> cancelled

delivered -> refunded (only within refund window)

State transition rules:
- created -> confirmed: requires payment info
- created -> cancelled: always allowed
- confirmed -> preparing: only if items are in stock
- confirmed -> cancelled: refund is issued automatically
- preparing -> delivering: requires driver assignment
- preparing -> cancelled: refund + restock
- delivering -> delivered: requires delivery confirmation
- delivering -> cancelled: NOT allowed (too late)
- delivered -> refunded: only within REFUND_WINDOW_HOURS
"""

from datetime import datetime

REFUND_WINDOW_HOURS = 24


def create_order(items: list[dict]) -> dict:
    """
    Create a new order with the given items. Status should be 'created'.
    The order id should be a unique string (use a counter or random).
    Initialize history as empty list.

    items: list of dicts with product_id, name, quantity, unit_price.

    Return an order dict with keys:
        id (str), items (list), status (str), created_at (datetime),
        payment_info (optional dict), driver_id (optional str),
        delivered_at (optional datetime), history (list of status change dicts).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def transition_order(order: dict, new_status: str, options: dict | None = None) -> dict:
    """
    Transition an order to a new status.
    Raises an Exception with a descriptive message if the transition is invalid.

    Validation rules:
    - created -> confirmed: options["payment_info"] must be provided
    - confirmed -> preparing: options["items_in_stock"] must be True
    - preparing -> delivering: options["driver_id"] must be provided
    - delivering -> delivered: sets delivered_at to current time (or options["delivered_at"])
    - delivered -> refunded: only if within REFUND_WINDOW_HOURS of delivered_at
    - *-> cancelled: allowed from created, confirmed, preparing (not delivering/delivered)
    - All other transitions are invalid

    On success: update order status, add to history, set relevant fields.
    Return the updated order.

    Each history entry is a dict with: from_status, to, timestamp (datetime), reason (optional).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def get_order_total(order: dict) -> float:
    """
    Calculate the total price of an order (sum of quantity * unit_price for all items).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def get_order_lifecycle(order: dict) -> str:
    """
    Get a summary string of the order's lifecycle.
    Format: "created -> confirmed -> preparing -> delivering -> delivered"
    (based on actual history, showing each status the order went through)
    If order has no history transitions, just return the current status.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def get_order_stats(orders: list[dict]) -> dict:
    """
    Given a list of orders, return counts by status.
    Example: {"created": 2, "confirmed": 1, "delivering": 3, ...}
    Include all statuses that have at least one order.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
