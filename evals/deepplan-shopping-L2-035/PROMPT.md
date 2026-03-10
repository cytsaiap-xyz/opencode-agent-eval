# DeepPlanning Shopping Task Level 2 #35

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe update for the year and need a few specific pieces. First, I'm looking for a Navy Blue item from the brand Columbia that has an average score greater than 4.5. For the colder weather, I need a women's winter product in a size M and Yellow color, and it must have more than 65 five-star reviews. As for things I need quickly, I'm searching for a women's product from Levi's with an average rating score over 4.5 and a transport time of less than 2 days. For my summer plans, I'm looking for a Gucci item with less than one 1-star review and a transport time under 2 days. To go with that, I also need a brown women's summer item that can also be delivered in less than 2 days. Please help me find options that fall within a budget of 20170 to 20408.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
