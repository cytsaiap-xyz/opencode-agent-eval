# DeepPlanning Shopping Task Level 2 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe for the changing seasons and need to get a few things. To start, I'm looking for a winter item in a brown color. Since I value quality, it must have an average score greater than 4.5 and more than 400 total reviews. Next, I'm searching for something from Bosideng in a coffee color, specifically in a size M. While looking at that brand, I also need a popular all-seasons product from Bosideng with a monthly sales volume of more than 450. Finally, I need to get a wine red item from the brand Anta, and because I'm in a hurry, it must have a transport time of less than 2 days. Find me some products where the total price is no less than 1794 and no more than 2681.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
