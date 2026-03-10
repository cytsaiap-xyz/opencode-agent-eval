# DeepPlanning Shopping Task Level 1 #38

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe update and have some very specific things I'm looking for. First, I need to find a product with 'RS-X' in its name that can be delivered in less than 2 days. It has to be popular, with a total sales volume over 4800, more than 40 four-star ratings, and an average score above 4.5. Next, I'm looking for a purple item from Zara in a size L, and it must have more than 400 total reviews, including over 90 four-star ratings. I also want a highly-rated Nike product with 'Air Glide Pro' in its name, specifically one with an average score over 4.5 and more than 1500 five-star ratings. Then, I need a popular men's item from Puma with a sales volume over 6500 that can also ship in less than 2 days. Lastly, I'm getting an item from The North Face in size L that has more than 20 three-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
