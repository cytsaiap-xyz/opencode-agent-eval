# DeepPlanning Shopping Task Level 2 #29

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing a major wardrobe refresh and need to find a few specific things. First, I'm looking for two items from Puma. The first one has to be exceptionally well-reviewed, with an average score over 4.5, more than 1100 total reviews, over 900 five-star reviews, and fewer than 40 three-star reviews. The second Puma item I need must be olive green, with an average score greater than 4.5, less than 30 one-star reviews, and more than 180 four-star reviews. To go with that, I need a popular beige product from Levi's that has sold over 3500 units and can be delivered in under 3 days, while also having more than 30 three-star ratings. Finally, I'm getting two pairs of shoes from Vans: the Men's Old Skool Classic Skate Shoes in white, size 44, and an item whose name contains 'Sk8-Hi MTE-1' in silver, with over 120 total reviews and fewer than 10 three-star reviews. Please help me find options that fall within a budget of 2875 to 2878.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
