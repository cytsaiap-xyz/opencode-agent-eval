# DeepPlanning Shopping Task Level 1 #27

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some last-minute online shopping for an upcoming trip and need everything to arrive quickly. First, I'm looking for a camel-colored item suitable for Spring/Autumn with an average score over 4.5 and a transport time of less than 5 days. Next, I need a very specific light grey product with 'HOVR Phantom 3' in its name. It must be in stock with a quantity over 150, have fewer than 5 two-star reviews, and arrive in under 2 days. I also want a popular pink item with a monthly sales volume over 800 and more than 100 four-star reviews, shipped within 5 days. From The North Face, I need an olive green product that sells well—over 700 monthly—has more than 100 four-star reviews, and can get here in less than 2 days. From New Balance, I'm looking for an item in size M with over 800 in stock, also with a transport time under 2 days. Finally, I need a brown item with a total sales volume over 9000, more than 850 total reviews but fewer than 30 three-star reviews, arriving within 5 days.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
