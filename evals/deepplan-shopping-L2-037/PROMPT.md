# DeepPlanning Shopping Task Level 2 #37

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a big wardrobe refresh and have a very specific list of things I need to buy. First, I'm looking for a Khaki Training Top that's highly popular, with a total sales volume over 6000, and great reviews—fewer than 20 three-star reviews and less than 5 two-star reviews. To go with that, I need some Canvas Utility Trousers in size XL. They should be selling well, with a monthly sales volume over 300, and have a balanced review profile with more than 100 four-star reviews and more than 10 two-star reviews.

I also need a few other items. One is a green product in size XL that can get to me fast, so the transport time has to be less than 2 days. It must have more than 1100 total reviews and fewer than 10 one-star reviews. I’m also looking for something in Wine Red with a transport time under 3 days and over 1200 total reviews. Additionally, I need a very popular Navy Blue, all-seasons item with a monthly sales volume of more than 950. Lastly, I'm looking for a men's product from Patagonia with a stock quantity of more than 100. Please help me find options that fall within a budget of 3537 to 3599.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
