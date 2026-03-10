# DeepPlanning Shopping Task Level 2 #44

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe for various activities and need to find a few specific items. First, I'm looking for the 'Men's Classic 574 Core Sneakers' from the brand New Balance for Men, and I only want to see ones with more than 350 four-star reviews and less than 20 two-star reviews. I also need some black 'Hiking Shoes' delivered quickly, so the transport time must be less than 3. For casual use, I need some men's 'Canvas Sneakers' with over 1300 total reviews and fewer than 100 three-star reviews. To go with them, I need a 'Training Top' from Li-Ning with over 1100 total reviews and less than 15 two-star reviews. Lastly, I'm looking for a popular item with total sales over 12,000, a score above 4.5, fewer than 50 three-star reviews, and a transport time under 10 days. Find me some products where the total price is no less than 2590 and no more than 2681.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
