# DeepPlanning Shopping Task Level 1 #2

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting all my gear ready for an upcoming outdoor trip. First, I'm looking for a very specific item: the 'Men's Atom LT Insulated Crew Neck Pullover' from Arc'teryx in Navy Blue. I'm only interested if it's highly rated, with an average score over 4.5, more than 50 four-star ratings, and fewer than 5 one-star ratings. Next, I need something from New Balance in a size 43 that has fewer than 10 one-star reviews. I also need some All Seasons pants with 'Trekking Pants' in the name, in a size XL. Since I need them quickly, the transport time must be less than 2 days, and they should have fewer than 20 three-star ratings. Lastly, I'm looking for one more men's item in size XL that is well-stocked with a quantity greater than 180 and has more than 40 four-star ratings.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
