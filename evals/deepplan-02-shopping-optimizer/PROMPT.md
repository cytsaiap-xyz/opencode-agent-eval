# Shopping Cart Optimizer

You are a shopping assistant agent. Read the product catalog and coupon data in `catalog.json` and answer the following shopping queries.

## Coupon Rules

- **cross-store**: Applies when total of ALL items >= min_spend
- **same-brand**: Applies when total of items from that brand >= min_spend
- Multiple coupons can stack; pick the best discount per brand for same-brand coupons
- Sort applicable coupons by discount descending

## Your Task

Read `catalog.json` and answer each query below. Write your results to `answer.json`.

### Queries

1. **nike_products**: Find all in-stock Nike products. Sort by price ascending. Provide: array of product objects.

2. **shoes_category**: Find all in-stock products in "shoes" category. Sort by price ascending. Provide: array.

3. **high_rated**: Find all in-stock products with rating >= 4.5. Sort by price ascending. Provide: array.

4. **name_contains_air**: Find all in-stock products whose name contains "air" (case-insensitive). Sort by price ascending. Provide: array.

5. **combined_nike_shoes**: Find in-stock Nike shoes with rating >= 4.5 and total_reviews >= 3000. Sort by price ascending. Provide: array.

6. **cheapest_nike_shoe**: Find the cheapest in-stock Nike shoe. Provide: single product object with price.

7. **cheapest_impossible**: Find the cheapest "Reebok" product. Provide: `null` (brand doesn't exist).

8. **coupons_high_spend**: Find applicable coupons for items: Nike Air Max 90 ($130) + Adidas Ultraboost ($190) = $320 total. Check cross-store ($20 off $200+) and brand-specific coupons. Sort by discount descending. Provide: array of coupon objects with `id` and `discount`.

9. **coupons_nike_brand**: Find applicable coupons for just Nike Air Max 90 ($130). Nike total $130 >= $100 threshold. Provide: array of coupon objects.

10. **coupons_under_threshold**: Find applicable coupons for Puma Essential Tee ($25). Should be none (under all thresholds). Provide: empty array.

11. **cart_simple**: Build a cart with requirements: [{brand: "Nike", category: "shoes"}, {brand: "Adidas", category: "tops"}]. Find cheapest per requirement. Provide: cart with `items`, `subtotal`, `applied_coupons` (empty), `total_discount` (0), `final_price`.

12. **cart_cheapest**: Build a cart with just [{brand: "Nike", category: "shoes"}]. Verify cheapest is picked ($100 Air Force 1). Provide: cart.

13. **cart_over_budget**: Build a cart with [{brand: "Nike", category: "shoes"}, {brand: "Adidas", category: "shoes"}], budget $150. Nike AF1 ($100) + Adidas Stan Smith ($85) = $185 > $150. Provide: `null`.

14. **cart_with_coupons**: Build a cart with [{brand: "Nike", category: "shoes"}, {brand: "Nike", category: "tops"}, {brand: "Adidas", category: "shoes"}], optimize_coupons: true. Provide: cart with `total_discount` > 0, `applied_coupons` list, `final_price` = subtotal - total_discount.

15. **smart_cart**: Build an optimized cart for [{brand: "Nike", category: "shoes"}, {brand: "Adidas", category: "shoes"}, {brand: "Adidas", category: "tops"}] with coupon optimization. Try upgrading products to unlock bigger coupons. Provide: cart with lowest possible `final_price`.

## Output Format

Write `answer.json` with query names as keys containing the requested data.
