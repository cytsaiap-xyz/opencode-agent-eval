# DeepPlanning Shopping Task Level 2 #46

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting some new gear for my summer walks and outdoor activities. First, I need to find a specific product from Li-Ning that has 'Walking Shoes' in its name, and I need it in a size 36. I'm looking at reviews carefully, so I want something with more than 5 three-star ratings but also fewer than 5 two-star ratings. To go with that, I need a popular summer item made for women; it must have a monthly sales volume over 1200 and fewer than 15 one-star reviews. Lastly, I want a well-liked item from the brand Arc'teryx, so I'm looking for something with more than 500 five-star ratings and a monthly sales volume greater than 250. I'd like to keep my total spending between 2094 and 2558. Please help me find the products that meet my requirements.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
