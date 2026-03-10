# Shopping Cart Optimizer

Implement a shopping cart optimizer in `optimizer.py` using product catalog and coupon data from `catalog.json`.

## Your Task

Implement all functions in `optimizer.py`:

1. **`find_matching_products(req)`** — Find products matching criteria (brand, category, color, size, ratings, reviews, sales, stock, name substring). Default `must_be_in_stock` to True. Sort by price ascending.

2. **`find_cheapest(req)`** — Return the cheapest matching product, or None.

3. **`find_applicable_coupons(items)`** — Determine which coupons apply to a product set:
   - **cross-store**: applies when total of ALL items >= min_spend
   - **same-brand**: applies when total of items from that brand >= min_spend
   - Multiple coupons can stack; pick the best discount per brand for same-brand coupons
   - Sort by discount descending

4. **`build_optimal_cart(request)`** — Build cart by finding cheapest product per requirement. Check budget (pre-coupon subtotal). Apply coupons if `optimize_coupons` is True. Return cart with subtotal, discounts, and final price. Return None if any requirement fails or budget exceeded.

5. **`build_smart_cart(request)`** — Advanced optimization: try upgrading products to potentially unlock bigger coupons for a lower final price. Compare basic cheapest cart vs. alternatives where one requirement uses the next-cheapest product. Return the cart with lowest final price.
