# DeepPlanning Shopping Task Level 2 #41

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I've got a last-minute social event coming up and need to order a few things online. First, I'm looking for a khaki-colored item that I need delivered in less than 2 days. To make sure it's high quality, it must have an average score greater than 4.5, more than 800 five-star reviews, and fewer than 15 three-star reviews. Next, I need a specific item from Gucci in size 38; since I want a popular choice, it should have a monthly sales volume over 80 and more than 100 total reviews. Lastly, I'm searching for something from New Balance that can be transported in less than 5 days and has more than 250 five-star ratings. Find me some products where the total price is no less than 10271 and no more than 10340.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
