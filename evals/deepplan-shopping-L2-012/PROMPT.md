# DeepPlanning Shopping Task Level 2 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to refresh my wardrobe with a few specific items. First, I'm looking for something pink from the brand Levi's, and I want to ensure it’s well-liked, so it must have fewer than 15 two-star reviews and less than 40 three-star reviews. Next, I need a popular item in size 37 that I can get very quickly, so the transport time must be less than 2. It also needs to have a monthly sales volume over 400, more than 300 total reviews, and fewer than 10 two-star reviews. Lastly, I’m searching for a coffee-colored product from Anta that has an average score greater than 4.5 and more than 80 four-star reviews. Find me some products where the total price is no less than 1086 and no more than 1332.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
