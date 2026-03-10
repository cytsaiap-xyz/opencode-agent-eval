# DeepPlanning Shopping Task Level 1 #48

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe upgrade and need to find several specific items. First, I'm looking for a popular Gucci Silk Blouse in size M; it has to have a monthly sales volume of more than 40, and since I need it soon, the transport time must be less than 2. To go with that, I want another highly-rated item from Gucci with more than 400 five-star reviews, fewer than 10 three-star reviews, less than one two-star review, and also a transport time of less than 2 days. Next, I'm searching for two pieces from Levi's. One must have excellent ratings, with more than 700 five-star ratings and less than 10 two-star ratings. The other Levi's item needs to be Camel colored and have fewer than 5 one-star reviews. Finally, for the colder months, I'm looking for a Wool Turtleneck for Winter in size M, and it must have less than one two-star review.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
