# DeepPlanning Shopping Task Level 1 #20

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for a last-minute trip and need to order several things for myself, all with very quick delivery. First, I need a men's item from Ralph Lauren with a transport time of less than 2 days; it has to be popular, with over 1200 total reviews and more than 1000 five-star ratings. Next, I need a summer product for men from Salomon that has 'Agile Tech' in its name and a transport time under 2 days. I'm also looking for a size L item with 'Canyonwall' in the name, ensuring it has more than 150 four-star reviews and less than 10 one-star reviews. To go with that, I need something blue with a monthly sales volume over 800, a stock quantity greater than 200, and fewer than 20 two-star reviews. Then, a highly-rated Timberland product with total sales over 1800, less than 10 one-star and two-star ratings each, and a transport time under 2 days. Finally, I need another men's item with a stock quantity of more than 200 and fewer than 5 two-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
