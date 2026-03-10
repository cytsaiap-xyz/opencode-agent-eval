# DeepPlanning Shopping Task Level 2 #29

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a major wardrobe refresh and need to find a few specific things. First, I'm looking for two items from Puma. The first one has to be exceptionally well-reviewed, with an average score over 4.5, more than 1100 total reviews, over 900 five-star reviews, and fewer than 40 three-star reviews. The second Puma item I need must be olive green, with an average score greater than 4.5, less than 30 one-star reviews, and more than 180 four-star reviews. To go with that, I need a popular beige product from Levi's that has sold over 3500 units and can be delivered in under 3 days, while also having more than 30 three-star ratings. Finally, I'm getting two pairs of shoes from Vans: the Men's Old Skool Classic Skate Shoes in white, size 44, and an item whose name contains 'Sk8-Hi MTE-1' in silver, with over 120 total reviews and fewer than 10 three-star reviews. Please help me find options that fall within a budget of 2875 to 2878.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
