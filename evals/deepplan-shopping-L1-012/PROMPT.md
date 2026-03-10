# DeepPlanning Shopping Task Level 1 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a last-minute event this weekend and need to get an outfit together quickly. First, I'm looking for a highly-rated product that can arrive in under 2 days. To ensure quality, it must have more than 1800 total reviews, with over 250 four-star reviews, but fewer than 50 three-star and less than 10 one-star reviews. To go with that, I need something very specific in Olive Green, size 38. Since I can't try it on, I want a popular item with a total sales volume over 4500, more than 1800 total reviews, and at least 300 four-star reviews. Lastly, I'm looking for a popular item from the brand Converse that has an average score greater than 4.5, a monthly sales volume of over 800, and fewer than 10 one-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
