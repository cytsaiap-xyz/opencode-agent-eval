# DeepPlanning Shopping Task Level 2 #39

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm putting together a new look for myself and need to find a few specific things. First, I want a popular item in dark green that can get to me quickly, so it needs a transport time of less than 2 days, over 500 in monthly sales volume, and more than 600 five-star ratings. To pair with that, I'm looking for something in a size 42 with 'Classic Urban Explorer' in its name. It should be readily available and well-regarded, with a stock quantity greater than 150 and more than 600 total reviews. Lastly, I'm also looking for another size 42 item, but I'm very focused on quality reviews: it must have an average score above 4.5, more than 70 four-star reviews, and fewer than 10 two-star reviews. Find me some products where the total price is no less than 1986 and no more than 1989.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
