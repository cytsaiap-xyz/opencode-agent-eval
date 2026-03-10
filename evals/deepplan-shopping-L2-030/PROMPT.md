# DeepPlanning Shopping Task Level 2 #30

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting ready for an intense training trip and need to order some gear. First, I'm looking for something from the brand Vans in a size 38; I want to make sure it’s a good product, so it must have fewer than 30 two-star reviews. To go with that, I need a new 'Training Top'. It has to be highly rated, with an average score over 4.5, more than 40 four-star reviews, and a stock quantity of more than 100. Since the trip is soon, I need two other items with a transport time of less than two days. I’m looking for a size XL item from Arc'teryx with 'Alpine' in its name and more than 20 four-star reviews. Lastly, I also need a Ralph Lauren product, also in size XL with that fast shipping, but this one must have fewer than 20 three-star ratings. I'm looking for something that costs somewhere in the range of 3546 to 3561.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
