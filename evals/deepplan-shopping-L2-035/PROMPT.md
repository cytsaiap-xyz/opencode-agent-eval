# DeepPlanning Shopping Task Level 2 #35

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe update for the year and need a few specific pieces. First, I'm looking for a Navy Blue item from the brand Columbia that has an average score greater than 4.5. For the colder weather, I need a women's winter product in a size M and Yellow color, and it must have more than 65 five-star reviews. As for things I need quickly, I'm searching for a women's product from Levi's with an average rating score over 4.5 and a transport time of less than 2 days. For my summer plans, I'm looking for a Gucci item with less than one 1-star review and a transport time under 2 days. To go with that, I also need a brown women's summer item that can also be delivered in less than 2 days. Please help me find options that fall within a budget of 20170 to 20408.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
