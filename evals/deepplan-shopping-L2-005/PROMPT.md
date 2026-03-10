# DeepPlanning Shopping Task Level 2 #5

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a complete wardrobe refresh and need several pieces to arrive quickly. First, I need a popular all-seasons item that ships fast, so it must have a transport time of less than 2 and a monthly sales volume over 1200 with more than 2000 total reviews. Next, I'm looking for something in white that's exceptionally well-rated, with over 1600 total reviews, more than 1300 of which are 5-star, and fewer than 10 one-star reviews. I also want a beige item from Ralph Lauren with an average score above 4.5, over 200 five-star ratings, and less than 20 three-star ratings. For footwear, I need some Green 'Canvas Sneakers' with over 500 total reviews and minimal complaints—fewer than 15 one-star and 15 two-star reviews. I also found something from Gucci in size 38; it must ship in less than 2 days, have an average score over 4.5, and more than 350 five-star ratings. Lastly, I need some all-seasons 'Training Leggings' from Under Armour that also have a transport time of less than 2 days and fewer than 20 one-star reviews. Find me some products where the total price is no less than 9915 and no more than 10349.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
