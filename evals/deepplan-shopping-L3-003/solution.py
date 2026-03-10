import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "task-data.json")) as _f:
    task_data = json.load(_f)


def build_cart() -> dict:
    """
    Parse the shopping query and build the optimal cart.
    Level 3: Find optimal products with coupon optimization to minimize final price within budget.

    Read task_data["query"] for the full shopping request.
    Extract each product requirement and find matching items.

    Return a dict with keys:
        items (list of dicts with name, brand, price, color, size, rating,
               total_reviews, monthly_sales, matched_requirement),
        subtotal (number),
        applied_coupons (list of dicts with type, discount, description),
        total_discount (number),
        final_price (number),
        level (int).
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
