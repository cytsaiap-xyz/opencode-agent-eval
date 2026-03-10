# DeepPlanning Shopping Task Level 2 #7

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a major wardrobe update and need to get a few things delivered quickly, so I'm being very specific. First, I'm looking for a popular item from Vans that has more than 250 four-star reviews and a transport time of less than two days. For the upcoming cooler weather, I need a spring/autumn product from Adidas in size S. To ensure its quality, it should have fewer than 40 two-star reviews and also needs to arrive in under two days. Next, I'm searching for some size 36 women's 'Lightweight Sneakers' that are a reliable choice, meaning a total sales volume over 2100 and fewer than 15 one-star reviews. For summer, I want an 'All-Star Classic Skort' that's a bestseller with monthly sales over 600, fewer than 5 one-star reviews, and, again, a transport time of less than two days. Lastly, I need a versatile, all-seasons 'Sunbeam' item from Li-Ning with fewer than 10 two-star reviews. I'm looking for something that costs somewhere in the range of 2165 to 2180.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
