# DeepPlanning Shopping Task Level 1 #13

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some urgent online shopping for myself and need a few things delivered quickly. First, I'm looking for a product from the 'Trefoil Series' with an average rating over 4.5. It must be in stock with a quantity of more than 800, and crucially, the transport time has to be less than 2. Next, for the winter, I need a popular beige item from Under Armour in size 42 that has a total sales volume of more than 2400. I also need a men's item from the Salomon brand that's highly-rated, with fewer than 5 two-star reviews and a transport time under 2. Lastly, I'm looking for another men's item in size 42, this time from Vans, which also needs a transport time of less than 2.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
