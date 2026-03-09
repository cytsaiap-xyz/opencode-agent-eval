# DeepPlanning Shopping Task Level 1 #28

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm refreshing my wardrobe and need a few specific items delivered quickly. First, I'm looking for an all-seasons item in Olive Green, size M, that can be transported in less than 2 days and has more than 550 five-star ratings. Next, I need something for women that's suitable for the Spring/Autumn season and is well-reviewed, so it must have more than 300 total reviews and over 80 four-star ratings. I’m also searching for a very specific item from Arc'teryx that has 'Aerios FL 2' in the name, is a size 37, and has an average rating score greater than 4.5. Additionally, I want to find some 'Platform Sneakers' with an average score over 4.5, more than 70 four-star reviews, and a transport time of less than 3 days. Finally, I'm looking for a purple 'Vertex Trail Shoe' in size 37 that can be delivered in less than 2 days.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
