# DeepPlanning Shopping Task Level 2 #45

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh online and have a few very specific items I need to find. First, I’m looking for something from Nike in a purple color, size XL, and I need it quickly, so the transport time must be less than 2 days. I also need a grey item that can arrive in under 2 days, but for this one, I’m looking for quality, so it needs to have fewer than 15 two-star and fewer than 35 three-star reviews. To go with that, I need something in size 38 suitable for all seasons, with an excellent track record of fewer than 10 three-star reviews. Then, I'm searching for some blue 'Platform Sneakers' from the brand Peacebird that have more than 650 five-star reviews and a transport time of less than 5 days. I also need a 'Hoodie' that will arrive in less than 2 days, and I want to see a full range of feedback, so it should have more than 10 two-star and more than 40 three-star reviews. Finally, I’m looking for a popular black 'Silk Blouse' for women with a monthly sales volume of over 100. I'm looking for something that costs somewhere in the range of 11383 to 18153.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
