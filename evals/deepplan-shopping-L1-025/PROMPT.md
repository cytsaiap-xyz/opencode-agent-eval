# DeepPlanning Shopping Task Level 1 #25

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm putting together a few new outfits and need to find some specific pieces. First, I’m looking for a black 'Long-Sleeve Training Top' that's suitable for all seasons; to ensure it’s well-regarded, it must have more than 200 four-star ratings. To pair with that, I need some khaki 'Utility Cargo Pants' from the brand Vans that are popular, so they should have a monthly sales volume of more than 500. While I'm at it, I want another item from Vans for the spring/autumn season. It has to be a bestseller, with a total sales volume over 12,000, more than 1,000 total reviews, and fewer than 10 one-star reviews. Lastly, I urgently need something in light blue. It must have a transport time of less than 3 days, a stock quantity greater than 200, and fewer than 15 two-star reviews.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
