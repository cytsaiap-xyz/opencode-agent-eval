# DeepPlanning Shopping Task Level 1 #26

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe update for the year. First, for winter, I’m looking for a specific ‘Sherpa Lined Hoodie’ in Burgundy, size XL. It needs to have more than 150 four-star reviews and a transport time of less than 2. For the summer, I'm also getting a women's item with 'V-Neck' in the name that has a transport time of less than 5 days. For footwear, I need something from Puma in size '39' and Black, with less than 5 one-star reviews. I'm also getting a popular black item for women from The North Face that has a monthly sales volume over 400 and more than 100 four-star reviews. Finally, I'm looking for a high-quality size XL product from Columbia with an average score greater than 4.5 and fewer than 50 three-star reviews.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
