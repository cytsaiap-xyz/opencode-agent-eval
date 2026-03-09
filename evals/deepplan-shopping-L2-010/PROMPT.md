# DeepPlanning Shopping Task Level 2 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm in a hurry to get a few things, so everything I'm looking for needs a transport time of less than 2 days. First, I need a popular product with more than 850 total reviews, a monthly sales volume over 200, and excellent ratings—specifically, fewer than 15 two-star and fewer than 25 three-star reviews. Next, I'm searching for a specific women's item from Gucci: the white 'Ace Leather Sneaker'. I also need a light grey item from the brand Anta that's a bestseller, so it must have a monthly sales volume of more than 1200 and less than 25 two-star reviews. Lastly, I'm looking for a very popular women's product that has a total sales volume of more than 6000 and over 1200 total reviews. Please help me find options that fall within a budget of 8316 to 8615.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
