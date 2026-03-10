# DeepPlanning Shopping Task Level 2 #46

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting some new gear for my summer walks and outdoor activities. First, I need to find a specific product from Li-Ning that has 'Walking Shoes' in its name, and I need it in a size 36. I'm looking at reviews carefully, so I want something with more than 5 three-star ratings but also fewer than 5 two-star ratings. To go with that, I need a popular summer item made for women; it must have a monthly sales volume over 1200 and fewer than 15 one-star reviews. Lastly, I want a well-liked item from the brand Arc'teryx, so I'm looking for something with more than 500 five-star ratings and a monthly sales volume greater than 250. I'd like to keep my total spending between 2094 and 2558. Please help me find the products that meet my requirements.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
