# Shopping Cart Optimizer

Implement a shopping cart optimizer in `optimizer.ts` using product catalog and coupon data from `catalog.json`.

## Your Task

Implement all functions in `optimizer.ts`:

1. **`findMatchingProducts(req)`** — Find products matching criteria (brand, category, color, size, ratings, reviews, sales, stock, name substring). Default `mustBeInStock` to true. Sort by price ascending.

2. **`findCheapest(req)`** — Return the cheapest matching product, or null.

3. **`findApplicableCoupons(items)`** — Determine which coupons apply to a product set:
   - **cross-store**: applies when total of ALL items >= minSpend
   - **same-brand**: applies when total of items from that brand >= minSpend
   - Multiple coupons can stack; pick the best discount per brand for same-brand coupons
   - Sort by discount descending

4. **`buildOptimalCart(request)`** — Build cart by finding cheapest product per requirement. Check budget (pre-coupon subtotal). Apply coupons if `optimizeCoupons` is true. Return cart with subtotal, discounts, and final price. Return null if any requirement fails or budget exceeded.

5. **`buildSmartCart(request)`** — Advanced optimization: try upgrading products to potentially unlock bigger coupons for a lower final price. Compare basic cheapest cart vs. alternatives where one requirement uses the next-cheapest product. Return the cart with lowest final price.
