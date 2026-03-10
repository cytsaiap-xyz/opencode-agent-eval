# DeepPlanning Shopping Task Level 2 #38

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to build a few new outfits for myself. First, I'm looking for some popular 'Wide-Leg Trousers', so they need to have a total sales volume over 8500, more than 300 total reviews, and a stock quantity of more than 250. To go with them, I want a specific 'Women's Golden Lurex Knit Top' from the brand Bosideng, and it has to have more than 500 five-star ratings and a transport time of less than 3 days. I also need a highly-rated item with 'Corduroy' in the name; since I need it very fast, it must have a transport time under 2 days, an average score greater than 4.5, and over 300 total reviews. Lastly, I'm searching for a Beige item from Ralph Lauren in size XS. I need it quickly as well, so the transport time has to be less than 2 days, and it must have fewer than 5 one-star reviews. Please help me find options that fall within a budget of 2145 to 2307.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
