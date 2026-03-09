# DeepPlanning Shopping Task Level 3 #6

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a new wardrobe and need to get several popular items that I know will be reliable choices. First, I'm looking for something with "Old Skool" in the name that's proven to be a bestseller - it needs to have more than 11,000 total sales and over 900 monthly sales to ensure it's a solid choice. Next, I want to find a women's product that has "Sk8-Hi" in the name and maintains excellent quality with fewer than 2 two-star reviews. Finally, I need another item with "Sk8-Hi" in the name that's both popular and well-stocked, requiring more than 900 total reviews, over 300 monthly sales, stock quantity above 100, and fewer than 50 three-star reviews to guarantee availability and customer satisfaction.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
