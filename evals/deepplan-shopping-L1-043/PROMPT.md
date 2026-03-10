# DeepPlanning Shopping Task Level 1 #43

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe refresh and need everything delivered quickly, so for all these items, the transport time must be less than 2. First, I'm looking for a specific pair of 'Men's Vaughn Canvas Sneaker' for Spring/Autumn, which must have an average score over 4.5 and fewer than 15 three-star reviews. For the colder weather, I also need a men's product from Anta that's suitable for Winter and has 'Thermal Fleece Pullover' in its name. Then, I’m searching for something from Adidas in light grey and size 44, with an average rating of more than 4.5. To finish my order, I want to find a popular item from Nike that has a stock quantity of more than 800 and fewer than 10 one-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
