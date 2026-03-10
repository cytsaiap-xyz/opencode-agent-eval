# DeepPlanning Shopping Task Level 1 #25

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm putting together a few new outfits and need to find some specific pieces. First, I’m looking for a black 'Long-Sleeve Training Top' that's suitable for all seasons; to ensure it’s well-regarded, it must have more than 200 four-star ratings. To pair with that, I need some khaki 'Utility Cargo Pants' from the brand Vans that are popular, so they should have a monthly sales volume of more than 500. While I'm at it, I want another item from Vans for the spring/autumn season. It has to be a bestseller, with a total sales volume over 12,000, more than 1,000 total reviews, and fewer than 10 one-star reviews. Lastly, I urgently need something in light blue. It must have a transport time of less than 3 days, a stock quantity greater than 200, and fewer than 15 two-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
