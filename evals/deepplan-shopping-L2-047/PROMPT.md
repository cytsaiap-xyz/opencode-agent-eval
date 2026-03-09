# DeepPlanning Shopping Task Level 2 #47

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big online shopping session to update my wardrobe for the upcoming seasons. First, I need a women's item from Adidas in coffee, and I need it fast, so the transport time must be less than 2 days. For the transitional weather, I'm looking for something from Columbia in light blue that is suitable for Spring/Autumn; it needs to be a size M and have more than 200 in stock. I also need a very well-regarded item in size M that has a stock quantity over 400, more than 1100 total reviews, over 150 four-star reviews, and less than 15 two-star reviews. Then, I'm searching for a Converse product with 'Chuck 70' in its name, but only if it has over 250 in stock, more than 200 four-star ratings, and fewer than 30 one-star ratings. I also want a blue Henley from Timberland in size M with fewer than 5 two-star reviews. To finish, I'm looking for a women's item in size M and orange. I'm looking for something that costs somewhere in the range of 2566 to 2675.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
