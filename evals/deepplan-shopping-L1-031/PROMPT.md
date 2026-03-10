# DeepPlanning Shopping Task Level 1 #31

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing some online shopping to get my wardrobe ready for the upcoming season. To start, I'm looking for some 'Cargo Pants' suitable for Spring/Autumn. I want a highly-rated pair that ships fast, so it needs to have more than 2300 five-star ratings and a transport time under 2 days. To go with them, I need a specific item from Vans in Dark Green, size L, with excellent reviews—fewer than 5 two-star ratings and less than 10 three-star ratings. I also want a highly-rated brown product for men with an average score above 4.5 that can be delivered in less than 2 days. On a similar note, I'm searching for a camel-colored item with more than 15 four-star reviews and a transport time under 2 days. Lastly, I'm looking for two items from Converse. The first must be popular, with over 1000 total reviews, 400 monthly sales, more than 300 in stock, and a transport time under 5 days. The second Converse item must be a size L and have a great review profile, with over 1200 total reviews, more than 180 four-star reviews, and fewer than 15 two-star reviews.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
