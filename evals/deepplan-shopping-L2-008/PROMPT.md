# DeepPlanning Shopping Task Level 2 #8

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe for the changing seasons and need to get a few things. To start, I'm looking for a winter item in a brown color. Since I value quality, it must have an average score greater than 4.5 and more than 400 total reviews. Next, I'm searching for something from Bosideng in a coffee color, specifically in a size M. While looking at that brand, I also need a popular all-seasons product from Bosideng with a monthly sales volume of more than 450. Finally, I need to get a wine red item from the brand Anta, and because I'm in a hurry, it must have a transport time of less than 2 days. Find me some products where the total price is no less than 1794 and no more than 2681.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
