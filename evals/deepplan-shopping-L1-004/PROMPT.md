# DeepPlanning Shopping Task Level 1 #4

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe update for all seasons and have a few specific things I need to find. First, for summer, I'm looking for a pink 'Active Performance Tank Top' from Puma with an average score greater than 4.5. For the transitional Spring/Autumn weather, I need a women's item in light grey that has 'Cloudfoam Stride' in the name and has been well-reviewed, specifically with more than 130 four-star reviews and over 15 three-star reviews. I also need to find a popular camel-colored item from Bosideng with a monthly sales volume of more than 550, and since I need it urgently, the transport time must be less than 2 days. For my feet, I'm after a size 43 'Sunbeam Strider' from Li-Ning with an average score over 4.5 and fewer than 10 one-star reviews. Lastly, I just need a simple summer item from Converse in size XXL.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
