# DeepPlanning Shopping Task Level 1 #30

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for a last-minute hiking trip and need to order some gear. First, I need a pair of Waterproof Trail Hiking Shoes in Olive Green, size 38. Since I need them to be reliable, I'm looking for a pair with an average rating score over 4.5 and less than 5 one-star reviews. My trip is very soon, so the transport time must be less than 2. Next, I need a pair of women's Hiking Trousers in Camel that are highly rated, specifically with more than 400 five-star ratings and over 90 four-star ratings. To complete the outfit, I'm looking for a Silver Lightweight Baselayer that can also be delivered in less than 2 days. I want to be sure it's a good product, so it must have more than 150 total reviews but fewer than 10 three-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
