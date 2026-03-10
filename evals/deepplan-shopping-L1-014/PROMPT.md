# DeepPlanning Shopping Task Level 1 #14

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm getting ready for an event and need to put an outfit together fast, so everything must have a transport time of less than 2 days. First, I'm looking for a generally well-regarded product with an average score over 4.5 and more than 400 five-star reviews. For my outfit, I want a specific pair of 'Classic Slip-On Canvas Shoes' for women from the brand Vans; they need to be popular, with a monthly sales volume greater than 1200. To go with them, I need the 'Women's Tiro Winterized Fleece Bottoms', ensuring they are top-quality with over 1300 five-star reviews and fewer than 15 two-star reviews. I also need a 'Ribbed Tank Top' for women that has over 250 five-star ratings and is in stock with a quantity of more than 150. Finally, I'm searching for a brown item for women from Adidas that has more than 600 five-star ratings.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
