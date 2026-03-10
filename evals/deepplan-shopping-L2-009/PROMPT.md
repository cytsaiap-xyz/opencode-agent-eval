# DeepPlanning Shopping Task Level 2 #9

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I have a last-minute event this weekend and need to get a few new things for myself, all with fast shipping. First, I'm looking for a popular men's item from Ralph Lauren that's in stock, with more than 180 available and a total sales volume over 2500. It absolutely must have a transport time of less than 2 days. Next, I need something for men from Nike in size L; to ensure quality, it must have fewer than 25 one-star reviews and also arrive in less than 2 days. To go with that, I need a white item for men, also with fewer than 25 one-star reviews and a transport time under 3 days. Finally, I'm searching for a well-reviewed black item for men that has a total number of reviews over 4500 to complete my look. Find me some products where the total price is no less than 2035 and no more than 2371.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
