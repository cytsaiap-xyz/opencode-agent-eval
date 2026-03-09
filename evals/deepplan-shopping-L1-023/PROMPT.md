# DeepPlanning Shopping Task Level 1 #23

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe overhaul and need to pick up a few things for every season. First, for summer, I'm looking for a popular item from Levi's that has a stock quantity greater than 200 and a total sales volume of more than 5000. Next, for the colder months, I need some black Down Pants suitable for winter; they should be a popular choice with a total sales volume over 3500. To round things out, I'm searching for a versatile all-seasons product. It must be highly rated, with an average score over 4.5 and more than 3000 total reviews. Since I need it quickly, the transport time has to be less than 2 days, and it should have a stock quantity of more than 800.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
