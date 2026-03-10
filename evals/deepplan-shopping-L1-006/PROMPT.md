# DeepPlanning Shopping Task Level 1 #6

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big online shop to refresh my wardrobe. First, I'm looking for a women's product in size M with 'Omni-Wick' in the name that's well-established, so it must have more than 1800 total reviews. Next, I want something from Puma in Wine Red, and I'm being picky about quality, so it needs more than 200 four-star reviews, fewer than 20 two-star reviews, and fewer than 15 one-star reviews. I also need a women's item from Salomon with a stock quantity over 250 and more than 400 five-star ratings, and since I'm in a hurry, it must have a transport time of less than 2 days. For footwear, I'm searching for some Beige 'Canvas Slip-on Shoes' in size 37 with over 400 total reviews and less than 10 two-star ratings. Lastly, I'm looking for a popular item from Vans with 'Classic Canvas Slip-On' in the name; it should have a monthly sales volume over 500, more than 900 total reviews, and a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
