# DeepPlanning Shopping Task Level 1 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a last-minute event to attend and need to get a few things delivered quickly. First, I'm looking for a product from Zara in Navy Blue that has a transport time of less than 2. Next, I need something from the brand Bosideng that's suitable for Spring/Autumn weather. To ensure it's a popular choice, I want it to have a monthly sales volume of more than 1800 and over 550 four-star ratings, and it also must have a transport time of less than 2 days. While I'm looking at that brand, I'm also searching for another highly-rated Bosideng item with more than 700 five-star ratings, over 100 four-star ratings, and more than 850 total reviews, which must also have a transport time of less than 2.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
