# DeepPlanning Shopping Task Level 2 #1

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe for an upcoming trip and need to order a few specific things. First, I'm looking for a 'Henley Top' from the brand Timberland that is popular, with monthly sales over 350 and fewer than 10 one-star reviews. Next, I need something from Ralph Lauren with an average rating score greater than 4.5 that can get here in less than 3 days. I also need a high-performance item for women from Arc'teryx that has to arrive in under 2 days; it must be a bestseller with more than 1900 total sales and over 300 five-star ratings.

Additionally, I'm searching for a black item with an average score above 4.5, monthly sales of more than 200, and fewer than 10 two-star reviews. For layering, I need a 'Tech Base Layer' in size XL that is well-reviewed, with more than 350 total reviews and under 5 two-star reviews. Finally, I'm looking for a beige item for women that is in stock, with a quantity over 300, has fewer than 10 two-star reviews, and can be delivered in less than 3 days. My budget is between 5556 and 6346.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
