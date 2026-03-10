# DeepPlanning Shopping Task Level 1 #3

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my wardrobe ready for the cold weather and have a few specific things I need to buy. First, I'm looking for some orange High-Top Canvas Shoes from Converse that are suitable for winter. I'm being selective, so they must have more than 100 four-star reviews and fewer than 10 two-star reviews. I also need a yellow item from Arc'teryx that can arrive quickly, with a transport time of less than 2 days and more than 600 total reviews. To go with that, I'm searching for something from the brand Bosideng in burgundy, size XXL, with an average score above 4.5 and also a transport time of less than 2 days. I also want a popular white winter product with more than 300 five-star ratings. Finally, I need to find something silver in size 45 from Levi's.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
