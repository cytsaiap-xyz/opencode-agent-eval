# DeepPlanning Shopping Task Level 2 #20

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my winter wardrobe and have a few specific items I need to find. First, I'm looking for something in a Camel color that can ship very quickly, so the transport time must be less than 2. It has to be a popular choice with a total sales volume over 2500 and fewer than 5 two-star ratings. Next, I'm specifically searching for the 'Women's Off The Wall Corduroy Trousers' that have more than 35 five-star reviews, a stock quantity over 100, and less than a single one-star review. I also need a winter piece in size S that is well-reviewed, with more than 350 total reviews and fewer than 15 three-star reviews. Finally, I'm looking for a size 36 item from Patagonia with 'Snowdrifter' in the name, which must have an average score over 4.5 and fewer than 5 two-star reviews. I'm looking for something that costs somewhere in the range of 3438 to 3684.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
