# DeepPlanning Shopping Task Level 3 #12

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 3 Objective

Find optimal products with coupon optimization to minimize final price within budget.

## User Request

I'm putting together a complete summer wardrobe and need to find three specific items online. First, I'm looking for a women's product with "Linen" in the name that has excellent reviews - it needs more than 280 five-star reviews and fewer than 5 one-star reviews to ensure quality. Next, I want something with "Off The Wall" in the name that's proven popular with minimal negative feedback; it should have total sales volume greater than 3500, fewer than 3 one-star reviews, and fewer than 4 two-star reviews. Finally, I need an item in size 39 that has exactly 45 four-star ratings and a total of 388 reviews, which suggests it has consistent customer feedback. These three pieces should give me a well-rounded collection with reliable quality based on their review patterns.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
