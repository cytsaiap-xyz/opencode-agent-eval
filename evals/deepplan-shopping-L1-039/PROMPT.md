# DeepPlanning Shopping Task Level 1 #39

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for a winter trip and need to order everything to arrive quickly. First, I'm looking for a specific winter item from Arc'teryx in Wine Red and size 40, and it must have a transport time of less than 2 days. To go with that, I need a blue product from the brand Columbia. I want to make sure it's popular, so it needs more than 180 five-star ratings and also has to ship in under 2 days. Lastly, I'm searching for some winter-specific 'Winter Hiking Shoes' from Columbia that are targeted for women and have a total review count of more than 300.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
