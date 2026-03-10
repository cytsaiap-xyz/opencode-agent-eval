# DeepPlanning Shopping Task Level 2 #21

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe and have a few specific items I need to buy. First, I'm searching for a 'Women's Dri-FIT Long-Sleeve Training Top' from Nike. It must be Beige, have an average rating score greater than 4.5, and a stock quantity of more than 800. Next, I need a very popular item delivered quickly, so it must have a transport time of less than 2 days, a total sales volume over 5500, more than 500 five-star ratings, and fewer than 10 two-star ratings. I’m also looking for an Orange item from Zara that has a lot of feedback—specifically, more than 1300 total reviews and over 50 three-star reviews. Finally, I'm looking for something for women from the brand Salomon in Wine Red. It needs to be well-rated with an average score greater than 4.5 and have more than 80 in stock. My budget is between 2458 and 2529.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
