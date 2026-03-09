# DeepPlanning Shopping Task Level 2 #22

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting my gear ready for the new season and need to order a few things for myself. First, I'm looking for a popular item that's suitable for spring or autumn. It needs to be well-liked, so it must have more than 400 five-star ratings and over 90 four-star ratings. I also want to ensure it’s available, with a stock quantity of more than 100. Next, I'm looking for something for women from the brand Converse that can get to me in less than 3 days. I’m only interested in top-rated products with an average score over 4.5 and a stock quantity of more than 300. I also need an item in size XS with an average score greater than 4.5 and more than 800 total reviews, and it absolutely must have a transport time of less than 2 days. Finally, I'm looking for the red 'Speedcross Trail Running Shoes' from Salomon, with an average score over 4.5 and more than 1200 total reviews. Please help me find options that fall within a budget of 3234 to 3265.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
