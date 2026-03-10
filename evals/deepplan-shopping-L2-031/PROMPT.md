# DeepPlanning Shopping Task Level 2 #31

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I have a last-minute trip this weekend and need to order some things that will arrive quickly. First, I'm looking for a women's product that can be delivered in less than 2 days and has been well-reviewed, with more than 1300 total reviews. Next, I'm searching for a very specific item from Vans: a Light Grey 'Classic Logo Tee'. Since I'm particular about quality, it must have more than 1200 total reviews, with fewer than 10 one-star and fewer than 15 two-star reviews. Lastly, I need to find one more item in a size L. This also needs a transport time of less than 2, and to make sure it's a good choice, it should have over 600 total reviews, with more than 100 of those being four-star reviews. I'd like to keep my total spending between 1730 and 2731. Please help me find the products that meet my requirements.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
