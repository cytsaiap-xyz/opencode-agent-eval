# DeepPlanning Shopping Task Level 2 #20

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm updating my winter wardrobe and have a few specific items I need to find. First, I'm looking for something in a Camel color that can ship very quickly, so the transport time must be less than 2. It has to be a popular choice with a total sales volume over 2500 and fewer than 5 two-star ratings. Next, I'm specifically searching for the 'Women's Off The Wall Corduroy Trousers' that have more than 35 five-star reviews, a stock quantity over 100, and less than a single one-star review. I also need a winter piece in size S that is well-reviewed, with more than 350 total reviews and fewer than 15 three-star reviews. Finally, I'm looking for a size 36 item from Patagonia with 'Snowdrifter' in the name, which must have an average score over 4.5 and fewer than 5 two-star reviews. I'm looking for something that costs somewhere in the range of 3438 to 3684.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
