# DeepPlanning Shopping Task Level 2 #19

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm putting together a few key pieces for my winter wardrobe and need everything to arrive very quickly. First, I’m looking for a specific winter item for myself from the brand Gucci; it has to be a size 39 with an average score greater than 4.5 and have a name containing 'Horsebit'. Next, I need another women's item in size 39. I'm looking for something highly-rated, so it must have an average score over 4.5 and more than 600 five-star ratings. Since I'm in a hurry, its transport time must be less than 2 days. Finally, I'm searching for some 'Athleisure Bottoms' for women from the brand Li-Ning. It's important that this is a popular item, so its total sales volume must be over 8000, and it also needs a transport time of less than 2 days. My budget is between 11127 and 11136.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
