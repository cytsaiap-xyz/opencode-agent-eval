# DeepPlanning Shopping Task Level 2 #32

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and need everything to arrive quickly. First, for the upcoming cold weather, I need a winter item from Columbia in Burgundy with an average score over 4.5 and a transport time of less than 2. For milder weather, I'm looking for a men's product for Spring/Autumn in Dark Green, also with a high average score over 4.5 and a stock quantity of more than 300. I also need a popular Grey item in size L that ships in less than 2; it must have a monthly sales volume over 1400 and more than 3000 total reviews. While I'm at it, I need another readily available product with a stock quantity over 300 and a transport time under 2, ensuring it's top quality with fewer than 5 one-star reviews. Finally, I'm searching for a specific all-seasons Dark Green item with 'Core Logo Tee' in its name that has more than 300 four-star reviews. Find me some products where the total price is no less than 2330 and no more than 3319.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
