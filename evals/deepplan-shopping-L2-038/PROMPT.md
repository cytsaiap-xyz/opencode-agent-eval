# DeepPlanning Shopping Task Level 2 #38

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to build a few new outfits for myself. First, I'm looking for some popular 'Wide-Leg Trousers', so they need to have a total sales volume over 8500, more than 300 total reviews, and a stock quantity of more than 250. To go with them, I want a specific 'Women's Golden Lurex Knit Top' from the brand Bosideng, and it has to have more than 500 five-star ratings and a transport time of less than 3 days. I also need a highly-rated item with 'Corduroy' in the name; since I need it very fast, it must have a transport time under 2 days, an average score greater than 4.5, and over 300 total reviews. Lastly, I'm searching for a Beige item from Ralph Lauren in size XS. I need it quickly as well, so the transport time has to be less than 2 days, and it must have fewer than 5 one-star reviews. Please help me find options that fall within a budget of 2145 to 2307.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
