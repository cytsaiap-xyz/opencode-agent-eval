# DeepPlanning Shopping Task Level 1 #4

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 1 Objective

Find the cheapest products matching all requirements.

## User Request

I'm doing a big wardrobe update for all seasons and have a few specific things I need to find. First, for summer, I'm looking for a pink 'Active Performance Tank Top' from Puma with an average score greater than 4.5. For the transitional Spring/Autumn weather, I need a women's item in light grey that has 'Cloudfoam Stride' in the name and has been well-reviewed, specifically with more than 130 four-star reviews and over 15 three-star reviews. I also need to find a popular camel-colored item from Bosideng with a monthly sales volume of more than 550, and since I need it urgently, the transport time must be less than 2 days. For my feet, I'm after a size 43 'Sunbeam Strider' from Li-Ning with an average score over 4.5 and fewer than 10 one-star reviews. Lastly, I just need a simple summer item from Converse in size XXL.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
