# DeepPlanning Shopping Task Level 1 #29

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm overhauling my footwear collection for the whole year and have some specific items I need to buy. First, I'm looking for the Men's Urban Pulse Runner Shoes from Adidas, suitable for all seasons. As I want a popular and well-regarded product, it must have more than 1600 five-star reviews and less than 100 three-star reviews, plus a transport time of less than 2. Next, for transitional weather, I need a product from Timberland that is suitable for Spring/Autumn and has a name containing 'Chukka Boot'; it must have more than 800 total reviews. Lastly, for the colder months, I'm searching for a men's product with 'Winter Hiking Boots' in the name. I need it in size 41, with a stock quantity of more than 100 and a transport time of less than 5.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
