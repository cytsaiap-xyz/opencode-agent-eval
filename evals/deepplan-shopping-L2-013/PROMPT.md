# DeepPlanning Shopping Task Level 2 #13

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting ready for a last-minute trip and need some things delivered fast. First, I'm looking for a very specific item with the name 'Skater Cropped Hoodie' in Light Grey, size M. It needs to be popular, so its total sales volume must be over 3400 with a rating above 4.5 stars, and it must have a transport time of less than 2. I also need another top for women, specifically a sweatshirt in size M, that can also be delivered with a transport time under 2. For footwear, I'm searching for some 'Waterproof Hiking Shoes' from the brand Columbia in Beige, size 38, for women. Additionally, I need a reliable all-seasons item that has fewer than 15 one-star reviews and less than 30 three-star reviews, with a transport time of less than 2. Lastly, I want something for trail running, and I'm very particular about quality, so it must have fewer than 5 two-star and fewer than 5 three-star reviews, and also arrive in under 2 for transport time. My budget is between 3465 and 3785.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
