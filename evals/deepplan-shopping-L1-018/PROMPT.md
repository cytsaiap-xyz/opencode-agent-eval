# DeepPlanning Shopping Task Level 1 #18

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm updating my winter wardrobe and need to order a few things online. First, I’m looking for a Fleece Hoodie in the color Camel. It has to be highly rated, with an average score over 4.5 and less than 20 two-star reviews. Since I need it urgently, the transport time must be less than 2 days. To go with that, I need some Winter Trousers from the brand Converse in a size L, and they also need to arrive quickly, so the transport time has to be less than 3 days. Lastly, I'm searching for a popular Khaki item from Zara. I want to be sure it's a well-liked product, so it needs to have a total sales volume over 6500, an average score above 4.5, and more than 350 five-star reviews.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
