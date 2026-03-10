# DeepPlanning Shopping Task Level 1 #41

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my gear ready for an upcoming hiking trip and need to order everything quickly. First, I’m looking for a specific pair of "Women's Canyonview Trail Shoes" from Patagonia; since the trip is soon, the transport time must be less than 2 days, and they need to have more than 80 four-star reviews with fewer than 15 one-star reviews. I'm also eyeing a popular purple item from The North Face called 'Vectiv Escape', which must have an average score over 4.5 and a monthly sales volume of more than 300. To go with them, I need some women's 'Linen-Blend Shorts' in beige for summer that are highly rated, with over 500 five-star reviews and fewer than 5 two-star reviews. For cooler evenings, I need a beige item from Uniqlo suitable for spring/autumn with a stock quantity of more than 80. Finally, I need one more women's product that can ship fast, with a transport time of less than 2 days, an average score greater than 4.5, more than 400 in stock, and fewer than 30 one-star reviews.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
