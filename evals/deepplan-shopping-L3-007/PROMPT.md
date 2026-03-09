# DeepPlanning Shopping Task Level 3 #7

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm planning a complete outfit upgrade and need to order a few specific items online. First, I'm looking for a product with "Trail Performance Long-Sleeve" in its name that has an average rating above 4.5 and a stock quantity over 100 to ensure availability. Next, I need something that's clearly popular and well-reviewed, with more than 100 five-star reviews, over 140 total reviews, more than 20 four-star reviews, and fewer than 5 three-star reviews to show consistent quality. Finally, I'm searching for a women's item in size XL that has "Ruffle" in the product name and more than 5 three-star reviews in its rating distribution, as I want something with a decent amount of feedback to gauge fit and style accurately.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
