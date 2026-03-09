# DeepPlanning Shopping Task Level 2 #6

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `buildCart()` function in `solution.ts`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and need several specific things. First, I'm looking for a beige item that is highly-rated with an average score over 4.5 and has more than 200 in stock. For the cooler Spring/Autumn weather, I need something for women in pink that has excellent reviews—specifically, fewer than 30 three-star reviews but more than 90 four-star reviews. Next, I'm searching for something in a size M and red that can arrive in less than 5 days. For the upcoming summer, I need a very popular Under Armour product with a total sales volume over 4500 and an average score above 4.5 that can be delivered in under 2 days. Finally, I want a size M item from Levi's with more than 400 total reviews, at least 300 of which are 5-star ratings, and a transport time of less than 5 days. I'd like to keep my total spending between 1998 and 2007. Please help me find the products that meet my requirements.

## Your Task

Implement `buildCart()` in `solution.ts`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
