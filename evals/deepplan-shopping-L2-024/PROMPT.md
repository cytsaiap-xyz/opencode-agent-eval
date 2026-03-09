# DeepPlanning Shopping Task Level 2 #24

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting some new clothes for an upcoming winter trip and need everything to arrive quickly. First, I'm looking for a popular brown item with 'Canvas' in its name that has a monthly sales volume of over 1200 and a transport time of less than 5 days. Next, I need something for men from the brand Vans that can get here in under 2 days; I’m picky, so it must have fewer than 15 two-star reviews and less than 40 three-star reviews. For a nicer outfit, I'm searching for a Gucci product with 'Polo Top' in the name, an average score above 4.5, and fewer than 10 three-star reviews. I also need a navy blue item with an average rating over 4.5 stars and more than 200 total reviews. Finally, I'm looking for a men's winter product in size 43 with a monthly sales volume over 100 and a transport time of less than 2 days. Find me some products where the total price is no less than 6962 and no more than 7608.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
