# DeepPlanning Shopping Task Level 1 #32

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some urgent online shopping to update my wardrobe and need everything to arrive quickly. First, I'm looking for a popular item from Levi's that has a monthly sales volume of more than 450. Since I'm in a hurry, the transport time must be less than 2 days. To go with that, I also need something from Nike in a size 42 that's suitable for all seasons. It must be well-regarded, with more than 800 four-star ratings, and also needs to have a transport time of less than 2 days. Finally, I'm searching for a silver item in size XXL. I want to make sure it's available and has been a steady seller, so it must have a stock quantity of over 100 and a total sales volume of more than 550.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
