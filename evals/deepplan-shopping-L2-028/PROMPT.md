# DeepPlanning Shopping Task Level 2 #28

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm refreshing my wardrobe for the changing seasons and need everything to arrive quickly. First, I'm looking for a pullover suitable for Spring/Autumn. It needs to be a well-reviewed item with more than 600 total reviews and fewer than 40 three-star reviews, and importantly, the transport time must be less than 2 days. Next, I need a women's item with long sleeves from the brand Salomon. It has to be a bestseller, with a total sales volume over 3100 and fewer than 15 three-star reviews, also with a transport time of less than 2 days. For the summer, I'm looking for a black product from Under Armour with a stock quantity of more than 200. Finally, I need a size XXL item from Arc'teryx that has more than 50 four-star reviews and can also be delivered in less than 2 days. My budget is between 1935 and 1977.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
