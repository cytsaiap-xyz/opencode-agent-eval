# DeepPlanning Shopping Task Level 2 #16

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm putting together some outfits for a trip and need to order several items. First, I'm looking for 'Linen-Blend Shorts' that are well-liked, with over 600 five-star ratings and more than 800 total reviews. Since I need them soon, the transport time must be less than 3 days. I also want a pair of 'Women's Summer Utility Shorts' for summer from the brand Timberland. To go with that, I'm looking for a popular women's item from Arc'teryx in Olive Green, size M, with a total sales volume over 350. Next, I need something from The North Face that's in stock, with a quantity over 150 and an average score above 4.5. I also need a yellow item in size M that can be delivered very quickly, in under 2 days. Finally, I'm searching for a specific dark green item in size 38 with 'Rhyton' in its name that has more than 150 five-star ratings. I'm looking for something that costs somewhere in the range of 13928 to 13951.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
