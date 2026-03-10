# DeepPlanning Shopping Task Level 1 #7

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a major wardrobe refresh and need to find a few specific things online. First up, I'm looking for a black item from Under Armour that includes 'HOVR Phantom' in its name; I want to make sure it's popular, so it needs more than 400 total reviews but fewer than 10 two-star ratings. To go with it, I need a white 'Ruffled Short-Sleeve Top' that will arrive in less than 3 days, has over 300 total reviews, and fewer than 5 two-star reviews. Next, I'm searching for something from Levi's that's selling well, with a monthly sales volume over 200, and has very few bad reviews—specifically, less than 10 one-star and less than 15 two-star reviews, and a transport time under 2. I also need a popular grey item with a total sales volume of more than 4500 that can also ship in less than 2. Finally, I’m looking for an olive green product from Timberland that's definitely in stock with a quantity over 100 and a total sales volume of more than 1900.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
