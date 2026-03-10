# DeepPlanning Shopping Task Level 2 #13

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm getting ready for a last-minute trip and need some things delivered fast. First, I'm looking for a very specific item with the name 'Skater Cropped Hoodie' in Light Grey, size M. It needs to be popular, so its total sales volume must be over 3400 with a rating above 4.5 stars, and it must have a transport time of less than 2. I also need another top for women, specifically a sweatshirt in size M, that can also be delivered with a transport time under 2. For footwear, I'm searching for some 'Waterproof Hiking Shoes' from the brand Columbia in Beige, size 38, for women. Additionally, I need a reliable all-seasons item that has fewer than 15 one-star reviews and less than 30 three-star reviews, with a transport time of less than 2. Lastly, I want something for trail running, and I'm very particular about quality, so it must have fewer than 5 two-star and fewer than 5 three-star reviews, and also arrive in under 2 for transport time. My budget is between 3465 and 3785.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
