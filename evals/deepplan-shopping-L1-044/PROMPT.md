# DeepPlanning Shopping Task Level 1 #44

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I have a trip coming up very soon and need to get a few things delivered fast. First, I'm looking for a product named 'Blaze Runner' in size 41. It needs to be suitable for all seasons and have fewer than 5 one-star reviews. Next, I need something from the brand Salomon in Olive Green. It has to be highly rated, with more than 250 five-star reviews and over 300 reviews in total, and a transport time of less than 2. I also need a Ralph Lauren item with 'Winter Boot' in its name that has more than 400 total reviews and a transport time of less than 2. Then, I'm searching for a men's item from Vans in the color black, with fewer than 70 three-star reviews, and a transport time of less than 2. Finally, I'm looking for something light grey and suitable for all seasons that has 'GORE-TEX' in the name, and it must also be delivered in less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
