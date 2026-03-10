# DeepPlanning Shopping Task Level 1 #46

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe refresh and need to find several specific things. First, I'm looking for a dark green, all-seasons item from Nike that has a transport time of less than 2 and fewer than 15 two-star ratings. I also want to finally get the Nike Air Sprint 'Bubblegum' Sneakers for men in a size 44. For the summer, I need an orange item from Gucci with 'Interlocking G Cotton Polo' in its name. For a reliable everyday option, I'm looking for Uniqlo's Men's Casual Comfort Sneakers, but only if the average score is greater than 4.5. I also need a popular blue product in a size 44 with a transport time of less than 2 days and more than 4000 total reviews. Lastly, for winter, I want a khaki item with 'Hoodie' in the name that can also arrive in less than 2 days and has fewer than 10 two-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
