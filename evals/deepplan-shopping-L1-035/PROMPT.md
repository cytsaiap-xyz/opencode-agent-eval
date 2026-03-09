# DeepPlanning Shopping Task Level 1 #35

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe refresh for the upcoming year and need a few specific things. First, for an event happening soon, I need an item from Gucci in Brown, size 43. Since it's urgent, the transport time must be less than 2 days, and it needs to have more than 5 four-star reviews. Next, getting ready for the cold, I'm looking for some 'Winter Boots' from Peacebird in the color Khaki, with more than 100 total reviews. For the milder Spring and Autumn seasons, I want a popular product from Adidas with an average score over 4.5, a monthly sales volume of more than 1000, and fewer than 20 one-star reviews. Lastly, I need another popular item in Navy Blue with a monthly sales volume over 800 and more than 90 four-star reviews; this one also needs a transport time of less than 2 days.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
