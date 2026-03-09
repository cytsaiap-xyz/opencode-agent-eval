# DeepPlanning Shopping Task Level 2 #33

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting my wardrobe ready for the new season and need to order a few things. First, I'm looking for a special item for women from the brand Gucci; to ensure it's in stock and well-regarded, I need it to have a stock quantity greater than 40, a transport time of less than 5 days, and fewer than 5 one-star reviews. Next, I need a popular beige item from Uniqlo that's suitable for spring/autumn, has a monthly sales volume over 1400, and can arrive in less than 3 days. I’m also searching specifically for a beige 'Pleated Midi Skirt' with an average score greater than 4.5 and less than one 1-star rating, and it must ship in less than 2 days. Finally, I'm also looking for a popular silver product from Uniqlo that has more than 650 total reviews and a monthly sales volume over 1800. Please help me find options that fall within a budget of 19222 to 19507.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
