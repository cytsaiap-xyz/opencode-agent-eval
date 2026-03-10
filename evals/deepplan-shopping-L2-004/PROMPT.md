# DeepPlanning Shopping Task Level 2 #4

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting my wardrobe ready for summer and need to buy a few specific things. First, I'm looking for a summer product with 'Canvas Slip-On' in its name. I want something well-reviewed, so it must have more than 300 total reviews, with over 200 of them being five-star, and fewer than 10 two-star and 20 three-star reviews. Next, I need a popular summer item from Nike, and since I'm in a hurry, it has to have a transport time of less than 2 days and more than 900 total reviews. I'm also searching for a product from Bosideng with over 1200 total reviews, a monthly sales volume exceeding 500, and fewer than 15 two-star reviews. To go with these, I need a popular black item with a stock quantity of more than 150 and a monthly sales volume over 300. Finally, I'm looking for a size L item from Peacebird with 'Overshirt' in the name, ensuring it has an average rating above 4.5, over 3500 in total sales, and fewer than 10 one-star reviews. Find me some products where the total price is no less than 3326 and no more than 3739.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
