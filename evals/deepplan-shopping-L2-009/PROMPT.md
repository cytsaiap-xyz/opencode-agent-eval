# DeepPlanning Shopping Task Level 2 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I have a last-minute event this weekend and need to get a few new things for myself, all with fast shipping. First, I'm looking for a popular men's item from Ralph Lauren that's in stock, with more than 180 available and a total sales volume over 2500. It absolutely must have a transport time of less than 2 days. Next, I need something for men from Nike in size L; to ensure quality, it must have fewer than 25 one-star reviews and also arrive in less than 2 days. To go with that, I need a white item for men, also with fewer than 25 one-star reviews and a transport time under 3 days. Finally, I'm searching for a well-reviewed black item for men that has a total number of reviews over 4500 to complete my look. Find me some products where the total price is no less than 2035 and no more than 2371.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
