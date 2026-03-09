# DeepPlanning Shopping Task Level 2 #36

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe update and need everything to arrive quickly. First, I’m looking for a navy blue item from Uniqlo with a transport time of less than 3 days. I also need a popular olive green product that can be delivered in under 3 days; it must have a total sales volume over 12,500 and fewer than 20 one-star or two-star reviews. Next, I'm searching for something blue from Bosideng with 'Urban Explorer' in the name, fewer than 5 one-star reviews, and a delivery time under 3 days. Then, I need a popular navy blue item for summer with monthly sales over 800, arriving in less than 2 days. I’m also looking for a very specific 'Men's Performance Logo Tee' in silver, size XL, with more than 50 three-star reviews and a stock quantity over 150. Finally, I'm getting a men's item from Converse that has sold over 9,500 units, with more than 10 three-star reviews but fewer than 5 one-star reviews. Find me some products where the total price is no less than 2585 and no more than 2601.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
