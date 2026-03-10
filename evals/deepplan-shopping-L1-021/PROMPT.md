# DeepPlanning Shopping Task Level 1 #21

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting some clothes for an upcoming trip and need to order everything together. First, I'm looking for some 'Flowy Trousers' from the brand Zara that are popular and well-liked, so they need to have a monthly sales volume over 850, an average score above 4.5, and fewer than 15 1-star reviews. Then, because it might get cold, I need a winter item from Bosideng in a size M with more than 150 4-star reviews and fewer than 10 1-star reviews. I also need an item from Arc'teryx that has fewer than 5 1-star reviews and a transport time of less than 2 days. Finally, I’m looking for a women's 'Thermal Turtleneck' that is very popular, with more than 950 total reviews, and also has to arrive fast with a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
