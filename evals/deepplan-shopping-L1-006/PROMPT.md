# DeepPlanning Shopping Task Level 1 #6

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big online shop to refresh my wardrobe. First, I'm looking for a women's product in size M with 'Omni-Wick' in the name that's well-established, so it must have more than 1800 total reviews. Next, I want something from Puma in Wine Red, and I'm being picky about quality, so it needs more than 200 four-star reviews, fewer than 20 two-star reviews, and fewer than 15 one-star reviews. I also need a women's item from Salomon with a stock quantity over 250 and more than 400 five-star ratings, and since I'm in a hurry, it must have a transport time of less than 2 days. For footwear, I'm searching for some Beige 'Canvas Slip-on Shoes' in size 37 with over 400 total reviews and less than 10 two-star ratings. Lastly, I'm looking for a popular item from Vans with 'Classic Canvas Slip-On' in the name; it should have a monthly sales volume over 500, more than 900 total reviews, and a transport time of less than 2 days.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
