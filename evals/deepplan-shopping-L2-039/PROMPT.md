# DeepPlanning Shopping Task Level 2 #39

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm putting together a new look for myself and need to find a few specific things. First, I want a popular item in dark green that can get to me quickly, so it needs a transport time of less than 2 days, over 500 in monthly sales volume, and more than 600 five-star ratings. To pair with that, I'm looking for something in a size 42 with 'Classic Urban Explorer' in its name. It should be readily available and well-regarded, with a stock quantity greater than 150 and more than 600 total reviews. Lastly, I'm also looking for another size 42 item, but I'm very focused on quality reviews: it must have an average score above 4.5, more than 70 four-star reviews, and fewer than 10 two-star reviews. Find me some products where the total price is no less than 1986 and no more than 1989.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
