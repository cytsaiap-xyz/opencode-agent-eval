# DeepPlanning Shopping Task Level 2 #47

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big online shopping session to update my wardrobe for the upcoming seasons. First, I need a women's item from Adidas in coffee, and I need it fast, so the transport time must be less than 2 days. For the transitional weather, I'm looking for something from Columbia in light blue that is suitable for Spring/Autumn; it needs to be a size M and have more than 200 in stock. I also need a very well-regarded item in size M that has a stock quantity over 400, more than 1100 total reviews, over 150 four-star reviews, and less than 15 two-star reviews. Then, I'm searching for a Converse product with 'Chuck 70' in its name, but only if it has over 250 in stock, more than 200 four-star ratings, and fewer than 30 one-star ratings. I also want a blue Henley from Timberland in size M with fewer than 5 two-star reviews. To finish, I'm looking for a women's item in size M and orange. I'm looking for something that costs somewhere in the range of 2566 to 2675.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
