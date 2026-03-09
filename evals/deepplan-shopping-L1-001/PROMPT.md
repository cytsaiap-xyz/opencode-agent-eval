# DeepPlanning Shopping Task Level 1 #1

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm putting together a complete footwear collection and need to order several specific items online. First, I'm looking for something from Nike in orange that has strong customer satisfaction - it needs fewer than 10 one-star reviews and more than 300 four-star reviews to ensure quality. Next, I need the Men's Puma RS-X Reinvention Classic White Sneakers from Puma, and since I need them quickly, the transport time must be less than 2 days. This item should have more than 3000 total reviews but fewer than 30 two-star reviews to confirm it's well-received. I also need an all-seasons product that can arrive within 1 day and has fewer than 30 two-star reviews for reliability. Additionally, I'm specifically looking for the Men's Aerios FL 2 GTX Trail Shoe in gold, which must have more than 200 five-star reviews and fewer than 5 one-star reviews to guarantee excellent quality. Finally, I need a summer item from Vans that's highly rated with more than 250 five-star reviews and fewer than 5 one-star reviews.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
