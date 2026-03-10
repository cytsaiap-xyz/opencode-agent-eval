# DeepPlanning Shopping Task Level 2 #48

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and need everything to arrive quickly. First, I'm looking for a popular all-seasons item with 'Activist' in its name that has a monthly sales volume over 300, more than 100 four-star reviews, and a transport time of less than 2. For the colder months, I need the specific 'Women's WinterPlush High-Top Sneakers' from Anta. They must have an average rating above 4.5, a stock quantity greater than 100, and also ship in less than 2 days. To go with them, I'm searching for a women's 'Long-Sleeve Top' that has a stock quantity over 200 and fewer than 50 two-star reviews. I also need some winter 'Suede Boots' from Uniqlo in Burgundy, with a transport time of less than 2 days. Finally, for the transitional weather, I'm looking for a brown item from Anta for spring/autumn that has over 400 total reviews and fewer than 5 one-star reviews. Please help me find options that fall within a budget of 2855 to 2906.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
