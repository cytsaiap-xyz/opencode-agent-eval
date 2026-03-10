# DeepPlanning Shopping Task Level 2 #40

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting some gear together for an impromptu trip, so everything I order needs a transport time of less than 2 days. First, I need a really popular pair of Nike shoes for Spring/Autumn, the 'Men's Air Zoom Pegasus 40 Running Shoes', with more than 2000 total reviews and over 18000 in total sales volume. To go with them, I'm looking for a men's item called 'Konseal FL 2' that is also suitable for Spring/Autumn. For pants, I'm getting the Under Armour 'Terry Tapered Pants', making sure they have fewer than 50 one-star reviews. I'll also get the 'Men's Apex Canyonwall Eco Pants' in Wine Red, as long as they have more than 200 five-star ratings. Then, I need a generic grey item for men with an average score over 4.5 and more than 50 three-star reviews. Finally, I'm looking for a Navy Blue product for men with great ratings — over 200 four-star reviews and less than 10 one-star reviews. Find me some products where the total price is no less than 5190 and no more than 5578.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
