# DeepPlanning Shopping Task Level 2 #1

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my wardrobe for an upcoming trip and need to order a few specific things. First, I'm looking for a 'Henley Top' from the brand Timberland that is popular, with monthly sales over 350 and fewer than 10 one-star reviews. Next, I need something from Ralph Lauren with an average rating score greater than 4.5 that can get here in less than 3 days. I also need a high-performance item for women from Arc'teryx that has to arrive in under 2 days; it must be a bestseller with more than 1900 total sales and over 300 five-star ratings.

Additionally, I'm searching for a black item with an average score above 4.5, monthly sales of more than 200, and fewer than 10 two-star reviews. For layering, I need a 'Tech Base Layer' in size XL that is well-reviewed, with more than 350 total reviews and under 5 two-star reviews. Finally, I'm looking for a beige item for women that is in stock, with a quantity over 300, has fewer than 10 two-star reviews, and can be delivered in less than 3 days. My budget is between 5556 and 6346.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
