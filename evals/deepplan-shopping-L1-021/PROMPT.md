# DeepPlanning Shopping Task Level 1 #21

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting some clothes for an upcoming trip and need to order everything together. First, I'm looking for some 'Flowy Trousers' from the brand Zara that are popular and well-liked, so they need to have a monthly sales volume over 850, an average score above 4.5, and fewer than 15 1-star reviews. Then, because it might get cold, I need a winter item from Bosideng in a size M with more than 150 4-star reviews and fewer than 10 1-star reviews. I also need an item from Arc'teryx that has fewer than 5 1-star reviews and a transport time of less than 2 days. Finally, I’m looking for a women's 'Thermal Turtleneck' that is very popular, with more than 950 total reviews, and also has to arrive fast with a transport time of less than 2 days.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
