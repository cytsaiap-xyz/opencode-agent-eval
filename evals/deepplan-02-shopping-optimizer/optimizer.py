import json
import os

_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_dir, "catalog.json")) as _f:
    catalog_data = json.load(_f)


def find_matching_products(req: dict) -> list[dict]:
    """
    Find products matching a single requirement.
    Return matching products sorted by price ascending (cheapest first).
    Only include in-stock products if must_be_in_stock is True (default: True if not specified).

    req keys (all optional):
        brand, category, color, size, min_rating, max_one_star_reviews,
        min_five_star_reviews, min_total_reviews, min_monthly_sales,
        must_be_in_stock, name_contains.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_cheapest(req: dict) -> dict | None:
    """
    Find the cheapest product matching a requirement.
    Returns None if no match.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def find_applicable_coupons(items: list[dict]) -> list[dict]:
    """
    Calculate which coupons can be applied to a set of products.

    Coupon rules:
    - "cross-store" coupon: applies if total price of ALL items >= min_spend
    - "same-brand" coupon: applies if total price of items of the matching brand >= min_spend
    - Multiple coupons can stack (both cross-store and same-brand can apply)
    - Only one coupon of each type per brand (pick the best discount)

    Return applicable coupons sorted by discount descending.
    Each coupon is a dict with: id, type, name, min_spend, discount, applicable_brands.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def build_optimal_cart(request: dict) -> dict | None:
    """
    Build the optimal shopping cart:
    1. For each requirement, find the cheapest matching product.
    2. If budget is specified, total must not exceed budget (before coupons).
    3. If optimize_coupons is True, apply all applicable coupons.
    4. Calculate subtotal, discounts, and final price.

    Return None if any requirement can't be met or budget exceeded.

    request keys:
        requirements (list of requirement dicts),
        budget (optional number),
        optimize_coupons (optional bool).

    Return dict with: items, subtotal, applied_coupons, total_discount, final_price.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")


def build_smart_cart(request: dict) -> dict | None:
    """
    Advanced: Given a budget range [min, max], find if spending slightly more
    (choosing a pricier product variant) could unlock a coupon that results
    in a lower final price after discount.

    Compare the basic cheapest cart vs. trying each requirement with the
    next-cheapest product. Return the cart with the lowest final price.
    """
    # TODO: implement
    raise NotImplementedError("Not implemented")
