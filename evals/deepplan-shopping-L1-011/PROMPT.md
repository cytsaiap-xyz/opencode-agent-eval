# DeepPlanning Shopping Task Level 1 #11

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm updating my workout wardrobe and need to get a few specific things. First, I'm looking for a very popular item in size 43 and Orange; it has to be a bestseller with a monthly sales volume over 850 and more than 12,000 total sales. Next, I need a men's 'Pima Cotton Polo' in Light Grey, size L. Since I need it quickly, it must have a transport time of less than 2 days and be well-reviewed, with over 1800 total reviews. I'm also getting a red 'Men's Air-Flow Performance Training Top' from Li-Ning, ensuring it's in stock with a quantity over 400 and has fewer than 10 one-star reviews. Finally, I'm looking for a white 'Men's National Pride Graphic Training Top' that can also be delivered in under 2 days, has over 3000 total reviews, and fewer than 100 three-star ratings.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
