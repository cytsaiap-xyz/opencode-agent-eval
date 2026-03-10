# DeepPlanning Shopping Task Level 2 #27

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to refresh my wardrobe. First, I need a women's item from Patagonia that's suitable for all seasons. I'm specifically looking for a size 40, and it should have more than 40 three-star reviews. For the changing weather, I'm also searching for something with 'Adizero RC 5' in its name that's designed for spring and autumn. I need this one fast, so the transport time must be less than 2 days, and it must have an average score above 4.5. To go with that, I need to find a women's product from Levi's in a size L. Lastly, I want to find a popular pink item; it must have a monthly sales volume of more than 500, over 700 total reviews, fewer than 10 one-star reviews, and less than 25 three-star reviews. I'm looking for something that costs somewhere in the range of 3718 to 3748.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
