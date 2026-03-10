# DeepPlanning Shopping Task Level 2 #3

You are building a shopping assistant agent. Given the user's shopping request in `task-data.json`, analyze the data and write your answer to `answer.json`.

## Level 2 Objective

Find the cheapest products matching all requirements within the given budget.

## User Request

I'm doing some online shopping to refresh my wardrobe. First, I’m looking for a specific 'Women's V-Neck Silk Blend Top' in Light Grey; it should be popular, with a total sales volume over 400 and more than 10 four-star reviews. Next, I need something from Puma and I need it quickly, so the transport time must be less than 2 days. To be sure about the quality, it must have fewer than 25 three-star reviews, less than 10 two-star reviews, and a stock quantity over 300. I also need a women's 'Synchilla Fleece Pullover' from Patagonia with more than 20 three-star ratings. From Patagonia, I’m also getting a highly-rated item in size 39 with an average score above 4.5, over 300 five-star ratings, and more than 50 four-star ratings. Lastly, I'm searching for a Blue product from Columbia that has an average score greater than 4.5, a stock quantity of more than 400, and less than 10 two-star ratings. I'd like to keep my total spending between 7250 and 7292. Please help me find the products that meet my requirements.

## Your Task

Read `task-data.json` and analyze the user's shopping request. Parse the query to identify each product requirement (brand, color, size, rating, review constraints, etc.), budget constraints, and coupon optimization opportunities.

Write your answer to `answer.json` as a cart object with:
- `items`: Array of matching products, each with `name`, `brand`, `price`, `matched_requirement`
- `subtotal`: Sum of all item prices
- `applied_coupons`: Array of applied coupons (empty if none)
- `total_discount`: Total discount amount
- `final_price`: subtotal minus total_discount
- `level`: The task level (1, 2, or 3)
