# DeepPlanning Shopping Task Level 1 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a wardrobe refresh and need a few specific items. First, I'm looking for a popular summer product in Khaki, size M. To ensure it's a trending item, it must have a monthly sales volume of more than 1500, and I'll need it to arrive in less than 5 days. Next, I want a couple of things from the brand Anta. I need a highly-rated item from them suitable for Spring/Autumn, with an average score greater than 4.5. I also need an all-seasons product from Anta in black. This one is more urgent, so the transport time must be less than 2 days, and it should have more than 950 total reviews so I know it's a solid choice.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
