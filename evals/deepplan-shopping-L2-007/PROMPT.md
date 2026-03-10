# DeepPlanning Shopping Task Level 2 #7

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a major wardrobe update and need to get a few things delivered quickly, so I'm being very specific. First, I'm looking for a popular item from Vans that has more than 250 four-star reviews and a transport time of less than two days. For the upcoming cooler weather, I need a spring/autumn product from Adidas in size S. To ensure its quality, it should have fewer than 40 two-star reviews and also needs to arrive in under two days. Next, I'm searching for some size 36 women's 'Lightweight Sneakers' that are a reliable choice, meaning a total sales volume over 2100 and fewer than 15 one-star reviews. For summer, I want an 'All-Star Classic Skort' that's a bestseller with monthly sales over 600, fewer than 5 one-star reviews, and, again, a transport time of less than two days. Lastly, I need a versatile, all-seasons 'Sunbeam' item from Li-Ning with fewer than 10 two-star reviews. I'm looking for something that costs somewhere in the range of 2165 to 2180.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
