# DeepPlanning Shopping Task Level 1 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting all my gear together for some upcoming spring activities and need to order a few things quickly. First, I'm looking for a popular Puma product in size M. It has to ship fast, so the transport time must be less than 2. To make sure it's in stock and well-regarded, it needs a stock quantity over 350 and more than 800 total reviews. Speaking of Puma, I also want to get the specific 'Puma Cali Dream Metallic Sneaker' in Silver. It must have a stock quantity greater than 250 and more than 1200 total reviews. For my more rugged outings, I need a best-selling item from Salomon for women, in size M and the color Black, with a total sales volume over 15,000. Lastly, I need something from Columbia for the Spring/Autumn season that also has a transport time of less than 2 and more than 50 three-star ratings.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
