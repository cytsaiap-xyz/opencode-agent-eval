# DeepPlanning Shopping Task Level 1 #50

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some shopping to update my wardrobe for the year. First, I'm looking for a popular item for men from The North Face; specifically, it needs to have more than 350 five-star ratings. I also need a very reliable all-seasons product for men, so I'm only interested in something with fewer than 5 one-star reviews. To round things out for the milder weather, I'm searching for an item suitable for spring and autumn. For this one, I want to ensure high quality, so it must have an average score greater than 4.5 and also have fewer than 5 one-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
