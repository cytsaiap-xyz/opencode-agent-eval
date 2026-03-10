# DeepPlanning Shopping Task Level 2 #10

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm in a hurry to get a few things, so everything I'm looking for needs a transport time of less than 2 days. First, I need a popular product with more than 850 total reviews, a monthly sales volume over 200, and excellent ratings—specifically, fewer than 15 two-star and fewer than 25 three-star reviews. Next, I'm searching for a specific women's item from Gucci: the white 'Ace Leather Sneaker'. I also need a light grey item from the brand Anta that's a bestseller, so it must have a monthly sales volume of more than 1200 and less than 25 two-star reviews. Lastly, I'm looking for a very popular women's product that has a total sales volume of more than 6000 and over 1200 total reviews. Please help me find options that fall within a budget of 8316 to 8615.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
