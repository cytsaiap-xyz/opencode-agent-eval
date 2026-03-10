# DeepPlanning Shopping Task Level 1 #47

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe refresh for different seasons and occasions. First, for a summer event, I'm looking for a popular silver item from Zara with a monthly sales volume over 900, and since I need it soon, the transport time must be less than 5 days. Next, I need a staple piece for women from Uniqlo in a coffee color; I want something well-vetted, so it must have more than 1800 total reviews. I'm also searching for a best-selling item from The North Face that has a total sales volume of over 2800 and an excellent average rating above 4.5. Finally, to prepare for winter, I need something in beige that is highly rated, specifically with fewer than 5 one-star reviews but more than 40 four-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
