# DeepPlanning Shopping Task Level 1 #14

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for an event and need to put an outfit together fast, so everything must have a transport time of less than 2 days. First, I'm looking for a generally well-regarded product with an average score over 4.5 and more than 400 five-star reviews. For my outfit, I want a specific pair of 'Classic Slip-On Canvas Shoes' for women from the brand Vans; they need to be popular, with a monthly sales volume greater than 1200. To go with them, I need the 'Women's Tiro Winterized Fleece Bottoms', ensuring they are top-quality with over 1300 five-star reviews and fewer than 15 two-star reviews. I also need a 'Ribbed Tank Top' for women that has over 250 five-star ratings and is in stock with a quantity of more than 150. Finally, I'm searching for a brown item for women from Adidas that has more than 600 five-star ratings.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
