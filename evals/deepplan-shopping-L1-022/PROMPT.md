# DeepPlanning Shopping Task Level 1 #22

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting gear for a last-minute trip, so I need everything with a transport time of less than 2 days. First, I need some 'Thermal Padded Trousers' and I'm looking for a pair with fewer than 15 two-star reviews and less than 40 three-star reviews. To go with them, I need some women's 'Leather Boots' from Levi's. For layering, I'm looking for a 'Canyonlands Half-Zip' suitable for Spring/Autumn that's well-liked, with more than 550 total reviews and over 450 five-star ratings. I also need a blue item from Patagonia in size 40 that has fewer than 10 one-star reviews. Lastly, I'm getting two things from Bosideng: a 'Lurex Long-Sleeve Top' in size L with an average score over 4.5 and more than 1000 total reviews, and another beige item from them that also has an average score greater than 4.5.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
