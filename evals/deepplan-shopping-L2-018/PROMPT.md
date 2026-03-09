# DeepPlanning Shopping Task Level 2 #18

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I have a last-minute trip coming up, so I need to order a few things with fast shipping. First, I'm looking for a men's item from Ralph Lauren in brown, and it must have a transport time of less than 2. Next, I need something from The North Face that includes 'Tekware Fleece' in its name. This one has to be in a coffee color, have over 850 total reviews, an average score above 4.5, and also a transport time of less than 2 days. Then, I'm looking for a well-regarded product from Under Armour; it must have fewer than 30 one-star reviews and less than 40 two-star reviews. Finally, I need to find a base layer from Uniqlo with 'HEATTECH' in the name. To make sure it's available and well-liked, it needs a stock quantity of more than 850 and over 200 four-star ratings. Find me some products where the total price is no less than 2650 and no more than 2841.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
