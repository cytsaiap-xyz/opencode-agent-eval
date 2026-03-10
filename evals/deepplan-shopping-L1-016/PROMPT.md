# DeepPlanning Shopping Task Level 1 #16

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting some gear for an upcoming trip with varied activities, and I need everything to arrive quickly. First, I'm looking for an all-seasons product from the brand Salomon that is well-liked, so it must have more than 800 five-star ratings and a transport time of less than 2. I also need something in dark green; to ensure it's available, it needs a stock quantity over 150 and a transport time under 3. For the hiking portion, I'm searching for some 'Trail Shoes' from Patagonia suitable for Spring/Autumn with more than 700 five-star ratings. Lastly, for warmer weather, I need some 'Chino Shorts' for summer. I'm picky about quality, so they must have fewer than 15 three-star reviews and a transport time of less than 2 days.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
