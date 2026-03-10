# DeepPlanning Shopping Task Level 1 #11

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm updating my workout wardrobe and need to get a few specific things. First, I'm looking for a very popular item in size 43 and Orange; it has to be a bestseller with a monthly sales volume over 850 and more than 12,000 total sales. Next, I need a men's 'Pima Cotton Polo' in Light Grey, size L. Since I need it quickly, it must have a transport time of less than 2 days and be well-reviewed, with over 1800 total reviews. I'm also getting a red 'Men's Air-Flow Performance Training Top' from Li-Ning, ensuring it's in stock with a quantity over 400 and has fewer than 10 one-star reviews. Finally, I'm looking for a white 'Men's National Pride Graphic Training Top' that can also be delivered in under 2 days, has over 3000 total reviews, and fewer than 100 three-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
