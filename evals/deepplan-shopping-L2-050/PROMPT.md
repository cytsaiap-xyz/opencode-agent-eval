# DeepPlanning Shopping Task Level 2 #50

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm upgrading my workout gear and need to order everything to arrive quickly. First, I’m looking for a pair of Men's React Phantom Running Shoes from Nike with more than 1100 total reviews, fewer than 10 one-star reviews, and a transport time under 2 days. To go with them, I need a specific item with 'Compression Mock' in the name that has over 850 five-star reviews, less than 10 one-star reviews, and can also be delivered in under 2 days. I also need to find a popular white item with more than 250 five-star ratings and a monthly sales volume over 100. Next, I need something in camel with more than 5 three-star reviews that also ships in less than 2 days. I am also looking for an olive green product with fewer than 10 one-star reviews and a transport time of less than 5 days. Finally, I need one last item with a stock quantity over 20, an average rating score above 4.5, fewer than 5 three-star reviews, and a transport time of less than 2 days. Please help me find options that fall within a budget of 18875 to 19997.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
