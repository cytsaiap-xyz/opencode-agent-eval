# DeepPlanning Shopping Task Level 1 #42

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a last-minute trip coming up, so I need to order a few things that will all arrive quickly. First, I'm looking for something from Anta in size 42 and a Light Grey color; since it's a rush order, I want a popular item with more than 950 total reviews and a transport time of less than 2. Next, I need a men's item for myself from Under Armour in Dark Green, which also has to have a transport time of less than 2. I'm also getting a very highly-rated product from the brand Salomon. To ensure its quality, it must have more than 550 five-star reviews, with fewer than 5 one-star and two-star reviews, and a transport time of less than 2 days. Finally, I need one more men's item from Anta in Beige, and I want to make sure it's definitely available, so the stock quantity must be more than 200.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
