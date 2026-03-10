# DeepPlanning Shopping Task Level 1 #40

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting my wardrobe updated and have a few specific items in mind. First, I'm looking for something in a size 39 that's highly rated, so it must have more than 150 five-star ratings and a total review count greater than 200. I also need a popular women's item in Navy Blue; to make sure it's a best-seller, I want it to have a monthly sales volume of more than 750. Finally, I'm searching for a summer piece from The North Face. It needs to be a size L in Burgundy and have a monthly sales volume of more than 500.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
