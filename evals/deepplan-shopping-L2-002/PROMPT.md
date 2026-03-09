# DeepPlanning Shopping Task Level 2 #2

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting gear for a last-minute trip, so I need everything with a transport time of less than 2 days. First, I'm looking for a size L item from Salomon with 'Winter Trail' in its name. To go with that, I'll also need another Salomon product, specifically in light blue. Next, I need something from Nike in brown, and I want to ensure it's high quality, so it must have fewer than 15 two-star reviews. I'm also searching for a men's item in black, size L, and to make sure it's available, it needs to have a stock quantity over 80. Lastly, I'm trying to find a popular Khaki item with 'Performance Chinos' in the name that has a total sales volume of more than 3200. I'm looking for something that costs somewhere in the range of 3828 to 4214.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
