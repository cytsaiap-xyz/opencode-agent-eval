# DeepPlanning Shopping Task Level 1 #19

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe overhaul online and have a very specific list. First, I need a popular silver item for men from Nike that has a total sales volume of over 18,000. Next, for the transitional seasons, I'm looking for a navy blue product for spring/autumn from Under Armour, and it must have fewer than 20 one-star reviews. To go with that, I need some grey 'Casual Trousers' that are well-liked, with a sales volume over 11,000, more than 1,800 five-star ratings, and fewer than 15 one-star and 20 two-star ratings. I also need a highly-rated product from Uniqlo that can ship quickly, with a transport time of less than 2 days, an average score above 4.5, and more than 6,800 five-star reviews. Lastly, I'm searching for a pair of brown 'Suede Winter Ankle Boots' from Zara, which also must have a transport time of less than 2 days.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
