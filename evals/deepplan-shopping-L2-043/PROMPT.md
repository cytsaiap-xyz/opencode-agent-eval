# DeepPlanning Shopping Task Level 2 #43

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, implement the `build_cart()` function in `solution.py`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a complete refresh of my athletic wardrobe and need to get a few things quickly. To start, I'm looking for a highly-rated product with an average score above 4.5, more than 800 five-star reviews, and less than 60 three-star reviews. Next, I need a specific item called 'Men's Essentials 3-Stripes Tee' in black that can ship in less than 2 days. It must be well-stocked with a quantity over 1800 and have fewer than 100 one-star reviews. For winter, I want a black item from Li-Ning with over 90 four-star reviews and fewer than 10 two-star reviews. Then, for the summer, I need another item that arrives in less than 2 days, with over 350 five-star ratings and less than 25 three-star ratings. I also need something from Salomon in size 43, with a transport time of less than 2, more than 700 five-star ratings, and less than 10 one-star ratings. Lastly, I'm searching for a Li-Ning product in size L with 'Performance Training Top' in its name and an average rating score over 4.5. I'd like to keep my total spending between 3842 and 3864. Please help me find the products that meet my requirements.

## Your Task

Implement `build_cart()` in `solution.py`. Parse the user's request to identify:
1. Each product requirement (brand, color, size, rating, review constraints, etc.)
2. Budget constraint (Level 2+)
3. Coupon optimization (Level 3)

Return a cart with items matching all stated requirements. Extract specific constraints like brand names, color, minimum ratings, review thresholds, monthly sales minimums, etc. from the query text.
