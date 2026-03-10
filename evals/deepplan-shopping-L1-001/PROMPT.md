# DeepPlanning Shopping Task Level 1 #1

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm putting together a complete footwear collection and need to order several specific items online. First, I'm looking for something from Nike in orange that has strong customer satisfaction - it needs fewer than 10 one-star reviews and more than 300 four-star reviews to ensure quality. Next, I need the Men's Puma RS-X Reinvention Classic White Sneakers from Puma, and since I need them quickly, the transport time must be less than 2 days. This item should have more than 3000 total reviews but fewer than 30 two-star reviews to confirm it's well-received. I also need an all-seasons product that can arrive within 1 day and has fewer than 30 two-star reviews for reliability. Additionally, I'm specifically looking for the Men's Aerios FL 2 GTX Trail Shoe in gold, which must have more than 200 five-star reviews and fewer than 5 one-star reviews to guarantee excellent quality. Finally, I need a summer item from Vans that's highly rated with more than 250 five-star reviews and fewer than 5 one-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
