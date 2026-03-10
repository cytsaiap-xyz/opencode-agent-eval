# DeepPlanning Shopping Task Level 1 #24

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big online shopping session to get gear for the whole year. First, I'm looking for something from Arc'teryx in size 43; to make sure the reviews are balanced, it must have more than 5 three-star ratings. Next, I need a popular item from Columbia that ships fast, with a transport time of less than 2 days, over 1800 in total sales, and more than 10 three-star reviews. For the upcoming cold season, I need a winter product with a high sales volume of over 8500 and more than 200 four-star ratings. For summer, I want an item from Puma that also ships in less than 2 days, with more than 1500 total reviews but fewer than 25 two-star reviews. I’m also searching for a specific navy blue Adidas item with '3-Stripes Track Top' in the name; it must have more than 3000 total reviews and less than 15 one-star reviews. Finally, I’ll get a New Balance product with excellent reviews: over 150 five-star reviews and less than 5 two-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
